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

function toggle() {
	document.getElementById('sidebar').classList.toggle('collapsed');
}

function clubToggle() {
	var coll = document.getElementById("club-content");
	coll.classList.toggle("active");
	if(coll.style.display == "none") {
		coll.style.display = "block";
	}
	else {	
		coll.style.display = "none";
	}
}

/*
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });*/
