function GetPlaces(position) {
  this.all = []
  this.each = {}
  this.position = position
}

GetPlaces.prototype.requestPlaces = function(getFunctions){
  url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+this.position.lat+","+this.position.lng+"&radius=200&type=bar&openNow=true&key=AIzaSyBe6mYpL9Z6BC38pc8dwCIBXfapgvNd_Sw&libraries=places"
  this.xhr = new XMLHttpRequest();
  this.xhr.open("GET", url , true)
  this.xhr.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
      this.myText = JSON.parse(this.responseText);
      getFunctions(this.displayPlaces, this.getCoordinates, this.initializeMap)
    }
  };
  this.xhr.send()
};


GetPlaces.prototype.getFunctions = function(displayPlaces) {
  this.displayPlaces()
  this.getCoordinates()
  this.initializeMap()
}


GetPlaces.prototype.displayPlaces = function() {
  var placeName = document.getElementById('listPlaces')
  for(var i = 0; i < this.xhr.myText.results.length; i ++){
    placeName.innerHTML += "<li>" + this.xhr.myText.results[i].name + "</li>"
  }
}

GetPlaces.prototype.getCoordinates = function() {
  for(var i = 0; i < this.xhr.myText.results.length; i ++){
    this.all.push({lat: this.xhr.myText.results[i].geometry.location.lat,
      lng: this.xhr.myText.results[i].geometry.location.lng})
    }
  }

  GetPlaces.prototype.initializeMap = function () {
    var url = 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var markers = this.all.map(function(location, i) {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
      });
    });

    var markerCluster = new MarkerClusterer(map, markers, {imagePath: url })
  }
