import newData from './data.js'
import selectImage from './selectImage.js'
import keyboardFunction from './keyboardFunction.js'
import updateName from './updateName.js'

let data = newData

const dataList = document.getElementById('namesContainer')
const image = document.getElementById('image')
const imageName = document.getElementById('imageName')

const dataLength = data.length
const defaultPreID = 'img'
let counter = 0

const loadData = () => {
    dataList.innerHTML = ""

    data.map((item, index) => {
        var li = document.createElement("li")
        var iconImg = document.createElement("img")
        var p = document.createElement("p")

        iconImg.setAttribute('class', 'icon')
        iconImg.src = item.previewImage
        iconImg.alt = 'icon'

        p.setAttribute('class', 'imgName')
        p.innerHTML = item.title

        li.setAttribute('id', defaultPreID+index)
        li.onclick = (e) => counter = selectImage(defaultPreID+index, data, counter, defaultPreID)
        if(index==counter)    li.setAttribute('class', 'is-active')

        li.appendChild(iconImg)
        li.appendChild(p)
        dataList.appendChild(li)
        // console.log(p.clientWidth, p.clientWidth/Number(window.getComputedStyle(p).fontSize.split('px')[0]))
    })

    image.src = data[counter].previewImage
    image.alt = data[counter].title
    imageName.value = data[counter].title
}

window.addEventListener('load', loadData)

window.addEventListener('keydown', (e) => counter = keyboardFunction(e, data, counter,defaultPreID))

imageName.addEventListener('input', (e) => {
    data = updateName(e, counter, data)
    loadData()
})

