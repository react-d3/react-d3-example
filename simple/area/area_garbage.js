"use strict"

var React = require('react');
var ReactDOM = require('react-dom')
var Chart = require('react-d3-core').Chart;
var LineChart = require('react-d3-basic').LineChart;

(function() {
  // load your general data
  var chartData = require('dsv?delimiter=,!../data/garbage.csv');

  // your date format, use for parsing
  var parseDate = d3.time.format("%YM%m").parse;

  var width = 700,
    height = 300,
    title = "Taiwan refuse disposal - Incineration",
    chartSeries = [
      {
        field: 'incineration',
        name: 'Incineration',
        color: 'blue',
        area: true,
        style: {
          opacity: .2
        }
      }
    ],
    // your x accessor
    x = function(d) {
      return parseDate(d.month);
    },
    xScale = 'time',
    yTickOrient = 'right'

  ReactDOM.render(
    <Chart
      title={title}
      width={width}
      height={height}
      >
      <LineChart
        title= {title}
        data= {chartData}
        width= {width}
        height= {height}
        chartSeries= {chartSeries}
        x= {x}
        xScale= {xScale}
        yTickOrient= {yTickOrient}
      />
    </Chart>
  , document.getElementById('area-garbage')
  )
})()
