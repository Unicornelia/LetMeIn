(function GetLocation() {
  var infoWindow = new google.maps.InfoWindow( {map: showMap()})
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var position = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
    })
  } else {
    console.log("Geolocation is not supported by your browser.")
  }
  GetLocation.exports = GetLocation
}) ();
