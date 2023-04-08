const myHeaders = new Headers();


const urlencoded = new URLSearchParams();

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
//   body: urlencoded,
//   redirect: 'follow'
};

fetch("https://hotel-miranda.onrender.com/rooms", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result.rooms))
  .catch(error => console.log('error', error));