
"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var topojson = require('topojson');
var Chart = require('react-d3-map-core').Chart;
var Polygon = require('react-d3-map-core').Polygon;
var Tile = require('react-d3-map-core').Tile;
var Mesh = require('react-d3-map-core').Mesh;

var LineBrush = require('react-d3-brush').LineBrush;

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


  var BrushChart = React.createClass({
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
              "stroke-width": 2,
              "stroke-opacity": .2,
              "fill-opacity": .2
            }
          }
        ],
        x = function(d) {
          console.log(parseDate.parse(1911 + d.time))
          return parseDate.parse((1911 + d.time).toString());
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

      return (
        <LineBrush
          width= {600}
          height= {500}
          brushHeight={100}
          data= {valArr}
          chartSeries= {chartSeries}
          x= {x}
        />
      )
    }
  })

  var Map = React.createClass({
    getInitialState: function() {
      return {
        county: null
      }
    },

    mouseOver: function(dom, d, i) {
      var county = d.properties.name;

      this.setState({
        county: county
      })
    },

    render: function() {

      var county = this.state.county;
      var mouseOver = this.mouseOver;
      var brush;

      var polygons = dataCounties.map(function(d, i) {
        return (
          <Polygon
            key= {i}
            data= {d}
            geoPath= {geo}
            onMouseOver= {mouseOver}
          />
        )
      })

      if(county) {
        brush= (
          <BrushChart county= {county}/>
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
          <svg
            id="chart"
            width= {width}
            height= {height}
          >
            {brush}
          </svg>
        </div>
      )
    }
  })


  ReactDOM.render(
    <Map/>
  , document.getElementById('blank-historytwpopulation')
  )

})()
