// const imgName = document.getElementById
const computeTextLength = (text) => {
    const font = '15px arial'

    const canvas = document.createElement("canvas")
    const context = canvas.getContext("2d")
    context.font = font
    const { width } = context.measureText(text)

    return width
}

export default function getTruncatedName (name, nameID) {
    const imgName = document.getElementById(nameID)
    const width = imgName.clientWidth

    if(width >= computeTextLength(name))
        return name

    var length = width - computeTextLength('...')
    var indexStartFirst = 0
    var indexStartSecond = !(name.length%2)

    while(computeTextLength(name.slice(0,indexStartFirst+1)) < length/2) {
        indexStartFirst++
    }
    while(computeTextLength(name.slice(-indexStartSecond-1)) < length/2) {
        indexStartSecond++
    }
    return name.slice(0,indexStartFirst) + '...' + name.slice(-indexStartSecond)
}