import selectImage from "./selectImage.js"

const image = document.getElementById('image')

export default function keyboardFunction (event, data, counter, defaultPreID) {
    const dataLength = data.length
    if(event.key === 'ArrowUp') {
        const newImageID = defaultPreID+(counter-1+dataLength)%dataLength
        
        return selectImage(newImageID, data, counter, defaultPreID)
    }
    else if(event.key === 'ArrowDown') {
        const newImageID = defaultPreID+(counter+1+dataLength)%dataLength
        
        return selectImage(newImageID, data, counter, defaultPreID)
    }
    else return counter
}