var React = require('react');
var ReactDOM = require('react-dom');
var Grid = require('react-d3-core').Grid;

(function() {

  var generalChartData = require('json!../data/user_sample.json');

  var width = 700,
    height = 400,
    margins = {top: 20, right: 50, bottom: 30, left: 50},
    gridAxisClassName = "test-grid-class",
    y = function(d) {
      return d.age;
    },
    yDomain = d3.extent(generalChartData, y),
    yRange = [height - margins.top - margins.bottom, 0],
    yScale = 'linear',
    x = function(d) {
      return d.index;
    },
    xDomain = d3.extent(generalChartData, x),
    xRange = [0, width - margins.left - margins.right],
    xScale = 'linear';


  ReactDOM.render(
    <svg width={width} height={height}>
      <Grid
        width= {width}
        height= {height}
        margins= {margins}
        type= {'y'}
        gridAxisClassName= {gridAxisClassName}
        y= {y}
        yDomain= {yDomain}
        yRange= {yRange}
        yScale= {yScale}
      />
      <Grid
        width= {width}
        height= {height}
        margins= {margins}
        type= {'x'}
        gridAxisClassName= {gridAxisClassName}
        x= {x}
        xDomain= {xDomain}
        xRange= {xRange}
        xScale= {xScale}
      />
    </svg>
  , document.getElementById('blank-grid')
  )
})()
