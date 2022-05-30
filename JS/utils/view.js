import controller from './controller.js'

import getTruncatedName from './getTruncatedName.js'

const view = {
    init() {
        const data = controller.getData()
        this.render(data[0].id)
    },

    render: function (selectedID) {
        const data = controller.getData()
        const imgDetailsContainer = document.getElementById('names-container')
        imgDetailsContainer.innerHTML = ""

        data.map(item => {
            var imgItem = this.createImgListItem(item.id, selectedID, item.previewImage)
            imgDetailsContainer.appendChild(imgItem)

            const imgName = document.querySelector(`#${item.id} > p`)
            imgName.innerHTML = getTruncatedName(item.title, imgName)
        })

        controller.showSelectedImage(selectedID)
    },


    createImgListItem: function (imgID, activeImgID, imgURL) {
        var iconImg = this.createIcon(imgURL)
        var imagename = this.createName()

        var imageItem = document.createElement("li")
        
        imageItem.setAttribute('id', imgID)
        imageItem.setAttribute('is-active', imgID == activeImgID)
        imageItem.onclick = () => controller.showSelectedImage(imgID)
    
        imageItem.appendChild(iconImg)
        imageItem.appendChild(imagename)
    
        return imageItem;
    },
    createIcon: function (imgURL) {
        var iconImg = document.createElement("img")
        iconImg.setAttribute('class', 'icon')
        iconImg.src = imgURL
        iconImg.alt = 'icon'
    
        return iconImg
    },
    createName: function () {
        var imagename = document.createElement("p")
        imagename.setAttribute('class', 'imagename')
        
        return imagename;
    },
}

export default view