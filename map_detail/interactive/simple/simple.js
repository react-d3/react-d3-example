"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var topojson = require('topojson');

var Map = require('react-d3-map').Map;
var MarkerGroup = require('react-d3-map').MarkerGroup;

// Example
(function() {
  var width = 700;
  var height = 700;
  var scale = 1200 * 5;
  var scaleExtent = [1 << 12, 1 << 13]
  var center = [122, 23.5];
  var data = {
          "type": "Feature",
          "properties": {
            "text": "this is a Point!!!"
          },
          "geometry": {
              "type": "Point",
              "coordinates": [122, 23.5]
          }
      }
  var popupContent = function(d) { return d.properties.text; }


  ReactDOM.render(
    <Map
      width= {width}
      height= {height}
      scale= {scale}
      scaleExtent= {scaleExtent}
      center= {center}
    >
      <MarkerGroup
        key= {"polygon-test"}
        data= {data}
        popupContent= {popupContent}
        markerClass= {"your-marker-css-class"}
      />
    </Map>
  , document.getElementById('blank-point')
  )

})()
