const map = L.map('map-template').setView([-34.6131, -58.3772], 9);

const socket = io();

//OpenStreetMap  tileLayer
const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
L.tileLayer(tileURL).addTo(map);

//Localizacion Enable High Accuracy
map.locate({ enableHighAccuracy: true });
map.on('locationfound', e => {
    const coords = [e.latlng.lat, e.latlng.lng];
    const marker = L.marker(coords);
    marker.bindPopup('You are Here!');
    map.addLayer(marker);
    socket.emit('userCoordinates', e.latlng);
});

socket.on('newUserCoordinates', (coords) => {
    console.log('New User Connected!')
    const marker = L.marker([coords.lat,coords.lng]);
    marker.bindPopup('Go there!');
    map.addLayer(marker);
});

//const marker = L.marker([-34.6131, -58.3772]);
//marker.bindPopup('Go there!');
//map.addLayer(marker);