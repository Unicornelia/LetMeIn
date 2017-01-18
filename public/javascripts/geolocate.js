console.log('Hello');

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 51.5042827, lng: -0.1314301},
    zoom: 13
  });
  var infoWindow = new google.maps.InfoWindow({map: map});



  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
      map.setZoom(16)
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {

    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
}
