import ImageService from "./image-service.js";

const _is = new ImageService()

function drawImage (){
     
    let imageElem = document.querySelector('#bg-image')
    let image = _is.Image
    let bg = imageElem.style
    bg.backgroundImage = `url(${image.Template})`
    bg.backgroundRepeat = "no-repeat"
    bg.backgroundSize = "cover"
    bg.height = "100vh"
    bg.width = "100vw"

}

export default class ImageController {
    constructor (){
        
        _is.addSubscriber('image', drawImage)
		_is.getImage()
	}

}

