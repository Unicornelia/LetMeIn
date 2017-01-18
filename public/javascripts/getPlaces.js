(function(exports){

  function GetPlaces() {

  };


  GetPlaces.prototype.requestPlaces = function(){
        this.xhr = new XMLHttpRequest();
        console.log(this.xhr)
        this.xhr.open("GET", "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=51.5173637,-0.075455&radius=1000&type=bar&key=AIzaSyBe6mYpL9Z6BC38pc8dwCIBXfapgvNd_Sw", true)
        console.log(this.xhr)
        this.xhr.onreadystatechange = function(){
          if (this.readyState == 4 && this.status == 200) {
            this.myText = JSON.parse(this.responseText);
          }
          console.log(this.myText)
          var placeName = document.getElementById('listPlaces')
            for(var i = 0; i < this.myText.results.length; i ++){
              placeName.innerHTML += "<li>" + this.myText.results[i].name + "</li>"
            }
          }

        this.xhr.send()

      };


  exports.GetPlaces = GetPlaces;
})(this);
