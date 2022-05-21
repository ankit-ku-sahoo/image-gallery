import data from './data.js'

console.log(data)
const dataList = document.getElementById('namesContainer')
const image = document.getElementById('image')
const dataLength = data.length
var counter = 0

const loadData = () => {
    data.map(item => {
        var li = document.createElement("li")
        li.appendChild(document.createTextNode(item.title))
        dataList.appendChild(li)
        console.log(item.title)
    })

    image.src = data[counter].previewImage
}

window.addEventListener('load', loadData)