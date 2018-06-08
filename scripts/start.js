const { spawn, exec } = require('child_process');
const path = require('path');
const webpack = require('webpack');
const config = require('../config/webpack.config.dev');

const compiler = webpack(config);

const watching = compiler.watch({
  aggregateTimeout: 300,
  poll: undefined
}, (err, stats) => {
  const electron = path.resolve('./node_modules/.bin/electron');
  const main = path.resolve('./build/webpack/main.js');
  const child = spawn(electron, [main]);
  child.on('close', (code, signal) => {
      watching.close();
    });
  });
