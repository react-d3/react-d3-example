"use strict"

var React = require('react');
var ReactDOM = require('react-dom');
var LineBrush = require('react-d3-brush').LineBrush;

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
    xScale = 'time',
    // your brush height
    brushHeight = 100;


  ReactDOM.render(
      <LineBrush
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
  , document.getElementById('line-multi-garbage')
  )
})()
