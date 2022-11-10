/* eslint-disable no-console */
// Based on similar script in React
// https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/scripts/prettier/index.js

// supported modes = check, write

const glob = require('globby');
const prettier = require('prettier');
const fs = require('fs');
const path = require('path');
const yargs = require('yargs');

// FIXME: Incorrect assumption
const workspaceRoot = process.cwd();

function runPrettier(options) {
  const { shouldWrite } = options;

  let didWarn = false;
  let didError = false;

  const warnedFiles = [];
  const ignoredFiles = fs
    .readFileSync(path.join(workspaceRoot, '.eslintignore'), 'utf-8')
    .split(/\r*\n/)
    .filter((line) => {
      return (
        // ignore comments
        !line.startsWith('#') &&
        // skip empty lines
        line.length > 0
      );
    })
    .map((line) => {
      if (line.startsWith('/')) {
        // "/" marks the cwd of the ignore file.
        // Since we declare the dirname of the gitignore the cwd we can prepend "." as a shortcut.
        return `.${line}`;
      }
      return line;
    });

  const files = glob.sync('**/*.{js,md,tsx,ts,json}', {
    cwd: workspaceRoot,
    gitignore: true,
    ignore: [...ignoredFiles],
    dot: true,
  });
  if (!files.length) {
    return;
  }

  const prettierConfigPath = path.join(workspaceRoot, 'prettier.config.js');

  files.forEach((file) => {
    const prettierOptions = prettier.resolveConfig.sync(file, {
      config: prettierConfigPath,
    });

    try {
      const input = fs.readFileSync(file, 'utf8');
      if (shouldWrite) {
        console.log(`Formatting ${file}`);
        const output = prettier.format(input, { ...prettierOptions, filepath: file });
        if (output !== input) {
          fs.writeFileSync(file, output, 'utf8');
        }
      } else {
        console.log(`Checking ${file}`);
        if (!prettier.check(input, { ...prettierOptions, filepath: file })) {
          warnedFiles.push(file);
          didWarn = true;
        }
      }
    } catch (error) {
      didError = true;
      console.log(`\n\n${error.message}`);
      console.log(file);
    }
  });

  if (didWarn) {
    console.log(
      '\n\nThis project uses prettier to format all JavaScript code.\n' +
        `Please run yarn prettier:all` +
        ' and commit the changes to the files listed below:\n\n',
    );
    console.log(warnedFiles.join('\n'));
  }

  if (didWarn || didError) {
    throw new Error('Triggered at least one error or warning');
  }
}

async function run(argv) {
  const { mode } = argv;
  const shouldWrite = mode === 'write';

  runPrettier({ shouldWrite });
}

yargs
  .command({
    command: '$0 [mode]',
    description: 'formats codebase',
    builder: (command) => {
      return command.positional('mode', {
        description: '"write" | "check"',
        type: 'string',
        default: 'check',
      });
    },
    handler: run,
  })
  .help()
  .strict(true)
  .version(false)
  .parse();
