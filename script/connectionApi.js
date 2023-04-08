const myHeaders = new Headers();

myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4ZTBiZTE1YjIzOWZiNGFlZmI1ODZlIiwibmFtZSI6IkNhcmxvcyIsImVtYWlsIjoiQ2FybG9zQGdtYWlsLmNvbSIsImZvdG8iOiJodHRwczovL2Jsb2dkZXN0aW5pYS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDYvcGFycXVlLW5hY2lvbmFsLWJhbmZmLmpwZyIsImRlc2NyaXB0aW9uIjoiUHJpbWUgdXN1YXJpbyBkZSBsYSBiYmRkIGVuIGxhIG51dmUiLCJjb250YWN0Ijo2MjYzNjc2OTYsImVzdGF0ZSI6dHJ1ZSwic3RhcnRfZGF0ZSI6IjIwMjEtMDQtMjFUMDA6MDA6MDAuMDAwWiIsInB1ZXN0byI6Ik1hbmFnZXIiLCJlbFJlc3RvIjoib2sifSwiaWF0IjoxNjY2OTEzNTc0fQ.xS0BzOhl5z8VDPyK21gSNdRIzMC_gdlBMl0EKXwyhnQ");

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