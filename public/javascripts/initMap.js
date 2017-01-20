function GetCurrentLocation(){
}

 GetCurrentLocation.prototype.initMap = function(mapSetup, callPlaces) {
  map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 51.5042827, lng: -0.1314301},
  zoom: 13
});
  this.infoWindow = new google.maps.InfoWindow({map: map});

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    this.pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    mapSetup(this.pos)
    callPlaces(this.pos)
  }, function() {

    handleLocationError(true, infoWindow, map.getCenter());
  });
} else {
  handleLocationError(false, infoWindow, map.getCenter());
}
}

GetCurrentLocation.prototype.mapSetup = function(position) {
  this.infoWindow.setPosition(position);
  this.infoWindow.setContent('You are Here');
  map.setCenter(position);
  map.setZoom(17)
}


GetCurrentLocation.prototype.callPlaces = function(position) {
  var getPlaces = new GetPlaces(position)
  document.getElementById("bar_nearby").addEventListener("click", function() {
    // window.location.reload()
    getPlaces.requestPlaces(getPlaces.getFunctions.bind(getPlaces))
  })
}
