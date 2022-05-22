const imageName = document.getElementById('imageName')

export default function updateName (event, counter, data) {
    const newTitle = imageName.value
    var newData = Object.values(data)

    newData[counter].title = newTitle

    return Object.assign(newData)
}