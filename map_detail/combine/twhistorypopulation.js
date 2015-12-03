
"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var topojson = require('topojson');
var Chart = require('react-d3-map-core').Chart;
var Polygon = require('react-d3-map-core').Polygon;
var Tile = require('react-d3-map-core').Tile;
var Mesh = require('react-d3-map-core').Mesh;

var LineChart = require('react-d3-basic').LineChart;

var projectionFunc = require('react-d3-map-core').projection;
var geoPath = require('react-d3-map-core').geoPath;
var tileFunc = require('react-d3-map-core').tileFunc

var css= require('./style.css');

// Example
(function() {
  var width = 600,
  height = 700;

  var topodata = require('json!./data/twTown1982.topo.json');
  var population = require('json!./data/population.json');

  // data should be a MultiLineString
  var dataMeshCounties = topojson.mesh(topodata, topodata.objects["twTown1982.geo"], function(a, b) { return a !== b; });
  /// data should be polygon
  var dataCounties = topojson.feature(topodata, topodata.objects["twTown1982.geo"]).features;

  dataCounties.forEach(function(d, i) {
		if(d.properties.TOWNID === "1605" || d.properties.TOWNID === "1603" ||  d.properties.TOWNID=== "1000128") {
			dataCounties.splice(i, 1);
		}
	})

  var scale = 10000;
  var center = [120.979531, 23.978567];
  var projection = 'mercator';
  var translate = [width / 2, height / 2];
  var parseDate = d3.time.format('%Y');

  var proj = projectionFunc({
    projection: projection,
    scale: scale,
    translate: translate,
    center: center
  });
  var geo = geoPath(proj);

  var tiles = tileFunc({
    scale: proj.scale() * 2 * Math.PI,
    translate: proj([0, 0]),
    size: ([width, height])
  })


  var TooltipChart = React.createClass({
    getInitialState: function() {
      return null
    },

    render: function() {
      var county = this.props.county;

      var s = county.split('/');

      var chartSeries = [
          {
            field: 'value',
            name: 'Population',
            color: '#ff7f0e',
            style: {
              "stroke-width": 4,
              "stroke-opacity": .8,
              "fill-opacity": .2
            }
          }
        ],
        x = function(d) {
          return parseDate.parse((1911 + d.time).toString());
        },
        xScale= 'time',
        y = function(d) {
          return +d;
        }

      var valArr = []

      for (var key in population) {
        // key equals year
        for (var reg in population[key]) {
          if(reg === s[0]) {
            // county
            for(var t in population[key][reg]) {
              if(t === s[1]) {
                valArr.push({
                  "time": +key.trim(),
                  "value": +population[key][reg][t]
                });
              }
            }
          }
        }
      }
      var margins = {left: 100, right: 100, top: 50, bottom: 50};
      return (
        <Chart
          width= {600}
          height= {500}
          margins= {margins}
          title= {county}
          chartSeries= {chartSeries}
        >
          <LineChart
            title= {county}
            showXGrid= {false}
            showYGrid= {false}
            width= {600}
            height= {500}
            data= {valArr}
            chartSeries= {chartSeries}
            x= {x}
            xScale= {xScale}
            y= {y}
          />
        </Chart>
      )
    }
  })

  var Map = React.createClass({
    getInitialState: function() {
      return {
        county: '桃園縣/中壢市'
      }
    },

    click: function(dom, d, i) {
      var county = d.properties.name;

      this.setState({
        county: county
      })
    },

    render: function() {

      var county = this.state.county;
      var click = this.click;
      var brush;
      var polygonClass;

      var polygons = dataCounties.map(function(d, i) {
        var name = d.properties.name;
        if(name === county) {
          polygonClass = 'polygon_active'
        } else {
          polygonClass = 'polygon_inactive'
        }

        return (
          <Polygon
            key= {i}
            data= {d}
            polygonClass= {polygonClass}
            geoPath= {geo}
            onClick= {click}
          />
        )
      })

      if(county) {
        brush= (
          <TooltipChart county= {county}/>
        )
      }

      return (
        <div>
          <svg
            id="map"
            width= {width}
            height= {height}
          >
            {polygons}
          </svg>
          <div
            id="chart"
            width= {width}
            height= {height}
          >
            {brush}
          </div>
        </div>
      )
    }
  })


  ReactDOM.render(
    <Map/>
  , document.getElementById('blank-historytwpopulation')
  )

})()
