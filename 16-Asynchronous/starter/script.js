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
const renderError = function (msg) {
  countriesContainer.insertAdjacentHTML('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
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
const getJSON = function (url, errorMsg = 'Something Went Wrong') {
  return fetch(url).then(response => {
    console.log(response);
    if (!response.ok) {
      throw new Error(`${errorMsg} ${response.status}`);
    }
    return response.json();
  });
};
// const getCountryData = function (country, currency, languages) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok) {
//         throw new Error(`Country not found ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0], currency, languages);
//       const neighbour = data[0].borders[0];
//       console.log(data);
//       console.log(neighbour);
//       if (!neighbour) return;
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       renderCountry(data[0], 'CAD', 'eng', 'neighbour');
//     })
//     .catch(err => {
//       console.error(`${err} 🚫🚫🚫`);
//       renderError(`Some Things went wrong 🚫🚫 ${err.message} try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
/*
const getCountryData = function (country, currency, languages) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0], currency, languages);
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error('No neighbour found!');
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })

    .then(data => {
      console.log(data);
      renderCountry(data[0], 'CAD', 'eng', 'neighbour');
    })
    .catch(err => {
      console.error(`${err} 🚫🚫🚫`);
      renderError(`Some Things went wrong 🚫🚫 ${err.message} try again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener('click', function () {
  getCountryData('USA', 'USD', 'eng');
});

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));
*/
const getPosition = function (country) {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function (country) {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    // console.log(lat, lng);
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?json=1`);
    if (!resGeo.success) throw new Error('Problem getting location Data');
    const dataGeo = await resGeo.json();
    // console.log(dataGeo);

    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (res.status == 404) throw new Error('Problem getting Country Data');
    const data = await res.json();
    // console.log(data);
    renderCountry(data[0], 'BDT', 'ben', 'neighbour');
    return `continents : ${data[0].region}`;
  } catch (err) {
    // console.log(err);
    renderError(`💥💥💥 ${err.message}`);
    throw err;
  }
};

// whereAmI('portugal')
//   .then(region => console.log(`2: ${region}`))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => console.log('3: FINISHED'));
// console.log(continents);

console.log(' 1: FIRST');
(async function () {
  try {
    const region = await whereAmI('');
    console.log(region);
  } catch (err) {
    console.error(`2: ${err.message}`);
  }
  console.log('3: FINISHED');
})();
