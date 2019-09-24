export default class Card {
  constructor(data) {
    this.name = data.name;
    this.imageUrl = data.image_uris.small;
    console.log(this.imageUrl);
  }
  get Template() {
    return `
        <h3>${this.name}</h3>
        <img src="${this.imageUrl}" alt="random card from Scryfall" style="height:20vh;">
        <div class="h4">Random Card of the Day</div>
        `;
  }
}
