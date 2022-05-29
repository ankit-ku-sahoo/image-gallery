const computeTextLength = (text, font) => {
    const widthTester = document.createElement('span')
    widthTester.innerHTML = text
    document.body.appendChild(widthTester)

    const width = widthTester.offsetWidth

    document.body.removeChild(widthTester)

    return width
}

const binarySearchForOptimalLength = (startIndex, endIndex, text, font, requiredWidth) => {
    let optimalIndex = 0
    while(startIndex <= endIndex) {
        let tempIndex = Math.floor((startIndex+endIndex)/2)
        let newText = (
            tempIndex >= 0 ?
                text.slice(0,tempIndex)
            :
                text.slice(-tempIndex)
        )

        if(computeTextLength(newText, font) <= requiredWidth) {
            optimalIndex = tempIndex
            startIndex = tempIndex + 1
        }
        else
            endIndex = tempIndex - 1
    }

    return optimalIndex

}

export default function getTruncatedName (name, imagenameRef) {
    const textWidth = imagenameRef.clientWidth
    const font = window.getComputedStyle(imagenameRef, null).font

    if(textWidth >= computeTextLength(name, font))
        return name

    const textLength = textWidth - computeTextLength('...', font)
    let requiredWidth = Math.ceil(textLength/2)
    
    let indexStartFirst = binarySearchForOptimalLength(0, name.length-1, name, font, requiredWidth)
    let indexStartSecond = binarySearchForOptimalLength(-name.length, 0, name, font, requiredWidth)

    return name.slice(0,indexStartFirst) + '...' + name.slice(-indexStartSecond+1)
}