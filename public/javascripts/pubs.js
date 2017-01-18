var map;
var infowindow;

function initMap() {
  var pyrmont = {lat: 51.5173403, lng: -0.0754748};

  map = new google.maps.Map(document.getElementById('map_pub'), {
    center: pyrmont,
    zoom: 17
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.radarSearch({
    location: pyrmont,
    radius: 500,
    keyword: 'bars and restaurants',
    openNow: true,
  }, callback);
}

// function placeDetails() {
//   var details = new google.maps.places.PlaceResult(map);
//   service.textSearch({
//       query: 'pub',
//       open_now: true
//     }, callback);
// }


function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}
