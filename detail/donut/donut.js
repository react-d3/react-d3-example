"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Chart = require('react-d3-core').Chart;
var PieChart = require('react-d3-basic').PieChart;

(function() {
  var generalChartData = require('dsv?delimiter=,!../data/pie_test.csv')

  var width = 700,
    height = 400,
    radius = Math.min(width, height - 180) / 2,
    margins = {top: 50, right: 30, bottom: 20, left: 50},
    id = "test-chart",
    title = "Donut Chart",
    svgClassName = "test-chart-class",
    titleClassName = "test-chart-title-class",
    legendClassName = "test-legend",
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
    ],
    legendPosition = 'left',
    outerRadius = radius - 10,
    innerRadius = 20;


  ReactDOM.render(
    <Chart
      title={title}
      id={id}
      width={width}
      height={height}
      >
      <PieChart
        title= {title}
        data= {generalChartData}
        width= {width}
        height= {height}
        radius= {radius}
        id= {id}
        margins= {margins}
        chartSeries= {chartSeries}
        svgClassName= {svgClassName}
        titleClassName= {titleClassName}
        legendClassName= {legendClassName}
        legendPosition= {legendPosition}
        categoricalColors= {d3.scale.category10()}
        value = {value}
        name = {name}
        outerRadius= {outerRadius}
        innerRadius= {innerRadius}
        pieSort = {d3.descending}
      />
    </Chart>
  , document.getElementById('data_donut')
  )
})()
