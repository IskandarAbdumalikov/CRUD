const API_URL = "https://dummyjson.com/users";

let cards = document.querySelector(".cards");
let loading = document.querySelector(".loading");


async function fetchData(api) {
  let data = await fetch(api);
  data
    .json()
    .then((res) => mapData(res))
    .catch((err) => console.log(err))
    .finally(()=>{
      loading.style.display = "none"
    })
}

fetchData(API_URL);

function mapData(data) {
  let cardsTag = "";
  data.users.forEach((element) => {
    cardsTag += `
            <div class="card">
            <div class="img">
              <img src=${element.image} alt="">
            </div>
            <div class="info"> 
              <h2> ${
                element.firstName +
                " " +
                element.lastName +
                " " +
                element.maidenName
              }</h2>
              <a href=${element.email}>Email :<span>${element.email}</span></a>
              <a href="tel:${element.phone}">Phone Number :<span>${element.phone}</span></a>
              <a href=${element.domain}>Domain :<span>${element.domain}</span></a>
              <p>Username : ${element.username}</p>
              <p>Age : ${element.age}</p>
              <p>Gender : ${element.gender}</p>
              <p>Password : ${element.password}</p>
              <p>Birth Date : ${element.birthDate}</p>
              <p>Weight : ${element.weight}</p>
              <p>Eye Color : ${element.eyeColor}</p>
              <p>Hair : ${
                element.hair.color + " " + element.hair.type + " hair "
              }</p>
              
              <p>Address : ${element.address.address}</p>
              <p>Company : ${element.company.address.address}</p>
            </div>
          </div>
        `;
  });

  cards.innerHTML = cardsTag;
}

function createLoadingCard(count) {
  let loadCard = "";
  for (let i = 0; i < count; i++) {
    loadCard += `   
          <div class="loading__item">
          <div class="loading__img bg__animation"></div>
          <div class="loading__title bg__animation"></div>
          <div class="loading__title bg__animation"></div>
        </div>
            `;
    loading.innerHTML = loadCard;
  }
}

createLoadingCard(90);
