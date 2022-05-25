const image = document.getElementById('image')
const imageNameInput = document.getElementById('image-name-input')

export default function selectImage (IDOfSelected, data) {
    const oldImageRef = document.querySelector('li[is-active=true]')
    const newImageRef = document.getElementById(IDOfSelected)

    oldImageRef.setAttribute('is-active', false)
    newImageRef.setAttribute('is-active', true)

    const newIndex = data.findIndex(item => item.id === IDOfSelected)

    image.src = data[newIndex].previewImage
    image.alt = data[newIndex].title
    imageNameInput.value = data[newIndex].title
}