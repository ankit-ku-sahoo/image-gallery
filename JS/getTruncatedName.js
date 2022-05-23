const computeTextLength = (text) => {
    const font = '15px arial'

    const canvas = document.createElement("canvas")
    const context = canvas.getContext("2d")
    context.font = font
    const { width } = context.measureText(text)

    return width
}

export default function getTruncatedName (name, width) {
    if(width >= computeTextLength(name))
        return name

    var length = width - computeTextLength('...')
    var indexStartFirst = 1
    var indexStartSecond = 1

    while(computeTextLength(name.slice(0,indexStartFirst)) < length/2) {
        indexStartFirst++
    }
    while(computeTextLength(name.slice(-indexStartSecond)) < length/2) {
        indexStartSecond++
    }
    return name.slice(0,indexStartFirst-2) + '...' + name.slice(-indexStartSecond+1)
}