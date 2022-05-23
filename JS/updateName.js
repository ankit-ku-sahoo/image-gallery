const imageNameInput = document.getElementById('imageNameInput')

export default function updateName (event, counter, data) {
    const newTitle = imageNameInput.value
    var newData = Object.values(data)

    newData[counter].title = newTitle

    return Object.assign(newData)
}