// Initialize and add the map
function initMap() {
  // The location
  const location = { lat: -33.92, lng: 151.25 };
  var locations = [
      ['Bondi Beach', -33.890542, 151.274856, 4],
      ['Coogee Beach', -33.923036, 151.259052, 5],
      ['Cronulla Beach', -34.028249, 151.157507, 3],
      ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
      ['Maroubra Beach', -33.950198, 151.259302, 1]
    ];
  // The map, centered at your specified location
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: location,
  });
  // The marker, positioned at your specified location (singular marker)
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });

  var mark, i;
  // multiple marker locations
  for (i = 0; i < locations.length; i++) {
      mark = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(mark, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, mark);
        }
      })(mark, i));
  }
}
