"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var topojson = require('topojson');

var MapOrthographic = require('react-d3-map-orthographic').MapOrthographic;
var MarkerGroup = require('react-d3-map').MarkerGroup;

var css= require('../css/polygon.css');

// Example
(function() {
  var width = 700;
  var height = 700;
  var scale = 1200 * 5;
  var scaleExtent = [1 << 12, 1 << 13]
  var center = [-5, 55.4];
  var uk = require('json!../data/uk.json');
  var data = topojson.feature(uk, uk.objects.places);
  var popupContent = function(d) { return d.properties.name; }
  var onMarkerMouseOut= function(dom , d, i) {
    console.log('out')
  }
  var onMarkerMouseOver= function(dom, d, i) {
    console.log('over')
  }
  var onMarkerClick= function(dom, d, i) {
    console.log('click')
  }
  var onMarkerCloseClick= function(id) {
    console.log('close click')
  }


  ReactDOM.render(
    <MapOrthographic
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
        onClick= {onMarkerClick}
        onCloseClick= {onMarkerCloseClick}
        onMouseOver= {onMarkerMouseOver}
        onMouseOut= {onMarkerMouseOut}
        markerClass= {"your-marker-css-class"}
      />
    </MapOrthographic>
  , document.getElementById('blank-point')
  )

})()
