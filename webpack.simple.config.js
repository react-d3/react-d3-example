'use strict';

var path            = require('path'),
  webpack         = require('webpack'),
  nodeModulesPath = path.join(__dirname, 'node_modules');

var js_root_simple = './simple/';
var js_simple_dist = path.join(__dirname, './dist/simple/origin');
var js_simple_dist_min = path.join(__dirname, './dist/simple/min');


// 0 stands for development, 1 stands for production
// for development mode: NODE_ENV=0 webpack
// for production mode: NODE_ENV=1 webpack
var ENV = !!(+process.env.NODE_ENV || 0);

module.exports = [{
  name: 'simple',
  devtool: ENV ? "source-map": '',
  entry: {
    donut: js_root_simple + 'donut/donut.js',
    line_garbage: js_root_simple + 'line/line_garbage.js',
    line_user: js_root_simple + 'line_user/line_user.js',
    line_garbage_tooltip: js_root_simple + 'line_tooltip/line_garbage_tooltip.js',
    line_garbage_brush: js_root_simple + 'line_brush/line_garbage_brush.js',
    line_garbage_zoom: js_root_simple + 'line_zoom/line_garbage_zoom.js',
    line_multi_garbage: js_root_simple + 'line_multi/line_multi_garbage.js',
    line_multi_garbage_tooltip: js_root_simple + 'line_multi_tooltip/line_multi_garbage_tooltip.js',
    line_multi_garbage_brush: js_root_simple + 'line_multi_brush/line_multi_garbage_brush.js',
    line_multi_garbage_zoom: js_root_simple + 'line_multi_zoom/line_multi_garbage_zoom.js',
    scatter_garbage: js_root_simple + 'scatter/scatter_garbage.js',
    scatter_garbage_tooltip: js_root_simple + 'scatter_tooltip/scatter_garbage_tooltip.js',
    scatter_garbage_brush: js_root_simple + 'scatter_brush/scatter_garbage_brush.js',
    scatter_garbage_zoom: js_root_simple + 'scatter_zoom/scatter_garbage_zoom.js',
    area_garbage: js_root_simple + 'area/area_garbage.js',
    area_stack: js_root_simple + 'area_stack/area_stack.js',
    area_stack_tooltip: js_root_simple + 'area_stack_tooltip/area_stack_tooltip.js',
    area_stack_brush: js_root_simple + 'area_stack_brush/area_stack_brush.js',
    area_stack_zoom: js_root_simple + 'area_stack_zoom/area_stack_zoom.js',
    pie: js_root_simple + 'pie/pie.js',
    pie_tooltip: js_root_simple + 'pie_tooltip/pie_tooltip.js',
    bar: js_root_simple + 'bar/bar.js',
    bar_tooltip: js_root_simple + 'bar_tooltip/bar_tooltip.js',
    bar_brush: js_root_simple + 'bar_brush/bar_brush.js',
    bar_zoom: js_root_simple + 'bar_zoom/bar_zoom.js',
    bar_group: js_root_simple + 'bar_group/bar_group.js',
    bar_group_brush: js_root_simple + 'bar_group_brush/bar_group_brush.js',
    bar_group_tooltip: js_root_simple + 'bar_group_tooltip/bar_group_tooltip.js',
    bar_group_zoom: js_root_simple + 'bar_group_zoom/bar_group_zoom.js',
    bar_stack: js_root_simple + 'bar_stack/bar_stack.js',
    bar_stack_tooltip: js_root_simple + 'bar_stack_tooltip/bar_stack_tooltip.js',
    bar_stack_brush: js_root_simple + 'bar_stack_brush/bar_stack_brush.js',
    bar_stack_zoom: js_root_simple + 'bar_stack_zoom/bar_stack_zoom.js'

  },

  output: {
    path: ENV ? js_simple_dist_min  : js_simple_dist,
    filename: ENV ? '[name].min.js': '[name].js'
  },

  module: {
    loaders: [
      {
        test: [/\.jsx$/, /\.js$/],
        include: /simple/,
        loaders: ["jsx-loader"],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ],
  },

  externals: {
    //don't bundle the 'react' npm package with our bundle.js
    //but get it from a global 'React' variable
    // 'react': 'React',
    // 'react-dom': 'ReactDOM',
    // 'd3': 'd3'
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },

  plugins: ENV ? [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false
    }),
    new webpack.ProvidePlugin({
      'd3': 'd3'
    })
  ]: [
    new webpack.ProvidePlugin({
      'd3': 'd3'
    })
  ]
}];
