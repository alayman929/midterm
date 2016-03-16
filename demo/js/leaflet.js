var positron = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
			});
	 MapQuestOpen_Aerial = L.tileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.{ext}', {
				type: 'sat',
				ext: 'jpg',
				attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency',
				subdomains: '1234'
			});



var map = L.map('map', {
	center: [30.43, -91.18],
	zoom: 13,
	layers: [positron]
	});

var featuregroup = L.layerGroup();
var routegroup = L.layerGroup();


  //below function adds some text or html to a popup
  function addpopup(feature, layer) {
    if (feature.properties) {
      var html = '<h2>'+ feature.properties.Name +'</h2>' +
          feature.properties.Caption + "<br><br>" +
          '<a href="' + feature.properties.URL + '"target="_blank"><img class="thumb" src="' +
          feature.properties.Thumb_URL + '"></a>';
      layer.bindPopup(html);
      featuregroup.addLayer( layer );
      }
  }


  $.getJSON( "https://raw.githubusercontent.com/geog4046instructor/examples/gh-pages/geojson/stops.geojson", function( geojsonFeature ){
    L.geoJson(geojsonFeature, {
      onEachFeature: addpopup
    }).addTo(map);
  });
featuregroup.addTo(map);



function addtogroup(feature,layer){
  routegroup.addLayer(layer);
}
$.getJSON( "https://raw.githubusercontent.com/geog4046instructor/examples/gh-pages/geojson/route.geojson", function( routes ){
  L.geoJson(routes, {
    onEachFeature: addtogroup
  }).addTo(map);
});


routegroup.addTo(map);

/* Toggles
-----------------------------------------------------------------
*/
  var baseLayers = {
		"Streets" : positron,
		"Aerial" : MapQuestOpen_Aerial,
	};

	var overlays = {
	"Stops": featuregroup,
  "Route": routegroup
};

	L.control.layers(baseLayers, overlays).addTo(map);
