const map = L.map("map").setView([41.480416, -71.31093], 15.4);

const url = "./assets/icon-location.svg";


L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

let myIcon = L.icon( {
    iconUrl: `${url}`,
    iconSize: [66, 88]
})

L.marker([41.480416, -71.31093],{icon:myIcon}).addTo(map);

L.map('mapa').toImage(function(err, canvas) {
    var img = document.createElement('img');
    var dimensions = mapa.getSize();
    img.width = dimensions.x;
    img.height = dimensions.y;
    img.src = canvas.toDataURL();
    document.getElementById('minha-imagem').appendChild(img);
});

