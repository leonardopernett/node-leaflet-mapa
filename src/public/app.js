const map = L.map('map-template').setView([6.8996295, -76.1667693999999], 13);

//template
L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png').addTo(map);


map.locate({enableHighAccuracy:true});//habilitar la ubicacion
map.on('locationfound', e=>{
    const coords=[e.latlng.lat, e.latlng.lng];
    //marker
    L.marker(coords).addTo(map)//la ubicacion de los cliente
    .bindPopup('you are here');
    
    console.log(e)//saber nuestra ubicacion 

})

L.marker([6.9196295, -76.15676939999999]).addTo(map).bindPopup('our company here')
//la ubicacion de la compañia 