import createImgListItem from '../modules/imageListItems.js'
import getTruncatedName from './getTruncatedName.js'
import selectImage from './selectImage.js'

const imgDetails = document.getElementById('names-container')

export default function render (selectedID, data) {
    imgDetails.innerHTML = ""

    data.map(item => {
        var imgItem = createImgListItem(item.id, selectedID, item.previewImage, data)
        imgDetails.appendChild(imgItem)

        const imgNameRef = document.querySelector(`#${item.id} > p`)
        imgNameRef.innerHTML = getTruncatedName(item.title, imgNameRef)
    })

    selectImage(selectedID, data)
}