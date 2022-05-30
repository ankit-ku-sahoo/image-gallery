// import newData from './utils/data.js'
// import render from './utils/render.js'
// import keyboardFunction from './utils/keyboardFunction.js'
// import updateName from './utils/updateName.js'

// let data = newData

// const imageNameInput = document.getElementById('image-name-input')

// window.addEventListener('load', render(data[0].id, data))

// window.addEventListener('keydown', (e) => keyboardFunction(e.key, data))

// imageNameInput.addEventListener('input', () => {
//     const imageRef = document.querySelector("li[is-active=true]")
//     const imageID = imageRef.id

//     data = updateName(data)
//     render(imageID, data)
// })

import controller from './utils/controller.js'

controller.init()