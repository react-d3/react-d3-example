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
    chart: './chart/chart.js',
    donut: './donut/donut.js',
    grid: './grid/grid.js',
    xaxis_garbage: './xaxis/xaxis_garbage.js',
    xaxis_click: './xaxis/xaxis_click.js',
    yaxis_garbage: './yaxis/yaxis_garbage.js',
    legend_click: './legend/legend_click.jsx',
    legend: './legend/legend.js',
    line_garbage: './line/line_garbage.js',
    line_garbage_tooltip: './line_tooltip/line_garbage_tooltip.js',
    line_multi_garbage: './line_multi/line_multi_garbage.js',
    line_multi_garbage_tooltip: './line_multi_tooltip/line_multi_garbage_tooltip.js',
    scatter_garbage: './scatter/scatter_garbage.js',
    scatter_garbage_tooltip: './scatter_tooltip/scatter_garbage_tooltip.js',
    area_garbage: './area/area_garbage.js',
    area_stack: './area_stack/area_stack.js',
    area_stack_tooltip: './area_stack_tooltip/area_stack_tooltip.js',
    pie: './pie/pie.js',
    pie_tooltip: './pie_tooltip/pie_tooltip.js',
    bar: './bar/bar.js',
    bar_tooltip: './bar_tooltip/bar_tooltip.js',
    bar_group: './bar_group/bar_group.js',
    bar_group_tooltip: './bar_group_tooltip/bar_group_tooltip.js',
    bar_stack: './bar_stack/bar_stack.js',
    bar_stack_tooltip: './bar_stack_tooltip/bar_stack_tooltip.js',
    bar_group_brush: './bar_group_brush/bar_group_brush.js',
    bar_stack_zoom: './bar_stack_zoom/bar_stack_zoom.js'

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
