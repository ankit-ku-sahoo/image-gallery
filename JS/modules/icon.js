export default function createIcon (imgURL) {
    var iconImg = document.createElement("img")
    
    iconImg.setAttribute('class', 'icon')
    iconImg.src = imgURL
    iconImg.alt = 'icon'

    return iconImg
}