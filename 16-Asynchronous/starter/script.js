'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
// const getCountryData = function (country, currency, languages) {
//   const request = new XMLHttpRequest();

//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//   <article class="country">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.altSpellings[2]}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(2)}M</p>
//             <p class="country__row"><span>${
//               data.languages[languages]
//             }</span>LANG</p>
//             <p class="country__row"><span>${
//               data.currencies[currency].name
//             }</span>CUR</p>
//           </div>
//         </article>
//   `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };
///////////////////////////////////////
const renderCountry = function (data, currency, languages, className = '') {
  const html = `
  <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.altSpellings[2]}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(2)}M</p>
            <p class="country__row"><span>${
              data.languages[languages]
            }</span>LANG</p>
            <p class="country__row"><span>${
              data.currencies[currency].name
            }</span>CUR</p>
          </div>
        </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const getCountryAndNeighbour = function (country, currency, languages) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    //Render Country 1
    renderCountry(data, currency, languages);

    // Get Neighbour Country (2)
    const [neighbour, neighbour2] = data.borders;
    if (!neighbour) return;
    // Ajax call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour2}`);
    request2.send();
    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2[0], 'MXN', 'spa', 'neighbour');
    });
  });
};
// getCountryAndNeighbour('USA', 'USD', 'eng');

// getCountryData('USA', 'USD', 'eng');
// getCountryData('bangladesh', 'BDT', 'ben');
// const getCountryData = function (country, currency, languages) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0], currency, languages);
//     });
// };
const getCountryData = function (country, currency, languages) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0], currency, languages));
};
getCountryData('USA', 'USD', 'eng');
