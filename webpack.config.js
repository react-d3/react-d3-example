'use strict';

var path            = require('path'),
  webpack         = require('webpack'),
  nodeModulesPath = path.join(__dirname, 'node_modules');

var js_root_detail = './detail/';
var js_detail_dist = path.join(__dirname, './dist/detail/origin');
var js_detail_dist_min = path.join(__dirname, './dist/detail/min');

// 0 stands for development, 1 stands for production
// for development mode: NODE_ENV=0 webpack
// for production mode: NODE_ENV=1 webpack
var ENV = !!(+process.env.NODE_ENV || 0);

module.exports = [{
  name: 'details',
  entry: {
    chart: js_root_detail + 'chart/chart.js',
    donut: js_root_detail + 'donut/donut.js',
    grid: js_root_detail + 'grid/grid.js',
    xaxis_garbage: js_root_detail + 'xaxis/xaxis_garbage.js',
    xaxis_click: js_root_detail + 'xaxis/xaxis_click.js',
    yaxis_garbage: js_root_detail + 'yaxis/yaxis_garbage.js',
    legend_click: js_root_detail + 'legend/legend_click.jsx',
    legend: js_root_detail + 'legend/legend.js',
    line_garbage: js_root_detail + 'line/line_garbage.js',
    line_garbage_tooltip: js_root_detail + 'line_tooltip/line_garbage_tooltip.js',
    line_garbage_brush: js_root_detail + 'line_brush/line_garbage_brush.js',
    line_garbage_zoom: js_root_detail + 'line_zoom/line_garbage_zoom.js',
    line_multi_garbage: js_root_detail + 'line_multi/line_multi_garbage.js',
    line_multi_garbage_tooltip: js_root_detail + 'line_multi_tooltip/line_multi_garbage_tooltip.js',
    line_multi_garbage_brush: js_root_detail + 'line_multi_brush/line_multi_garbage_brush.js',
    line_multi_garbage_zoom: js_root_detail + 'line_multi_zoom/line_multi_garbage_zoom.js',
    scatter_garbage: js_root_detail + 'scatter/scatter_garbage.js',
    scatter_garbage_tooltip: js_root_detail + 'scatter_tooltip/scatter_garbage_tooltip.js',
    scatter_garbage_brush: js_root_detail + 'scatter_brush/scatter_garbage_brush.js',
    scatter_garbage_zoom: js_root_detail + 'scatter_zoom/scatter_garbage_zoom.js',
    area_garbage: js_root_detail + 'area/area_garbage.js',
    area_stack: js_root_detail + 'area_stack/area_stack.js',
    area_stack_tooltip: js_root_detail + 'area_stack_tooltip/area_stack_tooltip.js',
    area_stack_brush: js_root_detail + 'area_stack_brush/area_stack_brush.js',
    area_stack_zoom: js_root_detail + 'area_stack_zoom/area_stack_zoom.js',
    pie: js_root_detail + 'pie/pie.js',
    pie_tooltip: js_root_detail + 'pie_tooltip/pie_tooltip.js',
    bar: js_root_detail + 'bar/bar.js',
    bar_tooltip: js_root_detail + 'bar_tooltip/bar_tooltip.js',
    bar_brush: js_root_detail + 'bar_brush/bar_brush.js',
    bar_zoom: js_root_detail + 'bar_zoom/bar_zoom.js',
    bar_group: js_root_detail + 'bar_group/bar_group.js',
    bar_group_brush: js_root_detail + 'bar_group_brush/bar_group_brush.js',
    bar_group_tooltip: js_root_detail + 'bar_group_tooltip/bar_group_tooltip.js',
    bar_group_zoom: js_root_detail + 'bar_group_zoom/bar_group_zoom.js',
    bar_stack: js_root_detail + 'bar_stack/bar_stack.js',
    bar_stack_tooltip: js_root_detail + 'bar_stack_tooltip/bar_stack_tooltip.js',
    bar_stack_brush: js_root_detail + 'bar_stack_brush/bar_stack_brush.js',
    bar_stack_zoom: js_root_detail + 'bar_stack_zoom/bar_stack_zoom.js'

  },

  output: {
    path: ENV ? js_detail_dist_min  : js_detail_dist,
    filename: ENV ? '[name].min.js': '[name].js'
  },

  module: {
    loaders: [
      {
        test: [/\.jsx$/, /\.js$/],
        include: /detail/,
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

  externals: {
    //don't bundle the 'react' npm package with our bundle.js
    //but get it from a global 'React' variable
    'react': 'React',
    'react-dom': 'ReactDOM',
    'd3': 'd3'
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
