function handleLocationError(browserHasGeolocation, infoWindow, pos) {

infoWindow.setPosition(this.pos);
infoWindow.setContent(browserHasGeolocation ?
  'Error: The Geolocation service failed.' :
  'Error: Your browser doesn\'t support geolocation.');
}
