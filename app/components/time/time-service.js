import Time from "../../models/time.js";

const timeApi = axios.create({
	baseURL: 'https://worldclockapi.com/api/json/mst/now/',
	timeout: 3000
});

let _state = {
	time: []
	
}
let _subscribers = {
	time: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
	
}

export default class TimeService{
    get Time(){
        return _state.time
    }
    addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
    }
    getTime(){
        timeApi.get().then(res => {
			_setState('time', new Time(res.data))
		})
    }
}