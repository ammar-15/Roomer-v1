// DATE AND TIME //
const dateElement = document.querySelector(".date");
const timeElement = document.querySelector(".time");

/** 
* @param {Date} date
*/
function formatTime(date) {
    const hours12 = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const isAM = date.getHours() < 12;

    return `${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${isAM ? "AM" : "PM"}`; 
}

function formatDate(date) {
    const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    date.getDay()
    return`${DAYS[date.getDay()]}, ${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

setInterval(() => {
    const now = new Date();
    timeElement.textContent = formatTime(now);
    dateElement.textContent = formatDate(now);
}, 200)

// INTRO PAGE //



// HOME PAGE //



// LATE CHECK OUTS //



// NEW STAYOVERS //



// NO SHOWS //



// NOTES PAGE //

const notesContainer = document.querySelector(".addnotes-container")
const addNoteButton = notesContainer.querySelector(".add-notes")

getNotes().forEach(note => {
    const noteElement = createNoteElement(note.id, note.content);
    notesContainer.insertBefore(noteElement, addNoteButton);
});

//Making add button work//
addNoteButton.addEventListener("click", () => addNote());

//Retrieves existing notes from local storage to client browser//
function getNotes() {
    return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]")
}
//Takes an array of notes, save new notesin client browser//
function saveNotes(notes) {
    localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}
//Builds a new element to show a new note//
function createNoteElement(id, content) {
    const element = document.createElement("textarea");

    element.classList.add("note");
    element.value = content;
    element.placeholder = "Empty Sticky Note";

    element.addEventListener("change", () => {
        updateNote(id, element.value);
    });

    element.addEventListener("dblclick", () => {
        const doDelete = confirm("Are you sure you wish to delete this note?")
    
        if (doDelete) {
            deleteNote(id, element);        
        }
    });

    return element;
}

//Adds new note and saves to local storage//
function addNote() {
    const notes = getNotes();
    const noteObject = {
        id: Math.floor(Math.random() * 100000),
        content: ""
    };
    const noteElement = createNoteElement(noteObject.id, noteObject.content);
    notesContainer.insertBefore(noteElement, addNoteButton);

    notes.push(noteObject);
    saveNotes(notes);
}
//Updates notes//
function updateNote(id, newContent) {
    console.log("Updating note....");
    console.log(id, newContent);
    const notes = getNotes();
    const targetNote = notes.filter(note => note.id == id) [0];

    targetNote.content = newContent;
    saveNotes(notes);
}

//Deletes notes//
function deleteNote(id, element) {
    console.log("Deleting note....");
    console.log(id);
    const notes = getNotes().filter(note => note.id != id);

    saveNotes(notes);
    notesContainer.removeChild(element);
}

//bro im so confused//