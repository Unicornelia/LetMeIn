
function initMap() {
  this.pos = {};
  console.log("first console")
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 51.5042827, lng: -0.1314301},
    zoom: 13
  });
  var infoWindow = new google.maps.InfoWindow({map: map});



  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      this.pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(this.pos);
      infoWindow.setContent('Location found.');
      map.setCenter(this.pos);
      map.setZoom(16)
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {

    handleLocationError(false, infoWindow, map.getCenter());
  }
  console.log("second console")
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(this.pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
}
