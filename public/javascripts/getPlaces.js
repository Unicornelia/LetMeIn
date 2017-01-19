(function(exports){

  function GetPlaces() {

  };


  GetPlaces.prototype.requestPlaces = function(displayPlaces, getCoordinates, initMap){
        this.xhr = new XMLHttpRequest();
        this.xhr.open("GET", "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat +','+ lng + "&radius=200&type=bar&openNow=true&key=AIzaSyBe6mYpL9Z6BC38pc8dwCIBXfapgvNd_Sw&libraries=places", true)
        this.xhr.onreadystatechange = function(){
          if (this.readyState == 4 && this.status == 200) {
            this.myText = JSON.parse(this.responseText);
          }
          displayPlaces()
          getCoordinates()
          initMap()
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
    }

    }

    GetPlaces.prototype.initMap = function () {

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: {lat: 51.5173637, lng: -0.0856259}
        });

        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
        // console.log(this.locations)
        // console.log(this.locations)
        var markers = this.all.map(function(location, i) {
          // console.log(location)

          // console.log(i)
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers)
            // {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
  // console.log(markerCluster)




          }




  exports.GetPlaces = GetPlaces;
})(this);
