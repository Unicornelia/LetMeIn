function GetPlaces() {
  this.pos = {};
};

GetPlaces.prototype.initMap = function() {
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
      console.log(this.map)
      infoWindow.setPosition(this.pos);
      infoWindow.setContent('You are Here');
      map.setCenter(this.pos);
      map.setZoom(17)
      // document.getElementById("bar_nearby").addEventListener("click", function() {
      //   this.requestPlaces(this.displayPlaces(), this.getCoordinates(), this.initializeMap())
      // })
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {

    handleLocationError(false, infoWindow, map.getCenter());
  }

}

GetPlaces.prototype.handleLocationError = function(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(this.pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
}


GetPlaces.prototype.requestPlaces = function(displayPlaces, getCoordinates, initializeMap){
      this.xhr = new XMLHttpRequest();
      this.xhr.open("GET", "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=51.5173637,-0.075455&radius=200&type=bar&openNow=true&key=AIzaSyBe6mYpL9Z6BC38pc8dwCIBXfapgvNd_Sw&libraries=places", true)
      this.xhr.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
          this.myText = JSON.parse(this.responseText);
          displayPlaces()
          getCoordinates()
          initializeMap()
        }
        }

      this.xhr.send()

    };


  GetPlaces.prototype.displayPlaces = function() {
    var placeName = document.getElementById('listPlaces')
      for(var i = 0; i < this.xhr.myText.results.length; i ++){
        placeName.innerHTML += "<li>" + this.xhr.myText.results[i].name + "</li>"
      }
  }

  GetPlaces.prototype.getCoordinates = function() {
    this.all = []
    this.each = {}
    for(var i = 0; i < this.xhr.myText.results.length; i ++){
    this.all.push({lat: this.xhr.myText.results[i].geometry.location.lat,
                   lng: this.xhr.myText.results[i].geometry.location.lng})
    // console.log(this.all)
    // console.log(this.geo.pos)
  }

  }

  GetPlaces.prototype.initializeMap = function () {

      // var map = new google.maps.Map(document.getElementById('map'), {
      //   zoom: 15,
      //   center: {lat: 51.5173637, lng: -0.0856259}
      // });


      var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

      var markers = this.all.map(function(location, i) {

        return new google.maps.Marker({
          position: location,
          label: labels[i % labels.length]
        });
      });

      var markerCluster = new MarkerClusterer(map, markers)

        }
