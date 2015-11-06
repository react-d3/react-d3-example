"use strict"

var React = require('react');
var ReactDOM = require('react-dom');
var Chart = require('react-d3-core').Chart;
var LineChart = require('react-d3-basic').LineChart;

(function() {
  // load your general data
  var chartData = require('dsv?delimiter=,!../data/garbage.csv');

  // your date format, use for parsing
  var parseDate = d3.time.format("%YM%m").parse;

  var width = 700,
    height = 300,
    margins = {left: 100, right: 100, top: 50, bottom: 50},
    title = "Taiwan refuse disposal - Multi line",
    // chart series,
    // field: is what field your data want to be selected
    // name: the name of the field that display in legend
    // color: what color is the line
    chartSeries = [
      {
        field: 'total',
        name: 'Total'
      },
      {
        field: 'incineration',
        name: 'Incineration'
      },
      {
        field: 'garbageBury',
        name: 'Garbage Bury',
        area: true
      }
    ],
    // your x accessor
    x = function(d) {
      return parseDate(d.month);
    },
    xScale = 'time';

  ReactDOM.render(
    <Chart
      title={title}
      margins={margins}
      width={width}
      height={height}
      >
      <LineChart
        title= {title}
        data= {chartData}
        width= {width}
        height= {height}
        margins= {margins}
        chartSeries= {chartSeries}
        x= {x}
        xScale= {xScale}
      />
    </Chart>
  , document.getElementById('line-multi-garbage')
  )
})()
