let input = document.getElementById("input");
let done = document.getElementById("done");
let notes = document.getElementById("ul-style");

done.addEventListener("click", async (event) => {
  event.preventDefault();
  const noteValue = input.value;

  if (noteValue.trim() !== "") {
    createNote(noteValue);
    input.value = "";

    try {
      const response = await axios.post("http://localhost:3000/notes", {
        textarea: noteValue,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Failed to send note:", error);
    }
  }
});

function createNote(text) {
  let li = document.createElement("li");
  //   create the checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = text;
  span.classList.add("li-style");

  //Toggle class on checkbox click
  checkbox.addEventListener("change", () => {
    li.classList.toggle("li-style-checked", checkbox.checked);
  });

  // Append both to the li
  li.appendChild(checkbox);
  li.appendChild(span);

  notes.appendChild(li);
}
