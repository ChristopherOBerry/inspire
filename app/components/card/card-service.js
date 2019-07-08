import Card from "/../../models/card.js";

const cardApi = axios.create({
	baseURL: 'https://api.scryfall.com/cards/random/',
	timeout: 3000
});

let _state = {
    card: {},
    error: {}
}

let _subscribers = {
    card: [],
    error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
}
export default class CardService {
    constructor(){

    }
    get Card (){
        return _state.card
    }
    get CardError (){
        return _state.error
    }
    addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getCard() {
		
		cardApi.get('').then(res => {
			_setState('card', new Card(res.data))
        })
        .catch(err => _setState('error', err.response.data))
	}
}