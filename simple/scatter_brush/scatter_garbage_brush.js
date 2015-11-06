"use strict"

var React = require('react');
var ReactDOM = require('react-dom');
var ScatterBrush = require('react-d3-brush').ScatterBrush;

(function() {
  // load your general data
  var chartData = require('dsv?delimiter=,!../data/garbage.csv');

  // your date format, use for parsing
  var parseDate = d3.time.format("%YM%m").parse;

  var width = 700,
    height = 300,
    margins = {top: 50, right: 100, bottom: 50, left: 100},
    title = "Taiwan refuse disposal - Multi line",
    // chart series,
    // field: is what field your data want to be selected
    // name: the name of the field that display in legend
    // color: what color is the line
    chartSeries = [
      {
        field: 'total',
        name: 'Total',
        symbol: 'diamond',
        symbolSize: 6
      },
      {
        field: 'incineration',
        name: 'Incineration',
        symbol: 'cross',
        symbolSize: 6
      },
      {
        field: 'garbageBury',
        name: 'Garbage Bury',
        symbol: 'triangle-down',
        symbolSize: 6
      }
    ],
    // your x accessor
    x = function(d) {
      return parseDate(d.month);
    },
    xScale = 'time',
    // your brush height
    brushHeight = 100;

  ReactDOM.render(
      <ScatterBrush
        title= {title}
        data= {chartData}
        width= {width}
        height= {height}
        margins= {margins}
        chartSeries= {chartSeries}
        x= {x}
        xScale= {xScale}
        brushHeight= {brushHeight}
      />
  , document.getElementById('scatter-garbage')
  )
})()
