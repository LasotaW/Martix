function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(50.7640321, 20.2907073),
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}