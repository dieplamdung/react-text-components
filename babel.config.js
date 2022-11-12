const path = require('path');

function resolveAliasPath(relativeToBabelConf) {
  const resolvedPath = path.relative(process.cwd(), path.resolve(__dirname, relativeToBabelConf));
  return `./${resolvedPath.replace('\\', '/')}`;
}

const defaultAlias = {
  '@bandai/react-components': resolveAliasPath('./packages/react-components/src'),
  '~': resolveAliasPath('./packages/react-components/src'),
};
module.exports = function getBabelConfig(api) {
  const useESModules = api.env(['legacy', 'modern', 'stable']);

  const presets = [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        browserslistEnv: process.env.BABEL_ENV || process.env.NODE_ENV,
        debug: process.env.MUI_BUILD_VERBOSE === 'true',
        modules: useESModules ? false : 'commonjs',
        shippedProposals: api.env('modern'),
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/preset-typescript',
  ];

  const plugins = [
    'babel-plugin-optimize-clsx',
    // Need the following 3 proposals for all targets in .browserslistrc.
    // With our usage the transpiled loose mode is equivalent to spec mode.
    ['@babel/plugin-proposal-class-properties', {
      loose: true
    }],
    ['@babel/plugin-proposal-private-methods', {
      loose: true
    }],
    ['@babel/plugin-proposal-private-property-in-object', {
      loose: true
    }],
    ['@babel/plugin-proposal-object-rest-spread', {
      loose: true
    }],
    [
      '@babel/plugin-transform-runtime',
      {
        useESModules,
        // any package needs to declare 7.4.4 as a runtime dependency. default is ^7.0.0
        version: '^7.4.4',
      },
    ],
    [
      'babel-plugin-transform-react-remove-prop-types',
      {
        mode: 'unsafe-wrap',
      },
    ],
    [
      'babel-plugin-module-resolver',
      {
        alias: {
          ...defaultAlias,
        },
        root: ['./'],
      },
    ],
  ];

  return {
    assumptions: {
      noDocumentAll: true,
    },
    presets,
    plugins,
    ignore: [/@babel[\\|/]runtime/], // Fix a Windows issue.
    overrides: [{
      exclude: /\.test\.(js|ts|tsx)$/,
      plugins: ['@babel/plugin-transform-react-constant-elements'],
    }, ],
    env: {
      development: {
        plugins: [
          [
            'babel-plugin-module-resolver',
            {
              alias: {
                ...defaultAlias,
              },
              root: ['./'],
            },
          ],
        ],
      },
      legacy: {
        plugins: [
          // IE11 support
          '@babel/plugin-transform-object-assign',
        ],
      },
    },
  };
};