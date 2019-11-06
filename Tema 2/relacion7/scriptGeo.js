function getLocation() {
  if (navigator.geolocation) {
  	navigator.geolocation.getCurrentPosition(showPosition);
   
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}



function showPosition(position){

 var map = L.map('map').setView([position.coords.latitude, position.coords.longitude],15);
	L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
	
	maxZoom: 18}).addTo(map);
	L.control.scale().addTo(map);
	L.Routing.control({waypoints: [L.latLng(57.74, 11.94),L.latLng(57.6792, 11.949)]}).addTo(map);
}