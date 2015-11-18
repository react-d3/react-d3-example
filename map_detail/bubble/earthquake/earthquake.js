"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var topojson = require('topojson');
var MapBubble = require('react-d3-map-bubble').MapBubble;

var css= require('../css/bubble.css');


// Example
(function() {
  var width = 960,
  height = 960;

  var world = require('json!../data/world-50m.json');
  var earthquake = require('json!../data/earthquake.json');

  // data should be a MultiLineString
  var countries = topojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; });
  /// data should be polygon
  var land = topojson.feature(world, world.objects.land);

  // class
  var meshClass = 'border';
  var polygonClass = 'land';

  // domain
  var domain = {
    scale: 'sqrt',
    domain: d3.extent(earthquake, function(d) {return +d.deaths}),
    range: [0, 50]
  };

  var circles = earthquake
  var circleValue = function(d) { return +d.deaths; };

  var circleX = function(d) {return +d.lng};
  var circleY = function(d) {return +d.lat};

  var tooltipContent = function(d) {
    delete d.cell;
    delete d.comments;
    return d;
  }

  var scale = (width + 1) / 2 / Math.PI;
  var translate = [width / 2, height / 2];
  var precision = .1;
  var projection = 'mercator';

  ReactDOM.render(
    <MapBubble
      width= {width}
      height= {height}
      domain= {domain}
      dataCircle= {circles}
      circleValue= {circleValue}
      circleClass= {'bubble'}
      circleX= {circleX}
      circleY= {circleY}
      tooltipContent= {tooltipContent}
      projection= {projection}
      precision= {precision}
      translate= {translate}
      scale= {scale}
      showGraticule= {true}
      showTooltip= {true}
      showLegend= {false}
      showTile= {true}
    />
  , document.getElementById('blank-earthquake')
  )

})()
