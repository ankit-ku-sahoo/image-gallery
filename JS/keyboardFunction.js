import selectImage from "./selectImage.js";

const image = document.getElementById("image");

export default function keyboardFunction(event, data, counter, defaultPreID) {
  const dataLength = data.length;
  if (event.key === "ArrowUp") {
    // const newActiveIndex = (counter - 1 + dataLength) % dataLength;
    // and use this newActiveIndex
    const newImageID = defaultPreID + ((counter - 1 + dataLength) % dataLength);

    return selectImage(newImageID, data, counter, defaultPreID);
  } else if (event.key === "ArrowDown") {
    const newImageID = defaultPreID + ((counter + 1 + dataLength) % dataLength);

    return selectImage(newImageID, data, counter, defaultPreID);
    // no need of else at the end, simply return your value
  } else return counter;

  // return counter;
}
