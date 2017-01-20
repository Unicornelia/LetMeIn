window.onload = function(){
  var getCurrentLocation = new GetCurrentLocation()
  getCurrentLocation.initMap(getCurrentLocation.mapSetup.bind(getCurrentLocation), getCurrentLocation.callPlaces.bind(getCurrentLocation))
}
