import model from './model.js'
import view from './view.js'

const controller = {
    init() {
        view.init()
        this.enableEventListeners()
    },

    getData: function () {
        return model.data
    },
    updateData: function (data) {
        model.data = data
    },

    enableEventListeners: function () {
        const imageNameInput = document.getElementById('image-name-input')
        window.addEventListener('keydown', (e) => this.updateImageOnKeyboardPress(e.key))

        imageNameInput.addEventListener('input', () => {
            const imageRef = document.querySelector("li[is-active=true]")
            const imageID = imageRef.id

            controller.updateName()
            view.render(imageID)
        })
    },


    showSelectedImage: function (selectedID) {
        const data = this.getData()
        
        const image = document.getElementById('image')
        const imageNameInput = document.getElementById('image-name-input')

        const oldImageRef = document.querySelector('li[is-active=true]')
        const newImageRef = document.getElementById(selectedID)
    
        oldImageRef.setAttribute('is-active', false)
        newImageRef.setAttribute('is-active', true)
    
        const newIndex = data.findIndex(item => item.id === selectedID)
    
        image.src = data[newIndex].previewImage
        image.alt = data[newIndex].title
        imageNameInput.value = data[newIndex].title
    },

    
    updateName: function () {
        const data = this.getData()
        const imageNameInput = document.getElementById('image-name-input')
        const newTitle = imageNameInput.value
    
        const activeImageRef = document.querySelector("li[is-active=true]")
        const activeID = data.findIndex(item => item.id === activeImageRef.id)
    
        data[activeID].title = newTitle
    
        this.updateData(data)
    },
    updateImageOnKeyboardPress: function (keyClicked) {
        const data = this.getData()
        const dataLength = data.length
        const oldImageRef = document.querySelector('li[is-active=true]')
        const oldIndex = data.findIndex(item => item.id === oldImageRef.id)
    
        if(keyClicked === 'ArrowUp') {
            const newIndex = (oldIndex+dataLength-1)%dataLength
            const newImageID = data[newIndex].id
            
            return this.showSelectedImage(newImageID, data)
        }
        else if(keyClicked === 'ArrowDown') {
            const newIndex = (oldIndex+1)%dataLength
            const newImageID = data[newIndex].id
            
            return this.showSelectedImage(newImageID, data)
        }
    }
}

export default controller