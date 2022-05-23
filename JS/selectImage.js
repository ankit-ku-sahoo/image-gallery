const image = document.getElementById('image')
const imageNameInput = document.getElementById('imageNameInput')

export default function selectImage (IDOfSelected, data, counter, defaultPreID) {
    const newIndex = Number(IDOfSelected.split(defaultPreID)[1])

    if(newIndex === counter)    return newIndex

    const newImageList = document.getElementById(IDOfSelected)
    const oldImageList = document.getElementById(defaultPreID+counter)

    oldImageList.classList.remove('is-active')
    newImageList.setAttribute('class', 'is-active')

    image.src = data[newIndex].previewImage
    image.alt = data[newIndex].title
    imageNameInput.value = data[newIndex].title

    return newIndex
}