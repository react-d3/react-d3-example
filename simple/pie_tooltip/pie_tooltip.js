"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var PieTooltip = require('react-d3-tooltip').PieTooltip;

(function() {
  var generalChartData = require('dsv?delimiter=,!../data/pie_test.csv')

  var width = 500,
    height = 300,
    title = "Pie Chart With Tooltip",
    // value accessor
    value = function(d) {
      return +d.population;
    },
    // name accessor
    name = function(d) {
      return d.age;
    },
    // field means what your input field name is,
    // name means the name show in the legend in your chart.
    chartSeries = [
      {
        "field": "<5",
        "name": "less than 5"
      },
      {
        "field": "5-13",
        "name": "5 to 13"
      },
      {
        "field": "14-17",
        "name": "14 to 17"
      },
      {
        "field": "18-24",
        "name": "18 to 24"
      },
      {
        "field": "25-44",
        "name": "25 to 44"
      },
      {
        "field": "45-64",
        "name": "45 to 64"
      }
    ];


  ReactDOM.render(
    <PieTooltip
      title= {title}
      data= {generalChartData}
      width= {width}
      height= {height}
      chartSeries= {chartSeries}
      value = {value}
      name = {name}
    />
  , document.getElementById('data_tooltip_pie')
  )
})()
