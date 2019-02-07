const {spawn} = require('child_process');
const path = require('path');
const webpack = require('webpack');
const configs = require('../config/webpack.config.dev');

const children = [];

configs.forEach((config, index) => {
  const compiler = webpack(config);
  const watching = compiler.watch({
    aggregateTimeout: 300,
    poll: undefined
  }, (err, stats) => {
    if (config.target === 'electron-main') {
      if (children[index]) {
        children[index][0].kill();
        children[index][1].close();
      }

      const extension = process.platform === 'win32' ? '.cmd' : '';
      const electron = path.resolve(`./node_modules/.bin/electron${extension}`);
      const main = path.resolve('./build/webpack/main.js');
      const child = spawn(electron, [main]);
      children[index] = [child, watching];
      child.on('close', (code, signal) => {
        watching.close();
      });

      child.stdout.on('data', function(data) {
        console.log(data.toString());
      });
    }
  });
});

