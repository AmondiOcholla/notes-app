//target form elements
//target form elem// Target form elements
const titleInput = document.querySelector("#title");
const dateInput = document.getElementById("date");
const descriptionInput = document.getElementById("description");
const addNoteBtn = document.querySelector(".submit-btn");
const cardsSection = document.querySelector(".card-section");

const addNewNote = (e) => {
    // prevent default form behaviour
    e.preventDefault();

    //   access note information
    const titleValue = titleInput.value;
    const dateValue = dateInput.value;
    const descriptionValue = descriptionInput.value;

    //   store note to local storage
    // notes = [
    //     {}
    //     {}
    //     {}
    //     {}
    // ]

    let existingNotes = JSON.parse(localStorage.getItem("notes")) ? JSON.parse(localStorage.getItem("notes")) : [];

    existingNotes = [
        ...existingNotes,
        {
            title: titleValue,
            date: dateValue,
            description: descriptionValue,
        },
    ];

    localStorage.setItem("notes", JSON.stringify(existingNotes));

    const newCard = `<article class="note-card">
               <div class="card-header">
                   <h1 class="card-header-text">${titleValue}</h1>
                   <span class="date">${dateValue}</span>
               </div>
               <div class="card-decription">
                   <p class="decription-text">
                       ${descriptionValue}
                   </p>
               </div>
               <div class="card-btns">
                   <button class="card-btn">edit</button>
                   <button class="card-btn">delete</button>
               </div>
           </article>`;

    cardsSection.insertAdjacentHTML("afterbegin", newCard);

    titleInput.value = "";
    dateInput.value = "";
    descriptionInput.value = "";
};

addNoteBtn.addEventListener("click", addNewNote);

window.addEventListener("DOMContentLoaded", (event) => {
    if (localStorage.notes) {
        JSON.parse(localStorage.notes).forEach((note) => {
            const newCard = `<article class="note-card">
               <div class="card-header">
                   <h1 class="card-header-text">${note.title}</h1>
                   <span class="date">${note.date}</span>
               </div>
               <div class="card-decription">
                   <p class="decription-text">
                       ${note.description}
                   </p>
               </div>
               <div class="card-btns">
                   <button class="card-btn">edit</button>
                   <button class="card-btn">delete</button>
               </div>
           </article>`;

            cardsSection.insertAdjacentHTML("afterbegin", newCard);
        });
    }
});

// template  strings-
// my name is + name + and i'm  + age + years
// `my name is ${name} name  and im  ${} years`

// Javascript objects , key: value
/**
student =  {name: "Hames", age:"20", school:"Jkuar"}
student.age
*/

//  arrays
/**
 * push - adds a  new element to the back of an array
 * pop - removes an element from the top of the array
 */