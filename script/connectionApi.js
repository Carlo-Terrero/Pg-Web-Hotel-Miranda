const myHeaders = new Headers();

const section = document.querySelector('#container-rooms');
const left = document.querySelector('#btn-left');
const rigt = document.querySelector('#btn-rigt');
// const a = document.getElementById('#select_element');

const requestOptions = {
  method: 'GET',
  headers: myHeaders
};

function renderElement(element){
  return document.createElement(element);
}

fetch("https://hotel-miranda.onrender.com/public/rooms", requestOptions)
// fetch("http://localhost:3001/public/rooms", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result.rooms)
    renderRooms(result.rooms);
  })
  .catch(error => console.log('error', error));


function renderRooms(rooms){
  const itemsString = createRoomsItems(rooms).join('');
  section.innerHTML = itemsString
}

function selectRoom(){
  console.log('room -> ')
}


const createRoomsItems = rooms => rooms.map( room => {
  return `
    <div class="room">

      <img 
        src=${room.foto} 
        class="img_room"
        alt="img room" 
      >
    
      <div class="container-pgn">
        <div>
          <img src="./assets/svg/8725460_bed_icon 1.png" alt="">            
        </div>

        <div>
          <img src="./assets/svg/925808_wifi_icon 1.png" alt="">
        </div>

        <div>
          <img src="./assets/svg/4920723_automobile_car_transport_transportation_travel_icon 1.png" alt="">            
        </div>

        <div>
          <img src="./assets/svg/384878_cold_new year_snowflake_wheather_winter_icon 1.png" alt="">
        </div>

        <div>
          <img src="./assets/svg/9042522_gym_icon 1.png" alt="">
        </div>

        <div>
          <img src="./assets/svg/9081473_smoking_no_icon 1.png" alt="">
        </div>
        
        <div>
          <img src="./assets/svg/6623006_cocktail_drink_holidays_summer_vacation_icon 1.png" alt="">
        </div>            
        
      </div>

      <div class="container-detail">

        <h1 class="cabecera-detail">
            ${room.bed_type}
        </h1>

        <p>
            ${room.description}
        </p>

        <div class="adquire-room">
          <p class="precio-detail">
            $${room.price}/Night
          </p>

          <button class="btn-adquire" id="select_element" onclick="() => console.log("klk")">
              <strong> Booking Now </strong>
          </button>
        </div>

      </div>
    </div>
  `
  // console.log(room._id)
})