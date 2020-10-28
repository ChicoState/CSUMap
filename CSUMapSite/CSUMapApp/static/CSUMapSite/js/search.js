let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: {
      lat: 39.730041,
      lng: -121.846298
    },

  });
  if(bnlat == ""||bnlng ==""){
    }
    else {
        var uluru = {lat: parseFloat(bnlat), lng:parseFloat(bnlng)};
         map = new google.maps.Map(
         document.getElementById('map'), {zoom: 20, center:uluru });
         var marker = new google.maps.Marker({position: uluru, map});
        }   
    }





