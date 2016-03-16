var map;
    require([
      "esri/map",
      "esri/layers/ArcGISDynamicMapServiceLayer",
      "esri/layers/ImageParameters",
      "esri/dijit/BasemapToggle",
      "dojo/dom",
      "dojo/on",
      "dojo/query",
      "dojo/domReady!"
    ], function(
      Map, ArcGISDynamicMapServiceLayer, ImageParameters, BasemapToggle
    )  {

      map = new Map("map", {
        center: [-122.67, 45.52],
        zoom: 13,
        basemap: "streets",
        sliderOrientation : "horizontal"
      });

      var imageParameters = new ImageParameters();
        imageParameters.format = "PNG24"

      var dynamicMapServiceLayer = new ArcGISDynamicMapServiceLayer("https://www.portlandmaps.com/arcgis/rest/services/Public/Transit/MapServer", {
          "opacity" : 0.7,
          "imageParameters" : imageParameters
        });

        map.addLayer(dynamicMapServiceLayer);

      dynamicMapServiceLayer.setVisibleLayers([6,5,4,3,2]);

      var toggle = new BasemapToggle({
        map: map,
        basemap: "gray"
      }, "BasemapToggle");
      toggle.startup();
    });
