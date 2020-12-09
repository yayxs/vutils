const webpack = require("webpack");
const path = require("path");
const pkg = require("./package.json");

module.exports = {
  mode: 'production',
  entry:'./src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vast-utils.js',
    // 三种形式的使用 es common amd
    libraryTarget: 'umd',
    // library 全局变量来使用
    library: 'vastUtils', 
  }
}