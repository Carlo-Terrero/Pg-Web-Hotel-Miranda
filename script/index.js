import {espanaComunidades} from './comunidades.js';
import {comunidadesAutonomas} from './nameComunidades.js';
//console.log(comunidadesAutonomas)

//console.log(espanaComunidades[1])

let map, infoWindow, marker, geocoder;

function initMap() {
  const bounds = new google.maps.LatLngBounds();
  const markersArray = [];

  map = new google.maps.Map(document.getElementById("imag-contact"), {
    zoom: 5,
    center: { lat: 40.416713, lng: -3.703528},
    //mapTypeId: "terrain",
  });
  geocoder = new google.maps.Geocoder();

  //infoWindow = new google.maps.InfoWindow()

  infoWindow = new google.maps.InfoWindow({
      content: "",
      disableAutoPan: true,
  })

  //Los elementos añadidos al mapa
  const locationButton = document.createElement("button");
  locationButton.textContent = "Find my nearest location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

  const inputText = document.createElement("input");
  inputText.type = "text";
  inputText.placeholder = "Enter a location";
  map.controls[google.maps.ControlPosition.LEFT_TOP].push(inputText);

  const submitButton = document.createElement("input");
  submitButton.type = "button";
  submitButton.value = "Geocode";
  submitButton.classList.add("button", "button-primary");
  map.controls[google.maps.ControlPosition.LEFT_TOP].push(submitButton); 

  const clearButton = document.createElement("input");
  clearButton.type = "button";
  clearButton.value = "Clear";
  clearButton.classList.add("button", "button-secondary");
  map.controls[google.maps.ControlPosition.LEFT_TOP].push(clearButton);


  marker = new google.maps.Marker({
    map,
  });
  map.addListener("click", (e) => {
    geocode({ location: e.latLng });
  });
  submitButton.addEventListener("click", () =>
    geocode({ address: inputText.value })
  );
  clearButton.addEventListener("click", () => {
    clear();
  });
  /* clear(); */

  function clear() {
    marker.setMap(null);
  }

  function geocode(request) {
    clear();
    geocoder
      .geocode(request)
      .then((result) => {
        const { results } = result;
  
        map.setCenter(results[0].geometry.location);
        marker.setPosition(results[0].geometry.location);
        marker.setMap(map);
        //response.innerText = JSON.stringify(result, null, 2);
        return results;
      })
      .catch((e) => {
        alert("Geocode was not successful for the following reason: " + e);
      });
  }
  
  //boton y modulo para geolocalizacion
  //Tenemos que maquetar el señalizador que representa al usuario
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("estoy aqui");
          infoWindow.open(map);
          map.setCenter(pos);

          // initialize services
          const service = new google.maps.DistanceMatrixService();
          // build request
          //const origin1 = { lat: 55.93, lng: -3.118 };
         /*  const origin2 = "Greenwich, England";
          const destinationA = {lat: 41.657871, lng: -0.884742};
          const destinationB = { lat: 50.087, lng: 14.421 }; */
          const request = {
            origins: [pos,'ubicacion de referencia' /* origin2 */],
            destinations: locations,
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false,
          };

          service.getDistanceMatrix(request).then((response) => {
            // put response

            let distancia = response.rows[0].elements; //array obj con text y value
            let distance = response.rows[0].elements.map(dir => dir.distance.text ); // array de text de momento para hace pruebas
            let val = response.rows[0].elements.map(dir => dir.distance.value );
            let direccionHoteles = response.destinationAddresses; // array de las direcciones

            let complet = distancia.map((p, i) =>{
              return {...p, 'dir': direccionHoteles[i]}
            })

           
            //console.log(complet[1])
            console.log(complet[1].dir) //direccion de la ubicacion
            console.log(complet[1].distance)//valores distancia y value
            console.log(complet[1].distance.text) // valor distancia
            console.log(complet[1].distance.value) // valor de value


            for(let i = 0 ; i < complet.length; ++i){
              //document.getElementById("response").innerHTML += distance[i] + '<br>'
              document.getElementById("sidebar").innerHTML += `<p>${complet[i].dir}  a ${complet[i].distance.text}</p> <br>` 
            }



          });

        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );

    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
  //------ FIN boton y modulo para geolocalizacion

  //------------ matriz de distancia ----------------

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
  }

  //Cree una matriz de caracteres alfabéticos utilizados para etiquetar los marcadores.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  //Agregue los marcadores al mapa de los hoteles. aquí puede editar el marcador.
  //const image ="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
  
  const markers = locations.map((position, i) => {
    const label = labels[i % labels.length];
    const marker = new google.maps.Marker({
        icon: {
            path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
            fillColor: "green",
            fillOpacity: 0.6,
            strokeWeight: 0.7,
            rotation: 0,
            scale: 2,
            anchor: new google.maps.Point(15, 30)
            },
        position,
        map,
        animation: google.maps.Animation.DROP,
    });

    // los marcadores solo se pueden enfocar con el teclado cuando tienen detectores de clics
    marker.addListener("click", toggleBounce);

    marker.addListener("click", () => {
      //infoWindow.setContent(label); // abrir la ventana de información cuando se hace clic en el marcado
      //infoWindow.open(map, marker); // Este parece el causante de de la vetana de infomacion
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

//---------- Selector de comunidad -----------
  const selectorComunidades = document.querySelector('#select-comunidades');
  let marcaFroteriza;
  for(let i = 0; i < comunidadesAutonomas.length; i++ ){
    let option = document.createElement("option");
    let text = document.createTextNode(comunidadesAutonomas[i]);
    option.appendChild(text)

    selectorComunidades.appendChild(option)
   // console.log(i)
  }

  selectorComunidades.addEventListener('change', () =>{

    let indexComunidad = selectorComunidades.selectedIndex;
    
    marcaFroteriza && marcaFroteriza.setMap(null);
    
    //marcaFroteriza && setMap(null)

    marcaFroteriza = new google.maps.Polygon({
      paths: espanaComunidades[(indexComunidad - 1)],
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
    });

    marcaFroteriza.setMap(map);

  })

  // Constructor de la comunidad.
 

    
  // Agregue un agrupador de marcadores para administrar los marcadores.
  //de momento no cunciona
 // new MarkerClusterer({ markers, map });  // <--- Esta funcion está dando error por consola

  //const markerCluster = new markerClusterer.MarkerClusterer({ map, markers });

}

const locations = [
  {lat: 41.657871, lng: -0.884742},
  {lat: 40.416713, lng: -3.703528},
  {lat: 40.416073, lng: -3.690488},
  {lat: 40.436175, lng: -3.708611},
  {lat: 40.385249, lng: -3.709435},
  {lat: 40.451784, lng: -3.681063},
  {lat: 37.238329, lng: -5.104858},
]

window.addEventListener("DOMContentLoaded", () => {
  window.initMap = initMap();

})
