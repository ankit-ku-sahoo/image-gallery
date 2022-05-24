const computeTextLength = (text, nameID) => {
  const individualImgName = document.getElementById(nameID);
  const font = window.getComputedStyle(individualImgName, null).font;

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = font;
  const { width } = context.measureText(text);

  return width;
};

export default function getTruncatedName(name, width, nameID) {
  if (width >= computeTextLength(name, nameID)) return name;

  // use const
  var length = width - computeTextLength("...", nameID);
  var indexStartFirst = 1;
  var indexStartSecond = 1;

  // we are executing computeTextLength functoion too many time, see if it can be optimised
  while (computeTextLength(name.slice(0, indexStartFirst), nameID) < length / 2) {
    indexStartFirst++;
  }
  while (computeTextLength(name.slice(-indexStartSecond), nameID) < length / 2) {
    indexStartSecond++;
  }
  return name.slice(0, indexStartFirst - 2) + "..." + name.slice(-indexStartSecond + 1);
}
