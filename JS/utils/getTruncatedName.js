const canvas = document.createElement("canvas")
const context = canvas.getContext("2d")

const computeTextLength = (text, font) => {
    context.font = font
    const { width } = context.measureText(text)

    return width
}

export default function getTruncatedName (name, imagenameRef) {
    const textWidth = imagenameRef.clientWidth
    const font = window.getComputedStyle(imagenameRef, null).font

    if(textWidth >= computeTextLength(name, font))
        return name

    const textLength = textWidth - computeTextLength('...', font)
    var indexStartFirst = 1
    var indexStartSecond = 1

    while(computeTextLength(name.slice(0,indexStartFirst), font) < textLength/2) {
        indexStartFirst++
    }
    while(computeTextLength(name.slice(-indexStartSecond), font) < textLength/2) {
        indexStartSecond++
    }
    return name.slice(0,indexStartFirst-2) + '...' + name.slice(-indexStartSecond+1)
}