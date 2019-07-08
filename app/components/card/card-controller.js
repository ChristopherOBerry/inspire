import CardService from "/./card-service.js";

const _cardService = new CardService()

function drawCard (){
    let cardElem = document.querySelector('#random-card')
    let card = _cardService.Card
    cardElem.innerHTML = card.Template
}

export default class CardController {
    constructor(){
        _cardService.addSubscriber('card', drawCard)
        _cardService.getCard()
    }
}