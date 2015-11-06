"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Xaxis = require('react-d3-core').Xaxis;

(function() {
  // load your general data, for building xDomain.
  var chartData = require("dsv?delimiter=,!../data/garbage.csv");
  // your date format, use for parsing
  var parseDate = d3.time.format("%YM%m").parse;

  // setting you svg width
  var width = 500,
    // setting your svg height
    height = 100,
    // setting your margins of your svg
    margins = {top: 20, right: 50, bottom: 20, left: 50},
    // your x Axis accessor
    x = function(d) {
      return parseDate(d.month);
    },
    // set your x domain
    xDomain = d3.extent(chartData, function(d){ return x(d) }),
    // set your x range
    xRange = [0, width - margins.left - margins.right],
    // your scale type 'linear', 'ordinal', 'time'... etc.
    xScale = 'time',
    // set your label name
    xLabel = "Month";

  ReactDOM.render(
    <svg width={width} height={height}>
      <Xaxis
        width= {width}
        height= {height}
        margins= {margins}
        x= {x}
        xDomain= {xDomain}
        xRange = {xRange}
        xScale= {xScale}
        xLabel= {xLabel}
      />
    </svg>
  , document.getElementById('garbage-xaxis')
  )
})()
