import newData from "./data.js";
import selectImage from "./selectImage.js";
import getTruncatedName from "./getTruncatedName.js";
import keyboardFunction from "./keyboardFunction.js";
import updateName from "./updateName.js";

let data = newData;

const dataList = document.getElementById("namesContainer");

// better name
const actualImage = document.getElementById("image");
const imageNameInput = document.getElementById("imageNameInput");

// no need of this if id is coming from data
const defaultPreID = "img";
const defaultPreName = "imageName";

// better name : activeIndex
let counter = 0;

// name : render
const loadData = () => {
  dataList.innerHTML = "";

  data.map((item, index) => {
    // create separate functions for "li, iconImg and p" which will get some arguments and return dom element
    var li = document.createElement("li");
    var iconImg = document.createElement("img");
    var p = document.createElement("p");

    iconImg.setAttribute("class", "icon");
    iconImg.src = item.previewImage;
    iconImg.alt = "icon";

    p.setAttribute("class", "imgName");

    p.setAttribute("id", defaultPreName + index);

    // can keep id field in data itself and use it like item.id instead of defaultPreID + index
    li.setAttribute("id", defaultPreID + index);
    li.onclick = (e) => (counter = selectImage(defaultPreID + index, data, counter, defaultPreID));
    if (index == counter) li.setAttribute("class", "is-active");

    li.appendChild(iconImg);
    li.appendChild(p);
    dataList.appendChild(li);

    const individualImgName = document.getElementById(defaultPreName + index);
    const nameWidth = p.clientWidth;
    individualImgName.innerHTML = getTruncatedName(item.title, nameWidth, defaultPreName + index);
  });

  actualImage.src = data[counter].previewImage;
  actualImage.alt = data[counter].title;
  imageNameInput.value = data[counter].title;
};

window.addEventListener("load", loadData);

window.addEventListener(
  "keydown",
  (e) => (counter = keyboardFunction(e, data, counter, defaultPreID))
);

imageNameInput.addEventListener("input", (e) => {
  // pass value from event target to the function
  // updateName should not get whole event
  // what if someone make input empty?
  data = updateName(e, counter, data);
  loadData();
});
