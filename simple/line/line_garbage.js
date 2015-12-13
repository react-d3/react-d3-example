"use strict"

var React = require('react');
var ReactDOM = require('react-dom');
var LineChart = require('react-d3-basic').LineChart;

(function() {
  // load your general data
  var chartData = require('dsv?delimiter=,!../data/garbage.csv');
  // your date format, use for parsing
  var parseDate = d3.time.format("%YM%m").parse;

  var width = 500,
    height = 300,
    margins = {left: 100, right: 100, top: 50, bottom: 50},
    // chart series,
    // field: is what field your data want to be selected
    // name: the name of the field that display in legend
    // color: what color is the line
    chartSeries = [
      {
        field: 'total',
        name: 'Total',
        color: '#ff7f0e'
      }
    ],
    // your x accessor
    x = function(d) {
      return parseDate(d.month);
    },
    xScale = 'time';


  ReactDOM.render(
    <LineChart
      margins= {margins}
      data={chartData}
      width={width}
      height={height}
      chartSeries={chartSeries}
      x={x}
      xScale={xScale}
    />
  , document.getElementById('line-garbage')
  )
})()
