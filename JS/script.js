import newData from './data.js'
import selectImage from './selectImage.js'
import getTruncatedName from './getTruncatedName.js'
import keyboardFunction from './keyboardFunction.js'
import updateName from './updateName.js'

let data = newData

const dataList = document.getElementById('namesContainer')
const image = document.getElementById('image')
const imageNameInput = document.getElementById('imageNameInput')

const defaultPreID = 'img'
const defaultPreName = 'imageName'
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
        p.setAttribute('id', defaultPreName+index)

        li.setAttribute('id', defaultPreID+index)
        li.onclick = (e) => counter = selectImage(defaultPreID+index, data, counter, defaultPreID)
        if(index==counter)    li.setAttribute('class', 'is-active')

        li.appendChild(iconImg)
        li.appendChild(p)
        dataList.appendChild(li)

        const individualImgName = document.getElementById(defaultPreName+index)
        individualImgName.innerHTML = getTruncatedName(item.title, defaultPreName+index)
    })

    image.src = data[counter].previewImage
    image.alt = data[counter].title
    imageNameInput.value = data[counter].title
}

window.addEventListener('load', loadData)

window.addEventListener('keydown', (e) => counter = keyboardFunction(e, data, counter,defaultPreID))

imageNameInput.addEventListener('input', (e) => {
    data = updateName(e, counter, data)
    loadData()
})

