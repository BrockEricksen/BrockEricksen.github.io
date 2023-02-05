function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 32.16, lng: -80.75};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 10,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hilton Head Island, SC' // Title Location
    });
}