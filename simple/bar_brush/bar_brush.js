"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var BarBrush = require('react-d3-brush').BarBrush;

(function() {
  var generalChartData = require('dsv?delimiter=\t!../data/letter.tsv')

  var width = 700,
    height = 400,
    title = "Bar Chart",
    chartSeries = [
      {
        field: 'frequency',
        name: 'Frequency'
      }
    ],
    x = function(d) {
      return d.letter;
    },
    xScale = 'ordinal',
    yTicks = [10, "%"],
    // your brush height
    brushHeight = 100;

  ReactDOM.render(
      <BarBrush
        data= {generalChartData}
        width= {width}
        height= {height}
        chartSeries = {chartSeries}
        x= {x}
        xScale= {xScale}
        yTicks= {yTicks}
        brushHeight= {brushHeight}
      />
  , document.getElementById('data_bar')
  )
})()
