//no need of this
const imageNameInput = document.getElementById("imageNameInput");

// event not used
export default function updateName(event, counter, data) {
  //updateName will get updated value
  const newTitle = imageNameInput.value;

  // why Object.values is used here?
  // use const
  var newData = Object.values(data);

  // do not mutate the input values
  newData[counter].title = newTitle;

  //why Object.assign used here?
  return Object.assign(newData);
}
