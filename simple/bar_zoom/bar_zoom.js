"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var BarZoom = require('react-d3-zoom').BarZoom;

(function() {
  var generalChartData = require('dsv?delimiter=\t!../data/letter.tsv')

  var width = 700,
    height = 400,
    title = "Bar Chart with zoom",
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
    yTicks = [10, "%"];

  ReactDOM.render(
      <BarZoom
        title= {title}
        data= {generalChartData}
        width= {width}
        height= {height}
        chartSeries = {chartSeries}
        x= {x}
        xScale= {xScale}
        yTicks= {yTicks}
      />
  , document.getElementById('data_bar')
  )
})()
