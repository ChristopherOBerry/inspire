export default class Time {
  constructor(data) {
    this.currentDateTime = data.currentDateTime;
    this.dayOfTheWeek = data.dayOfTheWeek;
  }

  get Template() {
    let currentTime = this.currentDateTime;
    let displayMid = currentTime.toString().split("T");
    let display = displayMid[1].toString();
    let final = display.split("-");
    console.log(final[0]);
    console.log(moment());

    return `
        <h3>${moment().format("dddd, MMMM, YYYY")}</h3>
        <h1>${moment().format("LT")}</h1>
        `;
  }
}
