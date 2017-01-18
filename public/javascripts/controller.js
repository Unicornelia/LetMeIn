window.onload = function(){
  var getPlaces = new GetPlaces()
  document.getElementById("bar_nearby").addEventListener("click", function() {getPlaces.requestPlaces()})
}
