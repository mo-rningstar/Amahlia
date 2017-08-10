function initMap() {
  var imsa = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: imsa
  });
  var marker = new google.maps.Marker({
    position: imsa,
    map: map
  });
}
      
