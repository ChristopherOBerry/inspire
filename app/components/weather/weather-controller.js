import WeatherService from "./weather-service.js";

var _weatherService = new WeatherService()

function drawWeather() {
	
	let weatherElem = document.querySelector('#weather')
	let weather = _weatherService.Weather
	weatherElem.innerHTML = weather.Template

	
	
}

export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}


}
