const weather = new Weather('London');
const ui = new UI;

const setBtn = document.querySelector('.btn-set');
setBtn.addEventListener('click', () => {
    
    const cityValue = ui.getField();
    const weather = new Weather(cityValue);

    weather.getWeather()
    .then((data) => {
        // console.log(data);
        ui.updateUI(data);
    })
    .catch(err => console.log(err));
    

});

const openBtn = document.querySelector('.btn-open');
openBtn.addEventListener('click', () => {
    ui.clearField();
    document.querySelector('#city').classList.remove('denied');
    document.querySelector('#city').classList.remove('verified');

});

const init = function () {
    
    const weather = new Weather('Belo Horizonte');
    
    weather.getWeather()
    .then((data) => ui.updateUI(data));
}

init();









// weather.getWeather()
// .then((weatherData) => {
//     console.log(weatherData)
// })