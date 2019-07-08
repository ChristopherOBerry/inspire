export default class Time{
    constructor(data){
        this.currentDateTime = data.currentDateTime
        this.dayOfTheWeek = data.dayOfTheWeek
        

        

        
    }

    get Template (){
        let currentTime = this.currentDateTime
        let displayMid = currentTime.toString().split("T")
        let display = displayMid[1].toString()
        let final = display.split("-")
        console.log(final[0])
        
        return `<h4>${this.dayOfTheWeek}</h4>
        <h4>${final[0]}</h4>
        `
    }
}