export default class Image {
    constructor (data){
        
        this.url = data.url
        
        
    }

    get Template(){
       
        return this.url
    }
}