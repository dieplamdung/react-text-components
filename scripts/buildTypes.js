const childProcess = require('child_process');
const glob = require('fast-glob');
const fse = require('fs-extra');
const path = require('path');
const { promisify } = require('util');
const yargs = require('yargs');

const exec = promisify(childProcess.exec);

async function main() {
  const packageRoot = process.cwd();

  const tsconfigPath = path.join(packageRoot, 'tsconfig.build.json');
  if (!fse.existsSync(tsconfigPath)) {
    throw new Error(
      'Unable to find a tsconfig to build this project. ' +
        `The package root needs to contain a 'tsconfig.build.json'. ` +
        `The package root is '${packageRoot}'`,
    );
  }

  await exec(['yarn', 'tsc', '--project', tsconfigPath].join(' '));

  const publishDir = path.join(packageRoot, 'build');
  const declarationFiles = await glob('**/*.d.ts', {
    absolute: true,
    cwd: publishDir,
  });
  if (declarationFiles.length === 0) {
    throw new Error(`Unable to find declaration files in '${publishDir}'`);
  }
}

yargs
  .command({
    command: '$0',
    description:
      'Builds a project with a fix for https://github.com/microsoft/TypeScript/issues/39117',
    handler: main,
  })
  .help()
  .strict(true)
  .version(false)
  .parse();
