// Tadd New Task Logic

let titleInput = document.querySelector(".js-input");
let textArea = document.querySelector(".js-textarea");
let submitButton = document.querySelector(".js-button");



submitButton?.addEventListener("click", () => {
  let dataObject = {
    title: titleInput.value,
    text: textArea.value,
  };

  localStorage.setItem("taskData", JSON.stringify(dataObject));
  window.location.href = "Dashboard.html";
});


// Dashboard Logic

// let noteHeading = document.querySelector(".js-heading");
let noteDiv = document.querySelector(".js-notes-container");
if (noteDiv) {
    const storedData = localStorage.getItem("taskData");
    console.log("storedData:", storedData);
    if(storedData){
        const parsedData = JSON.parse(storedData)
        const noteCard = createNotesCard(parsedData.title)
        noteDiv.append(noteCard)
    }
}

function createNotesCard(title) {
  const parentDiv = document.createElement("div");

  parentDiv.className =
    "bg-yellow-300 border border-[#A1A3AB] rounded-xl w-96 h-[166px] p-4";

  const heading = document.createElement("h2");
  heading.className = "text-base font-semibold";
  heading.textContent = title;

  parentDiv.append(heading);

  return parentDiv;
}
