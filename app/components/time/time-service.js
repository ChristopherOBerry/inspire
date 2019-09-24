import Time from "../../models/time.js";

const timeApi = axios.create({
  baseURL: "http://worldclockapi.com/api/json/mst/now/",
  timeout: 10000
});

let _state = {
  time: [],
  error: []
};
let _subscribers = {
  time: [],
  error: []
};

function _setState(prop, data) {
  _state[prop] = data;
  _subscribers[prop].forEach(fn => fn());
}

export default class TimeService {
  get Time() {
    return _state.time;
  }
  get TimeError() {
    return _state.error;
  }
  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn);
  }
  getTime() {
    timeApi
      .get()
      .then(res => {
        _setState("time", new Time(res.data));
      })
      .catch(err => console.error("error", err));
  }
}
