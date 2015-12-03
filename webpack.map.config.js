'use strict';

var path            = require('path'),
  webpack         = require('webpack'),
  nodeModulesPath = path.join(__dirname, 'node_modules');

var js_root_detail = './map_detail/';
var js_detail_dist = path.join(__dirname, './dist/map_detail/origin');
var js_detail_dist_min = path.join(__dirname, './dist/map_detail/min');

// 0 stands for development, 1 stands for production
// for development mode: NODE_ENV=0 webpack
// for production mode: NODE_ENV=1 webpack
var ENV = !!(+process.env.NODE_ENV || 0);

module.exports = [{
  name: 'details',
  entry: {
    earthquake: js_root_detail + 'bubble/earthquake/earthquake.js',
    mapbubble: js_root_detail + 'bubble/mapbubble/mapbubble.js',
    twpopulation: js_root_detail + 'choropleth/tw/twpopulation.js',
    unemployment: js_root_detail + 'choropleth/us/unemployment.js',
    historytwpopulation: js_root_detail + 'combine/twhistorypopulation.js'

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

  externals: ENV ? {}: {
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
