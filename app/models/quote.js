export default class Quote {
  constructor(data) {
    this.quote = data.quote.body;
    this.author = data.quote.author;
  }
  get Template() {
    return `<div><p>${this.quote}</p>
        <p>- ${this.author}</p></div>`;
  }
}
