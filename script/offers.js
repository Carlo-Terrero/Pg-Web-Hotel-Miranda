const section = document.querySelector('#container-rooms');
const left = document.querySelector('#btn-left');
const rigt = document.querySelector('#btn-rigt');
// const a = document.getElementById('#select_element');

const requestOptions = {
    method: 'GET',
};

// function renderElement(element){
//   return document.createElement(element);
// }

fetch("https://hotel-miranda.onrender.com/public/offert", requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result.rooms)
        renderRooms(result.rooms);
    })
    .catch(error => console.log('error', error)
);

function renderRooms(rooms){
  const itemsString = createRoomsItems(rooms).join('');
  section.innerHTML = itemsString
}

function selectRoom(){
  console.log('room -> ')
}


const createRoomsItems = rooms => rooms.map( room => {

    let desc = (room.price * room.discount) / 100;
    let totalPrice = room.price - desc;
    return `
        <div class="offers_container">
            
            <div class="offers-container-img" style="background-image: url(${room.foto})">
                <div class="container-precios">
                    <s class="precio-actual"> 
                        <strong>$${room.price}</strong>
                        <strong class="noche-actual">/Night</strong>
                    </s>

                    <p class="precio-descuento">
                        <strong>$${totalPrice.toFixed(2)}</strong>
                        <strong class="noche-descuento">/Night</strong>                
                    </p>
                </div>
                
            </div>
            <div class="container-container">

                <div class="offers-container-title">
                    <p class="room-type">
                        TYPE BED
                    </p>

                    <p class="room-name">
                        ${room.bed_type}
                    </p>
                </div>

                <div class="offers-container-description">
                    <div class="descrip-room">
                        ${room.description}
                    </div>
                    
                    <div class="container-extras">
                        <div class="container-extra-data">
                            <i class="fa-light fa-air-conditioner"></i>
                            <p>
                                Air conditioner
                            </p>
                            
                            <p>
                                Breakfast
                            </p>
                            
                            <p>
                                Cleaning
                            </p>
                            
                            <p>
                                Grocery
                            </p>
                            
                            <p>
                                Shop near
                            </p>
                        </div>

                        <div class="container-extra-data" >
                            <p>
                                High speed WiFi
                            </p>
                            
                            <p>
                                Kitchen
                            </p>
                            
                            <p>
                                Shower
                            </p>
                            
                            <p>
                                Single Bed
                            </p>
                            
                            <p>
                                Towels
                            </p>
                        </div>
                    </div>
                </div>

                <button class="btn-normal">
                    BOOK NOW
                </button>
            </div>
        </div>
    `
})
