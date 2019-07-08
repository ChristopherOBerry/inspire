import WeatherController from "./components/weather/weather-controller.js";
import TodoController from "./components/todo/todo-controller.js";
import ImageController from "./components/image/image-controller.js";
import QuoteController from "./components/quote/quote-controller.js";
import TimeController from "./components/time/time-controller.js";
import CardController from "./components/card/card-controller.js";

// HEY WHERE ARE ALL OF YOUR CONTROLLERS??
class App {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController(),
      todoController: new TodoController(),
      imgController: new ImageController(),
      quoteController: new QuoteController(),
      timeController: new TimeController(),
      cardController: new CardController()
      
    }
  }
}

window['app'] = new App()  