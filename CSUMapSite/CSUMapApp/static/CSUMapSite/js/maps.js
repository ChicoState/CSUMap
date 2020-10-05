let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: {
      lat: 39.730041,
      lng: -121.846298
    },
  });
}

