var mymap = L.map('mapid').setView([41.38708661369191, 2.17010418992892], 100);
var marker = L.marker([41.38690405340476, 2.1660490796058713]).addTo(mymap);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 16,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
   // accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

marker.bindPopup("<b>Restaurant Centfocs</b><br>Carrer Balmes, 16, 08007 BCN").openPopup();

