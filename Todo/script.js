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

let heading = document.querySelector(".js-heading");
if (heading) {
    const storedData = localStorage.getItem("taskData");
    if(storedData){
        const parsedData = JSON.parse(storedData)
        // const titlePara = document.createElement('p')
        heading.innerText = parsedData.title;

        // heading.appendChild(titlePara)
        
    }
}

// let titleInputValue = titleInput.value
// let textAreaValue = textArea.value

// let paragraph1 = document.createElement('p')
// let paragraph2 = document.createElement('p')

// let title = document.createTextNode(titleInputValue)
// let text = document.createTextNode(textAreaValue);

// // paragraph1.textContent = titleInputValue
// // paragraph2.textContent = textAreaValue

// paragraph1.appendChild(title)
// paragraph2.appendChild(text)

// div.appendChild(paragraph1)
// div.appendChild(paragraph2);
