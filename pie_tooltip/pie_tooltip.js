"use strict";

var React = require('react');
var PieTooltip = require('react-d3-tooltip').PieTooltip;

(function() {
  var generalChartData = require('dsv?delimiter=,!../data/pie_test.csv')

  var width = 700,
    height = 300,
    // set your pie chart radius
    radius = Math.min(width, height - 120) / 2,
    margins = {top: 50, right: 50, bottom: 20, left: 50},
    id = "test-chart",
    title = "Pie Chart With Tooltip",
    svgClassName = "test-chart-class",
    titleClassName = "test-chart-title-class",
    legendClassName = "test-legend",
    // show legend or not
    showLegend = true,
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
    ],
    legendPosition = 'right',
    // your outer radius
    outerRadius = radius,
    // your inner radius, if greater than 0, it will become a donut chart
    innerRadius = 0,
    // d3.descending for sort by descending, d3.ascending for sort by ascending.
    pieSort = d3.descending;


  React.render(
    <PieTooltip
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
      showLegend= {showLegend}
      value = {value}
      name = {name}
      outerRadius= {outerRadius}
      innerRadius= {innerRadius}
      pieSort = {pieSort}
    />
  , document.getElementById('data_tooltip_pie')
  )
})()
