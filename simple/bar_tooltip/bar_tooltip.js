"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var BarTooltip = require('react-d3-tooltip').BarTooltip;

(function() {
  var generalChartData = require('dsv?delimiter=\t!../data/letter.tsv')

  var width = 700,
    height = 400,
    title = "Bar Chart with tooltip",
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
      <BarTooltip
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
