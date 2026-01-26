// Tadd New Task Logic

let titleInput = document.querySelector(".js-input");
let textArea = document.querySelector(".js-textarea");
let submitButton = document.querySelector(".js-button");

function clearFields() {
  titleInput.value = "";
  textArea.value = "";
}

submitButton?.addEventListener("click", (event) => {
  event.preventDefault();

  let dataObject = {
    title: titleInput.value,
    text: textArea.value,
  };

  // 1. Get existing tasks OR empty array
  let existingTasks = JSON.parse(localStorage.getItem("taskData")) || [];

  // 2. Add new task to array
  existingTasks.push(dataObject);

  localStorage.setItem("taskData", JSON.stringify(existingTasks));
  clearFields();
  window.location.href = "Dashboard.html";
});

// Dashboard Logic

let noteDiv = document.querySelector(".js-notes-container");

if (noteDiv) {
  let storedData = JSON.parse(localStorage.getItem("taskData")) || [];

  storedData.forEach((task) =>{
    let noteCard = createNotesCard(task.title, task.text);
    noteDiv.append(noteCard)
  });
}

//   console.log("storedData:", storedData);
//   if (storedData) {
//     const parsedData = JSON.parse(storedData); // it contains object dataOject
//     const noteCard = createNotesCard(parsedData.title, parsedData.text);
//     noteDiv.append(noteCard);
//   }
// }

function createNotesCard(title, para) {
  const parentDiv = document.createElement("div");

  parentDiv.className =
    "bg-[#F5F8FF] border border-[#A1A3AB] rounded-xl w-96 h-[166px] p-4";

  const heading = document.createElement("h2");
  heading.className = "text-base font-semibold";
  const paragraph = document.createElement("p");
  paragraph.className = "text-sm text-[#747474]";

  heading.textContent = title;
  paragraph.textContent = para;

  parentDiv.append(heading, paragraph);

  return parentDiv;
}

// // Tadd New Task Logic

// let titleInput = document.querySelector(".js-input");
// let textArea = document.querySelector(".js-textarea");
// let submitButton = document.querySelector(".js-button");

// function clearFields() {
//   titleInput.value = "";
//   textArea.value = "";
// }

// submitButton?.addEventListener("click", () => {
//   let dataObject = {
//     title: titleInput.value,
//     text: textArea.value,
//   };
//   clearFields();
//   localStorage.setItem("taskData", JSON.stringify(dataObject));
//   window.location.href = "Dashboard.html";
// });

// // Dashboard Logic

// // let noteHeading = document.querySelector(".js-heading");
// let noteDiv = document.querySelector(".js-notes-container");
// if (noteDiv) {
//   const storedData = localStorage.getItem("taskData");
//   console.log("storedData:", storedData);
//   if (storedData) {
//     const parsedData = JSON.parse(storedData); // it contains object dataOject
//     const noteCard = createNotesCard(parsedData.title, parsedData.text);
//     noteDiv.append(noteCard);
//   }
// }

// function createNotesCard(title, para) {
//   const parentDiv = document.createElement("div");

//   parentDiv.className =
//     "bg-[#F5F8FF] border border-[#A1A3AB] rounded-xl w-96 h-[166px] p-4";

//   const heading = document.createElement("h2");
//   heading.className = "text-base font-semibold";
//   const paragraph = document.createElement("p");
//   paragraph.className = "text-sm text-[#747474]";

//   heading.textContent = title;
//   paragraph.textContent = para;

//   parentDiv.append(heading, paragraph);

//   return parentDiv;
// }
