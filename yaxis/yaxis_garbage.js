"use strict";

var React = require('react');
var Yaxis = require('react-d3-core').Yaxis;

(function() {
  // load your general data, for building xDomain.
  var chartData = require("dsv?delimiter=,!../data/garbage.csv");

  // setting you svg width
  var width = 500,
    // setting your svg height
    height = 300,
    // setting your margins of your svg
    margins = {top: 20, right: 50, bottom: 20, left: 50},
    // your y Axis accessor
    y = function(d) {
      return +d.total;
    },
    // set your y domain
    yDomain = d3.extent(chartData, function(d){ return y(d); }),
    // set your y range
    yRange = [(height - margins.top - margins.bottom), 0],
    // your scale type 'linear', 'ordinal', 'time'... etc.
    yScale = 'linear',
    // set your label name
    yLabel = "Total",
    yLabelPosition = 'right',
    yOrient = "right",
    yTickOrient = "left";

  React.render(
    <svg width={width} height={height}>
      <Yaxis
        width= {width}
        height= {height}
        margins= {margins}
        y= {y}
        yDomain= {yDomain}
        yRange = {yRange}
        yScale= {yScale}
        yLabel= {yLabel}
        yLabelPosition= {yLabelPosition}
        yOrient= {yOrient}
        yTickOrient= {yTickOrient}
      />
    </svg>
  , document.getElementById('garbage-yaxis')
  )
})()
