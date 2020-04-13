const uiAPI = new UI;

class Weather {
    constructor(city){
        this.key = '4ebab499c9ad1a6b44e8d3ec52bf970e';
        this.city = city;
    }


    async getWeather() {
        
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`);
        const jsonResponse = await response.json();
        

        if(jsonResponse.cod !== '404'){
            
            uiAPI.alertUser('ok');

            return {  
                city: jsonResponse.name,
                country: jsonResponse.sys.country,
                description: jsonResponse.weather[0].description,
                icon: jsonResponse.weather[0].icon,
                temperature: jsonResponse.main.temp,
                feelsLike: jsonResponse.main.feels_like,
                humidity: jsonResponse.main.humidity,
                maxTemp: jsonResponse.main.temp_max,
                windSpeed: jsonResponse.wind.speed
            }
     
        } else {
            //show alert function
            uiAPI.alertUser('no');
        }
    }
}   