window.onload = function(){
  var getPlaces = new GetPlaces()
  getPlaces.initMap()
  document.getElementById("bar_nearby").addEventListener("click", function() {
    getPlaces.requestPlaces(getPlaces.displayPlaces.bind(getPlaces), getPlaces.getCoordinates.bind(getPlaces), getPlaces.initializeMap.bind(getPlaces))
  })
}
