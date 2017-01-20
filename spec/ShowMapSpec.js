describe("ShowMap", function() {
  var Google = require('../spec/MapsMock')
  var ShowMap = require('../src/ShowMap');
})


// Tests:
//
// Make sure a map is displayed on our page:
//   create a new google maps map
//     var map = new google.maps.Map(location of map, {
//       map properties e.g. center, zoom
//     })
//   expect page to have map object in div 'map'
//
// Make sure our location is put on the map
