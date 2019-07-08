import TimeService from "./time-service.js";

var _timeService = new TimeService()

function drawTime(){
    let timeElem = document.querySelector('#clock')
    let time = _timeService.Time
    timeElem.innerHTML = time.Template
}

export default class TimeController {
    constructor(){
        _timeService.addSubscriber('time', drawTime)
        _timeService.getTime()
    }
}