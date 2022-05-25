import selectImage from "./selectImage.js"

export default function keyboardFunction (keyClicked, data) {
    const dataLength = data.length
    const oldImageRef = document.querySelector('li[is-active=true]')
    const oldIndex = data.findIndex(item => item.id === oldImageRef.id)

    if(keyClicked === 'ArrowUp') {
        const newIndex = (oldIndex+dataLength-1)%dataLength
        const newImageID = data[newIndex].id
        
        return selectImage(newImageID, data)
    }
    else if(keyClicked === 'ArrowDown') {
        const newIndex = (oldIndex+1)%dataLength
        const newImageID = data[newIndex].id
        
        return selectImage(newImageID, data)
    }
}