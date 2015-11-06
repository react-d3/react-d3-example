"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Chart = require('react-d3-core').Chart;
var BarGroupChart = require('react-d3-basic').BarGroupChart;

(function() {
  var generalChartData = require('dsv?delimiter=,!../data/age.csv')

  var width = 700,
    height = 400,
    title = "Bar Group Chart",
    chartSeries = [
      {
        field: 'Under 5 Years',
        name: 'Under 5 Years'
      },
      {
        field: '5 to 13 Years',
        name: '5 to 13 Years'
      },
      {
        field: '14 to 17 Years',
        name: '14 to 17 Years'
      },
      {
        field: '18 to 24 Years',
        name: '18 to 24 Years'
      },
      {
        field: '25 to 44 Years',
        name: '25 to 44 Years'
      },
      {
        field: '45 to 64 Years',
        name: '45 to 64 Years'
      },
      {
        field: '65 Years and Over',
        name: '65 Years and Over'
      },

    ],
    x = function(d) {
      return d.State;
    },
    xScale = 'ordinal',
    xLabel = "Age",
    yLabel = "Population",
    yLabelPosition = "right",
    yTickFormat = d3.format(".2s");

  ReactDOM.render(
    <Chart
      title={title}
      width={width}
      height={height}
      >
      <BarGroupChart
        title= {title}
        data= {generalChartData}
        width= {width}
        height= {height}
        chartSeries = {chartSeries}
        x= {x}
        xScale= {xScale}
        xLabel = {xLabel}
        yTickFormat= {yTickFormat}
        yLabelPosition= {yLabelPosition}
        yLabel = {yLabel}
      />
    </Chart>
  , document.getElementById('data_bar_group')
  )
})()
