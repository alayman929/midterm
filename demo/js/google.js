function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: 42, lng: -87.7}
  });

//declares an array to store a reference to kml layers
var layerArray=[];

  layerArray[0] = new google.maps.KmlLayer({
    url: 'http://layman.design/gis/kml/CTABusRoutes.kml',
    map: map,
    preserveViewport: true,
    zIndex: 1, suppressInfoWindows: false
  });

  layerArray[1] = new google.maps.KmlLayer({
    url: 'http://layman.design/gis/kml/CTA_RailLines.kmz',
    map: map,
    preserveViewport: true,
    zIndex: 1, suppressInfoWindows: false
  });

  layerArray[2] = new google.maps.KmlLayer({
    url: 'http://layman.design/gis/kml/Kmlmetralines.kml',
    map: map,
    preserveViewport: true,
    zIndex: 1, suppressInfoWindows: false
  });

  layerArray[3] = new google.maps.KmlLayer({
    url: 'http://layman.design/gis/kml/CTA_BusStops.kmz',
    map: map,
    preserveViewport: true,
    zIndex: 2, suppressInfoWindows: false
  });

  layerArray[4] = new google.maps.KmlLayer({
    url: 'http://layman.design/gis/kml/CTA_RailStations.kmz',
    map: map,
    preserveViewport: true,
    zIndex: 2, suppressInfoWindows: false
  });

  layerArray[5] = new google.maps.KmlLayer({
    url: 'http://layman.design/gis/kml/Kmlmetrastation.kml',
    map: map,
    preserveViewport: true,
    zIndex: 2, suppressInfoWindows: false
  });
}

function toggleLayer(i) {
  if(layers[i].getMap() === null) {
    layers[i].setMap(map);
  }
  else {
    layers[i].setMap(null);
  }
}
