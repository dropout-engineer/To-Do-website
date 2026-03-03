// Tadd New Task Logic

let titleInput = document.querySelector(".js-input");
let textArea = document.querySelector(".js-textarea");
let submitButton = document.querySelector(".js-buttonDone");
let addTask = document.querySelector(".js-addTask");
let taskModal = document.querySelector(".js-addTaskModal"); // Add task
let goBackbtn = document.querySelector(".js-goback");

addTask.addEventListener("click", () => {
  taskModal.classList.remove("hidden");
});

goBackbtn.addEventListener("click", () => {
  taskModal.classList.add("hidden");
});

function clearFields() {
  titleInput.value = "";
  textArea.value = "";
}

submitButton?.addEventListener("click", (event) => {
  event.preventDefault();

  let dataObject = {
    title: titleInput.value,
    text: textArea.value,
    uniqueID: crypto.randomUUID(), // for unique ID
  };

  if (titleInput.value !== "" || textArea.value !== "") {
    // 1. Get existing tasks OR empty array
    let existingTasks = JSON.parse(localStorage.getItem("taskData")) || [];

    // 2. Add new task to array
    existingTasks.push(dataObject);

    localStorage.setItem("taskData", JSON.stringify(existingTasks));
    clearFields();
    // window.location.href = "Dashboard.html"; // commneted it out because now, the psge is working as a popup on the dashbaord
  } else {
    alert("Please fill the heading or ntoes");
  }
});


// Dashboard Logic

let noteDiv = document.querySelector(".js-notes-container");

if (noteDiv) {
  let storedData = JSON.parse(localStorage.getItem("taskData")) || [];

  storedData.forEach((task) => {
    // ✅ PASS uniqueID
    let noteCard = createNotesCard(task.title, task.text, task.uniqueID);
    noteDiv.append(noteCard);
  });
}


function createNotesCard(title, para, uniqueID) {  // ✅ RECEIVE uniqueID
  
  const parentDiv = document.createElement("div");

  parentDiv.className =
    "bg-[#F5F8FF] mt-2 relative mb-2 border border-[#A1A3AB] rounded-xl w-md h-[166px] p-4";

  const deleteButton = document.createElement("button");

  // ✅ FIXED variable name
  deleteButton.className =
    "absolute top-2 right-2 bg-red-400 cursor-pointer text-blue-600";

  deleteButton.innerText = "Delete";


  // ========== DELETE LOGIC ===========
  deleteButton.addEventListener("click", () => {

    let storedData = JSON.parse(localStorage.getItem("taskData")) || [];

    // ✅ Now uniqueID exists
    let updatedData = storedData.filter(function(task) {
      return task.uniqueID !== uniqueID;
    });

    localStorage.setItem("taskData", JSON.stringify(updatedData));

    parentDiv.remove();
  });


  const heading = document.createElement("h2");
  heading.className = "text-base w-64 font-semibold text-lg leading-tight";

  const paragraph = document.createElement("p");
  paragraph.className = "text-sm line-clamp-3 text-[#747474] mt-2 w-64";

  heading.textContent = title;
  paragraph.textContent = para;

  parentDiv.append(heading, paragraph, deleteButton);

  return parentDiv;
}
