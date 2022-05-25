import selectImage from "../utils/selectImage.js"
import createIcon from "./icon.js"
import createName from "./imageName.js"

export default function createImgListItem (imgID, activeImgID, imgURL, data) {
    var iconImg = createIcon(imgURL)
    var imagename = createName(imgID)
    var imageItem = document.createElement("li")
    
    imageItem.setAttribute('id', imgID)
    imageItem.setAttribute('is-active', imgID == activeImgID)
    imageItem.onclick = () => {
            selectImage(imgID, data)
    }

    imageItem.appendChild(iconImg)
    imageItem.appendChild(imagename)

    return imageItem;
}