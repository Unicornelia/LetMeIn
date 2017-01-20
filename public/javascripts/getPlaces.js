function GetPlaces(pos) {
  this.pos = pos
  console.log(this.pos)

}

GetPlaces.prototype.requestPlaces = function(displayPlaces, getCoordinates, initializeMap){
  console.log(this.pos)
      this.xhr = new XMLHttpRequest();
      this.xhr.open("GET", "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+this.pos.lat+","+this.pos.lng+"&radius=200&type=bar&openNow=true&key=AIzaSyBe6mYpL9Z6BC38pc8dwCIBXfapgvNd_Sw&libraries=places", true)
      this.xhr.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
          this.myText = JSON.parse(this.responseText);
          displayPlaces()
          getCoordinates()
          initializeMap()
        }
      };
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
    }
  }

  GetPlaces.prototype.initializeMap = function () {

    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var markers = this.all.map(function(location, i) {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
        });
      });

    var markerCluster = new MarkerClusterer(map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})
    }
