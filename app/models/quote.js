export default class Quote {
    constructor(data){
        this.quote = data.quote.body
        this.author = data.quote.author
        
    }
    get Template(){
        return `<div><h5>${this.quote}</h5>
        <p>- ${this.author}</p></div>`
    }
}