const path = require('path');

module.exports = {
  context: path.resolve(__dirname),
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias: {
      '~': path.join(__dirname, 'packages/react-components/src'),
    },
    extensions: ['.js', '.ts', '.tsx', '.d.ts'],
  },
};
