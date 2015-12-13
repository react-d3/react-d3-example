"use strict"

var d3 = require('d3');
var React = require('react');
var ReactDOM = require('react-dom');
var AreaChart = require('react-d3-basic').AreaChart;

(function() {
  // load your general data
  var chartData = require('dsv?delimiter=,!../data/garbage.csv');

  // your date format, use for parsing
  var parseDate = d3.time.format("%YM%m").parse;

  var width = 700,
    height = 300,
    chartSeries = [
      {
        field: 'incineration',
        name: 'Incineration',
        color: 'blue',
        style: {
          opacity: .2
        }
      }
    ],
    // your x accessor
    x = function(d) {
      return parseDate(d.month);
    },
    xScale = 'time',
    yTickOrient = 'right';

  ReactDOM.render(
    <AreaChart
      data= {chartData}
      width= {width}
      height= {height}
      chartSeries= {chartSeries}
      x= {x}
      xScale= {xScale}
      yTickOrient= {yTickOrient}
    />
  , document.getElementById('area-garbage')
  )
})()
