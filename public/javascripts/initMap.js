function InitMap() {

  console.log("first")
  map = new google.maps.Map(document.getElementById('map'), {
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
    infoWindow.setContent('You are Here');
    map.setCenter(this.pos);
    map.setZoom(17)
    console.log(this.pos)
    var getPlaces = new GetPlaces(this.pos)
    document.getElementById("bar_nearby").addEventListener("click", function() {
      getPlaces.requestPlaces(getPlaces.displayPlaces.bind(getPlaces), getPlaces.getCoordinates.bind(getPlaces), getPlaces.initializeMap.bind(getPlaces))
    })
    console.log(this.pos)
  }, function() {

    handleLocationError(true, infoWindow, map.getCenter());
  });
} else {
  handleLocationError(false, infoWindow, map.getCenter());
}
}
