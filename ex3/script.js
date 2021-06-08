var mymap = L.map('mapid').setView([41.399, 2.177], 14);
var tiles   = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 16,
    id: 'mapbox/streets-v11',
    //tileSize: 512,
    //zoomOffset: -1,
   // accessToken: 'your.mapbox.access.token'
}).addTo(mymap);
var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
        iconSize:     [35, 90],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [8, 62],
        popupAnchor:  [-8, -76]
    }
});
var greenIcon = new LeafIcon({iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png'}),
redIcon = new LeafIcon({iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png'}),
orangeIcon = new LeafIcon({iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-orange.png'});


L.marker([41.38792, 2.17018], {icon: orangeIcon}).bindPopup("Plaça Catalunya").addTo(mymap);
L.marker([41.39117, 2.18068], {icon: greenIcon}).bindPopup("Arc de Triomf").addTo(mymap);
L.marker([41.40431, 2.17425], {icon: redIcon}).bindPopup("Sagrada Familia").addTo(mymap);


