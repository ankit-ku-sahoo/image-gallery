export default function updateName (data) {
    const imageNameInput = document.getElementById('image-name-input')
    const newTitle = imageNameInput.value

    const activeImageRef = document.querySelector("li[is-active=true]")
    const activeID = data.findIndex(item => item.id === activeImageRef.id)

    data[activeID].title = newTitle

    return data
}