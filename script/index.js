function initMap() {

    //const uluru = { lat: 40.416713, lng: -3.703528, }/* , { lat: 41.667777, lng: -3.687337 }] */;

    const map = new google.maps.Map(document.getElementById("imag-contact"), {
      zoom: 3,
      center: /* { lat: 40.416713, lng: -3.703528} */{ lat: -28.024, lng: 140.887 },
    });

    
    const infoWindow = new google.maps.InfoWindow({
        content: "",
        disableAutoPan: true,
    })

    //Cree una matriz de caracteres alfabéticos utilizados para etiquetar los marcadores.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    //Agregue algunos marcadores al mapa.
    //const image ="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
  


   
    const markers = locations.map((position, i) => {
        const label = labels[i % labels.length];
        const marker = new google.maps.Marker({
            icon: {
                path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
                fillColor: "green",
                fillOpacity: 0.6,
                strokeWeight: 0,
                rotation: 0,
                scale: 2,
                anchor: new google.maps.Point(15, 30)
                },
            position,
            map,
            animation: google.maps.Animation.DROP,
        });

        // los marcadores solo se pueden enfocar con el teclado cuando tienen detectores de clics
        // abrir la ventana de información cuando se hace clic en el marcador
        marker.addListener("click", toggleBounce);

        marker.addListener("click", () => {
          infoWindow.setContent(label);
          infoWindow.open(map, marker);
          console.log(label)
          
        });

        //Con esta funcion salta cuando los toco
        function toggleBounce() {
            if (marker.getAnimation() !== null) {
              marker.setAnimation(null);
            } else {
              marker.setAnimation(google.maps.Animation.BOUNCE);
            }
        }

        return marker;
    });
    

    
    // Agregue un agrupador de marcadores para administrar los marcadores.
    //de momento no cunciona
    new MarkerClusterer({ markers, map });

    //const markerCluster = new markerClusterer.MarkerClusterer({ map, markers });


    /* const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    }); */
}

/* const locations = [
    {lat: 41.657871, lng: -0.884742},
    {lat: 40.416713, lng: -3.703528},
] */


const locations = [
    { lat: -31.56391, lng: 147.154312 },
    { lat: -33.718234, lng: 150.363181 },
    { lat: -33.727111, lng: 150.371124 },
    { lat: -33.848588, lng: 151.209834 },
    { lat: -33.851702, lng: 151.216968 },
    { lat: -34.671264, lng: 150.863657 },
    { lat: -35.304724, lng: 148.662905 },
    { lat: -36.817685, lng: 175.699196 },
    { lat: -36.828611, lng: 175.790222 },
    { lat: -37.75, lng: 145.116667 },
    { lat: -37.759859, lng: 145.128708 },
    { lat: -37.765015, lng: 145.133858 },
    { lat: -37.770104, lng: 145.143299 },
    { lat: -37.7737, lng: 145.145187 },
    { lat: -37.774785, lng: 145.137978 },
    { lat: -37.819616, lng: 144.968119 },
    { lat: -38.330766, lng: 144.695692 },
    { lat: -39.927193, lng: 175.053218 },
    { lat: -41.330162, lng: 174.865694 },
    { lat: -42.734358, lng: 147.439506 },
    { lat: -42.734358, lng: 147.501315 },
    { lat: -42.735258, lng: 147.438 },
    { lat: -43.999792, lng: 170.463352 },
];
  
window.initMap = initMap();
