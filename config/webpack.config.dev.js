'use strict';
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');

const ROOT_DIR = path.resolve('.');

const mainConfig = require('./webpack.config.base')(true);
mainConfig.mode = 'development';
mainConfig.target = 'electron-main';
mainConfig.entry = { main: './src/main.js' };


const rendererConfig = require('./webpack.config.base')(true);
rendererConfig.mode = 'development';
rendererConfig.target = 'electron-renderer';
rendererConfig.entry = { renderer: './src/renderer.jsx' };
rendererConfig.plugins.push( new HtmlPlugin({
  inject: true,
  template: path.resolve(ROOT_DIR, 'public/index.html'),
}),);

module.exports = [mainConfig, rendererConfig];