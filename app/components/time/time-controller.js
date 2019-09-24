function drawTime() {
  let timeElem = document.querySelector("#clock");

  timeElem.innerHTML = `
  <h3>${moment().format("dddd, MMMM, YYYY")}</h3>
  <h1>${moment().format("LT")}</h1>
  `;
}

export default class TimeController {
  constructor() {
    drawTime();
  }
}
