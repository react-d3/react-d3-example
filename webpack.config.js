'use strict';

var path            = require('path'),
  webpack         = require('webpack'),
  nodeModulesPath = path.join(__dirname, 'node_modules');

var js_root = './';
var js_dist = path.join(__dirname, './dist/origin');
var js_dist_min = path.join(__dirname, './dist/min');

// 0 stands for development, 1 stands for production
// for development mode: NODE_ENV=0 webpack
// for production mode: NODE_ENV=1 webpack
var ENV = !!(+process.env.NODE_ENV || 0);

module.exports = [{
  name: 'coreComponent-es5',
  devtool: ENV ? "source-map": '',
  entry: {
    xaxis_garbage: './xaxis/es5/xaxis_garbage.js',
    xaxis_click: './xaxis/es5/xaxis_click.js',
    legend_click: './legend/legend_click.jsx',
    line_garbage: './line/es5/line_garbage.js',
    pie_tooltip: './pie_tooltip/pie_tooltip.js',
    bar_group_brush: './bar_group_brush/bar_group_brush.js'
  },

  output: {
    path: ENV ? js_dist_min + '/es5'  : js_dist + '/es5',
    filename: ENV ? '[name].min.js': '[name].js'
  },

  module: {
    loaders: [
      {
        test: [/\.jsx$/, /\.js$/],
        exclude: /node_modules/,
        loaders: ["jsx-loader"],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ],
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },

  plugins: ENV ? [
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.ProvidePlugin({
      'd3': 'd3'
    })
  ]: [
    new webpack.ProvidePlugin({
      'd3': 'd3'
    })
  ]
}];
