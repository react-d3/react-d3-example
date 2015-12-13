"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var PieChart = require('react-d3-basic').PieChart;

(function() {
  var generalChartData = require('dsv?delimiter=,!../data/pie_test.csv')

  var width = 700,
    height = 400,
    value = function(d) {
      return +d.population;
    },
    name = function(d) {
      return d.age;
    },
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
    <PieChart
      data= {generalChartData}
      width= {width}
      height= {height}
      chartSeries= {chartSeries}
      value = {value}
      name = {name}
    />
  , document.getElementById('data_pie')
  )
})()
