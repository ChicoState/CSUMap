let map;
function initMap() {
  // initialize map
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: {
      lat: 39.730041,
      lng: -121.846298
    },
  });
  // define LatLng coordinates for polygon overlay
  const oConnelCoords = [
    { lat: 39.727358, lng: -121.847500 },
    { lat: 39.727488, lng: -121.847314 },
    { lat: 39.727534, lng: -121.847360 },
    { lat: 39.727635, lng: -121.847362 },
    { lat: 39.727945, lng: -121.847695 },
    { lat: 39.727961, lng: -121.847838 },
    { lat: 39.727961, lng: -121.847838 },
    { lat: 39.727963, lng: -121.847840 },
    { lat: 39.727877, lng: -121.847964 },
    { lat: 39.727767, lng: -121.847976 },
  ];
  // construct polygon overlay
  const oConnelOverlay = new google.maps.Polygon({
    paths: oConnelCoords,
    strokeColor: "#C0FFEE",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillcolor: "#BDFCEB",
    fillOpacity: 0.35,
  });
  oConnelOverlay.setMap(map);
}

