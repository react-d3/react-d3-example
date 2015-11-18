"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var topojson = require('topojson');
var MapBubble = require('react-d3-map-bubble').MapBubble;

var css= require('../css/bubble.css');

// Example
// http://bl.ocks.org/mbostock/9943478
(function() {
  var width = 960,
  height = 600;

  var us = require('json!../data/us.json');

  // data should be a MultiLineString
  var dataStates = topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; });
  /// data should be polygon
  var dataCounties = topojson.feature(us, us.objects.nation);

  // class
  var meshClass = 'border';
  var polygonClass = 'land';

  // domain
  var domain = {
    scale: 'sqrt',
    domain: [0, 1e6],
    range: [0, 15]
  };

  var circles = topojson.feature(us, us.objects.counties).features
      .sort(function(a, b) { return b.properties.population - a.properties.population; })
  var circleValue = function(d) { return +d.properties.population; };
  var projection = 'null';

  var tooltipContent = function(d) {return d.properties;}

  ReactDOM.render(
    <MapBubble
      width= {width}
      height= {height}
      dataPolygon= {dataCounties}
      polygonClass= {polygonClass}
      dataMesh= {dataStates}
      meshClass = {meshClass}
      domain= {domain}
      dataCircle= {circles}
      circleValue= {circleValue}
      circleClass= {'bubble'}
      projection= {projection}
      tooltipContent= {tooltipContent}
      showGraticule= {false}
      showTooltip= {true}
      showLegend= {true}
    />
  , document.getElementById('blank-mapbubble')
  )

})()
