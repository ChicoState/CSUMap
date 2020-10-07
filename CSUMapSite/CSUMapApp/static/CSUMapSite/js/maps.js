let map;
function initMap() {
	// Enable dev tool to quickly generate lat/lng coordinates
  var debug = false;

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
    { lat: 39.727996514449416, lng: -121.84786136460605 },
    { lat: 39.727978464483286, lng: -121.84766891610923 },
    { lat: 39.72793772311385, lng: -121.84767562163177 },
    { lat: 39.72782503958055, lng: -121.84754989308419 },
    { lat: 39.72782529743781, lng: -121.8475425170094 },
    { lat: 39.72765072784818, lng: -121.84735979152026 },
    { lat: 39.72764763355309, lng: -121.84736046207252 },
    { lat: 39.72762545776754, lng: -121.84733431053462 },
    { lat: 39.72760070339389, lng: -121.84733431053462 },
    { lat: 39.72754423244568, lng: -121.84733565163913 },
    { lat: 39.72752154091008, lng: -121.84733565163913 },
    { lat: 39.7274908557535, lng: -121.8473027945787 },
    { lat: 39.7273580584898, lng: -121.84749557835164 },
    { lat: 39.727768568816096, lng: -121.84797703486981 },
    { lat: 39.727882541726956, lng: -121.847964294377 },
    { lat: 39.727951389525266, lng: -121.84786840540471 },
	];
	const langdonCoords = [
    { lat: 39.72767823770364, lng: -121.84794889964867 },
    { lat: 39.72757895255013, lng: -121.84783298844782 },
    { lat: 39.727584109713675, lng: -121.84782360071627 },
    { lat: 39.72728422983596, lng: -121.84748353638459 },
    { lat: 39.727278041212735, lng: -121.84749426522065 },
    { lat: 39.72724606665061, lng: -121.84746073760796 },
    { lat: 39.72742037940608, lng: -121.84719519891549 },
    { lat: 39.72729351276972, lng: -121.8470530418377 },
    { lat: 39.72689743981758, lng: -121.847648492239 },
    { lat: 39.72705731328826, lng: -121.8478268591385 },
    { lat: 39.727102696657546, lng: -121.84776516833115 },
    { lat: 39.727152205753605, lng: -121.84781881251145 },
    { lat: 39.727141891361505, lng: -121.84782551803399 },
    { lat: 39.727233689396776, lng: -121.84793146529007 },
    { lat: 39.72721718638822, lng: -121.84795962848473 },
    { lat: 39.72725844390222, lng: -121.84800656714249 },
    { lat: 39.72727700977546, lng: -121.8479804156046 },
    { lat: 39.727444102409734, lng: -121.84816615857888 },
    { lat: 39.72754157292606, lng: -121.84802198984433 },
    { lat: 39.72759469172085, lng: -121.84807831623364 },
	];
  const libraryCoords = [
    { lat: 39.72862918855058, lng: -121.84596509589059 },
    { lat: 39.72856730350072, lng: -121.84589468790395 },
    { lat: 39.728593088944905, lng: -121.84585445476873 },
    { lat: 39.72833317122607, lng: -121.8455620939861 },
    { lat: 39.72830635426282, lng: -121.84560098601682 },
    { lat: 39.72823785241473, lng: -121.84552229996362 },
    { lat: 39.72817674058145, lng: -121.84561416562238 },
    { lat: 39.72815843280651, lng: -121.84559270795026 },
    { lat: 39.72798566905705, lng: -121.84585757609048 },
    { lat: 39.727978449070044, lng: -121.84584818835893 },
    { lat: 39.72781429414818, lng: -121.84610125797111 },
    { lat: 39.72782074058053, lng: -121.84610896932203 },
    { lat: 39.72765081242203, lng: -121.8463694788726 },
    { lat: 39.72766731532679, lng: -121.84638892488796 },
    { lat: 39.72760542941355, lng: -121.84648414330799 },
    { lat: 39.727676340351174, lng: -121.8465666212352 },
    { lat: 39.72765803244336, lng: -121.84659545498211 },
    { lat: 39.72789603486588, lng: -121.84686568754036 },
    { lat: 39.72791434271051, lng: -121.84683819489796 },
    { lat: 39.72799092617688, lng: -121.84692402558643 },
    { lat: 39.72805332745694, lng: -121.84682947771866 },
    { lat: 39.728076792386474, lng: -121.84685328232366 },
    { lat: 39.728253939453985, lng: -121.84658606725056 },
    { lat: 39.72825883871138, lng: -121.8465904258402 },
    { lat: 39.728421029720614, lng: -121.8463470153721 },
    { lat: 39.72841638832982, lng: -121.8463419862302 },
    { lat: 39.72859101295496, lng: -121.84607919211821 },
    { lat: 39.72856986889078, lng: -121.84605505223708 },
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
	const langdonOverlay = new google.maps.Polygon({
		paths: langdonCoords,
		strokeColor: "#C0FFEE",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillcolor: "#BDFCEB",
		fillOpacity: 0.35,
	});
  langdonOverlay.setMap(map);
	const libraryOverlay = new google.maps.Polygon({
		paths: libraryCoords,
		strokeColor: "#C0FFEE",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillcolor: "#BDFCEB",
		fillOpacity: 0.35,
	});
  libraryOverlay.setMap(map);


	// Create the initial InfoWindow.
  if(debug) {
    var myLatlng = { lat: 39.730041, lng: -121.846298 };
    var infoWindow = new google.maps.InfoWindow(
      {content: 'Click the map to get Lat/Lng!', position: myLatlng});
    infoWindow.open(map);

    // Configure the click listener.
    let message = ""
    map.addListener('click', function(mapsMouseEvent) {
      // Close the current InfoWindow.
      infoWindow.close();

      // Create a new InfoWindow.
      infoWindow = new google.maps.InfoWindow({position: mapsMouseEvent.latLng});
      message += "{ lat: " + mapsMouseEvent.latLng.lat().toString() + ", lng: " + mapsMouseEvent.latLng.lng().toString() + " },<br \>";
      infoWindow.setContent(message);
      infoWindow.open(map);
      google.maps.event.addListener(infoWindow, 'closeclick', function() {
        message = "";
      });
    });
  }
}

