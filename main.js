//target form elements
//target form elem// Target form elements
const titleInput = document.querySelector("#title");
const dateInput = document.getElementById("date");
const descriptionInput = document.getElementById("description");
const addNoteBtn = document.querySelector(".submit-btn");
const cardsSection = document.querySelector(".card-section");
const deleteBtn = document.querySelector(".delete-btn");

let existingNotes = JSON.parse(localStorage.getItem("notes"))
  ? JSON.parse(localStorage.getItem("notes"))
  : [];

function deleteNote(e) {
  // remove from the dom
  //   remove from local storage
  const newNotes = JSON.parse(localStorage.notes).filter(
    (note) =>
      note.title !==
      this.parentNode.parentNode.firstElementChild.firstElementChild.textContent
  );
  localStorage.notes = JSON.stringify(newNotes);
  this.parentNode.parentNode.remove();
}

function editNote(e) {
  console.log("edit");
}

const newNoteStructure = (noteContent) => {
  const { title, date, description } = noteContent;

  const article = document.createElement("article");
  article.setAttribute("class", "note-card");

  //   header
  const cardHeaderDiv = document.createElement("div");
  cardHeaderDiv.setAttribute("class", "card-header");

  const cardHeaderH1 = document.createElement("h1");
  const cardHeaderH1Text = document.createTextNode(title);
  cardHeaderH1.setAttribute("class", "card-header-text");
  cardHeaderH1.appendChild(cardHeaderH1Text);

  const cardHeaderSpan = document.createElement("span");
  const cardHeaderSpanValue = document.createTextNode(date);
  cardHeaderSpan.setAttribute("class", "date");
  cardHeaderSpan.appendChild(cardHeaderSpanValue);

  cardHeaderDiv.appendChild(cardHeaderH1);
  cardHeaderDiv.appendChild(cardHeaderSpan);

  //   description
  const cardDescriptionDiv = document.createElement("div");
  cardDescriptionDiv.setAttribute("class", "card-description");

  const cardDescParagraph = document.createElement("p");
  const cardDescParagraphText = document.createTextNode(description);
  cardDescParagraph.setAttribute("class", "description-text");
  cardDescParagraph.appendChild(cardDescParagraphText);

  cardDescriptionDiv.appendChild(cardDescParagraph);

  //   card footer
  const cardBtns = document.createElement("div");
  cardBtns.setAttribute("class", "card-btns");

  const cardEditBtn = document.createElement("button");
  const cardEditBtnText = document.createTextNode("edit");
  cardEditBtn.addEventListener("click", editNote);
  cardEditBtn.setAttribute("class", "card-btn");
  cardEditBtn.appendChild(cardEditBtnText);

  const cardDeleteBtn = document.createElement("button");
  const cardDeleteBtnText = document.createTextNode("delete");
  cardDeleteBtn.addEventListener("click", deleteNote);
  cardDeleteBtn.setAttribute("class", "card-btn");
  cardDeleteBtn.appendChild(cardDeleteBtnText);

  cardBtns.appendChild(cardEditBtn);
  cardBtns.appendChild(cardDeleteBtn);

  //   append all
  article.appendChild(cardHeaderDiv);
  article.appendChild(cardDescriptionDiv);
  article.appendChild(cardBtns);

  return article;
};

const addNewNote = (e) => {
  // prevent default form behaviour
  e.preventDefault();

  //   access note information
  const titleValue = titleInput.value;
  const dateValue = dateInput.value;
  const descriptionValue = descriptionInput.value;

  const disabledAddNoteButton =
    !titleValue ||
    !titleValue.trim() ||
    !dateValue ||
    !descriptionValue ||
    !descriptionValue.trim();

  if (disabledAddNoteButton) {
    return;
  }

  existingNotes = [
    ...existingNotes,
    {
      title: titleValue,
      date: dateValue,
      description: descriptionValue,
    },
  ];

  localStorage.setItem("notes", JSON.stringify(existingNotes));

  const newNote = newNoteStructure({
    title: titleValue,
    date: dateValue,
    description: descriptionValue,
  });

  cardsSection.appendChild(newNote);

  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
};

addNoteBtn.addEventListener("click", addNewNote);

window.addEventListener("DOMContentLoaded", (event) => {
  if (localStorage.notes) {
    JSON.parse(localStorage.notes).forEach((note) => {
      const newNote = newNoteStructure({
        title: note.title,
        date: note.date,
        description: note.description,
      });

      cardsSection.appendChild(newNote);
    });
  }
});
