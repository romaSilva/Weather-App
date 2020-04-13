class UI {
    constructor(){
        this.cityInputField = document.getElementById('city');
        this.addressOutput = document.querySelector('.city');
        this.descriptionOutput = document.querySelector('.description');
        this.temperatureOutput = document.querySelector('.temperature');
        this.feelsLikeOutput = document.querySelector('.feels-like');
        this.humidityOutput = document.querySelector('.humidity');
        this.maxOutput = document.querySelector('.max');
        this.speedOutput = document.querySelector('.speed');
        this.iconOutput = document.querySelector('.icon')
    }

    getField() {
        const city = this.cityInputField.value;
        return city;
    }

    clearField(){
         this.cityInputField.value = '';
    }

    updateUI(data) {
        this.iconOutput.src = `http://openweathermap.org/img/wn/${data.icon}.png`;
        this.addressOutput.innerHTML = data.city;
        this.descriptionOutput.innerHTML = data.description.charAt(0).toUpperCase() + data.description.slice(1);
        this.temperatureOutput.innerHTML = `${parseInt(data.temperature - 273)} °C (${parseInt((data.temperature - 273) * (9/5) +32)} °F)`;
        this.feelsLikeOutput.innerHTML = `Feels like ${parseInt(data.feelsLike - 273)} °C`;
        this.humidityOutput.innerHTML = `Humidity: ${parseInt(data.humidity)}%`;
        this.maxOutput.innerHTML = `Max: ${parseInt(data.maxTemp - 273)} °C`
        this.speedOutput.innerHTML = `Wind Speed: ${data.windSpeed} m/s`

    }

    alertUser(status){

        const inputText = this.cityInputField.value;

        if(status === 'ok' && inputText !== '') {
            this.cityInputField.classList.add('verified');
            this.cityInputField.classList.remove('denied');

        } else if(status === 'no' && inputText !== '') {
            this.cityInputField.classList.add('denied');
            this.cityInputField.classList.remove('verified');
        } 
    }
}
