//target form elements
//target form elem// Target form elements
const titleInput = document.querySelector("#title");
const dateInput = document.getElementById("date");
const descriptionInput = document.getElementById("description");
const addOrEditNoteBtn = document.querySelector(".submit-btn");
const cardsSection = document.querySelector(".card-section");
const deleteBtn = document.querySelector(".delete-btn");

let existingNotes = JSON.parse(localStorage.getItem("notes"))
  ? JSON.parse(localStorage.getItem("notes"))
  : [];

let isEditingNote = false;

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

let noteToBeEdited = null;
let titleOfNoteToEdit = null;
function selectNoteToEdit(e) {
  isEditingNote = true;

  const noteToEdit = this.parentNode.parentNode;
  noteToBeEdited = noteToEdit;
  const allChildNodes = noteToEdit.childNodes;
  const title = allChildNodes[0].childNodes[0].textContent;
  titleOfNoteToEdit = title;
  const date = allChildNodes[0].childNodes[1].textContent;
  const description = allChildNodes[1].firstElementChild.textContent;

  // add the exiting note content to the input fields
  titleInput.value = title;
  dateInput.value = date;
  descriptionInput.value = description;
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
  cardEditBtn.addEventListener("click", selectNoteToEdit);
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
    {
      title: titleValue,
      date: dateValue,
      description: descriptionValue,
    },
    ...existingNotes,
  ];

  localStorage.setItem("notes", JSON.stringify(existingNotes));

  const newNote = newNoteStructure({
    title: titleValue,
    date: dateValue,
    description: descriptionValue,
  });

  cardsSection.prepend(newNote);

  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
};

const editNote = () => {
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
  const editedNote = newNoteStructure({
    title: titleValue,
    date: dateValue,
    description: descriptionValue,
  });

  // replce dom
  cardsSection.replaceChild(editedNote, noteToBeEdited);

  // replca in localstorage
  const noteIndx = existingNotes.findIndex(
    (note) => note.title === titleOfNoteToEdit
  );

  existingNotes.splice(noteIndx, 1, {
    title: titleValue,
    date: dateValue,
    description: descriptionValue,
  });

  localStorage.setItem("notes", JSON.stringify(existingNotes));
};

const addOrEditNote = (e) => {
  // prevent default form behaviour
  e.preventDefault();
  if (isEditingNote) {
    editNote();
  } else {
    addNewNote();
  }
};

addOrEditNoteBtn.addEventListener("click", addOrEditNote);

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

/*
declare variables const, let
array methods -  findindx, splice....
Javascript objects - {
 title:""
}
dom manipulation - querySelector, getElementbyiD
control strucutes
this
*/

// variables declarations
/**
 * const, let, var
 */

// printName("James");

// function declaration
// function printName(name) {
//   console.log(name);
// }

// arrow function
// const printName = () => {
//   return name;
// };
// res1 = printName("James");
// res2 = printName("gloriah");
// console.log(res1);
// console.log(res2);

// You can re-assign the value of a variable
// let name = "James";
// name = "Gloriah";
// console.log(name);

// You can't re-assign the value of a variable, this with raise an error
// let name = "James";
// name = "Gloriah";
// console.log(name);

// functions

// using the native function keyword

// function add(a, b) {
//   console.log("add");
//   return a + b;
// }

// function sub(a, b) {
//   console.log("sub");
//   return a - b;
// }

// function div(a, b) {
//   console.log("div");
//   return a / b;
// }

// function mult(a, b) {
//   console.log("mult");
//   return a * b;
// }

// // declaration
// function calculator(a, b) {
//   // body
//   // add
//   res1 = add(a, b);
//   // sub
//   res2 = sub(a, b);
//   // div
//   res3 = div(a, b);
//   // mut
//   res4 = mult(a, b);

//   return [res1, res2, res3, res4];
// }
// // invocation
// res = calculator(2, 3);
// console.log(res);

// function third() {
//   console.log("third");
// }

// function second() {
//   console.log("second");
//   third();
// }
// function first() {
//   console.log("first");
//   second();
// }

// function main() {
//   console.log("main");
//   first();
// }
// main();

// arrays
arr = [1, 23, 2, 100, -5, 6];
// push - puts a new item at the end of an array
// arr.push(7);
// pop - removes the last element in an array
// arr.pop();
// unshift - add an elemnet at the begginging of an array
// arr.unshift(100);
// shift - removes an elemnet at the begginging of an array
// arr.shift();
// length - returns the length of an array
// arr.length
// find - finds an element

function elementGreaterThan5(arg) {
  return arg > 5;
}

// function run() {
//   for (let i = 0; i < arr.length; i++) {
//     const res = elementGreaterThan5(arr[i]);
//     if (res) {
//       return arr[i];
//     }
//   }
// }
// console.log(run());
// const element = arr.find(function elementGreaterThan5(arg) {
//   return arg > 5;
// });
// findIndex - returns the index of an element
// const element = arr.findIndex(function elementGreaterThan5(arg) {
//   return arg == 2;
// });
// console.log(element);
// find, findIndex, map, filter, reduce
// const newArr = [10, 12, 90, 6];
// const doubleElement = newArr.map(function multiplyBy2(arg) {
//   console.log(arg);
//   return arg > 12;
// });
// console.log(doubleElement);
// const newArr = [10, 12, 90, 6];
// const doubleElement = newArr.filter(function multiplyBy2(arg) {
//   console.log(arg);
//   return arg > 12;
// });
// console.log(doubleElement);
// const newArr = [10, 12, 90, 6];
// const result = newArr.reduce(function reduce(accum, curr) {
//   console.log(accum, curr);
//   return accum + curr;
// }, 0);
// console.log(result);
