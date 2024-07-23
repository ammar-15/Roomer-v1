
// NOTES PAGE //

const notesContainer = document.querySelector(".addnotes-container")
const addNoteButton = document.querySelector(".add-notes");

//Get notes from local storage//
function getNotes() {
    return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
}

//Save notes to local storage//
function saveNotes(notes) {
    localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}

//Creates a new note element//
function createNoteElement(id, content) {
    const element = document.createElement("textarea");

    element.classList.add("note");
    element.value = content;
    element.placeholder = "Empty Note";

    element.addEventListener("change", () => {
        updateNote(id, element.value);
    });

    element.addEventListener("dblclick", () => {
        const doDelete = confirm("Are you sure you wish to delete this note?");
        if (doDelete) {
            deleteNote(id, element);
        }
    });

    return element;
}

//Adds new note//
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
    const targetNote = notes.find(note => note.id == id);

    if (targetNote) {
        targetNote.content = newContent;
        saveNotes(notes);
    }
}

//Deletes notes//
function deleteNote(id, element) {
    console.log("Deleting note....");
    console.log(id);
    const notes = getNotes().filter(note => note.id != id);

    saveNotes(notes);
    notesContainer.removeChild(element);
}

//Load existing notes//
function loadNotes() {
    const notes = getNotes();
    notes.forEach(note => {
        const noteElement = createNoteElement(note.id, note.content);
        notesContainer.insertBefore(noteElement, addNoteButton);
    });
}

//Search Note//
function searchNote() {
    const searchboxN = document.getElementById("searchnoteinput-button").value.toUpperCase();
    const allNotes = document.querySelectorAll(".note");

    allNotes.forEach(note => {
        let textvalue = note.value || note.textContent; 
        if (textvalue.toUpperCase().indexOf(searchboxN) > -1) { 
            note.style.display = "";
        } else {
            note.style.display = "none";
        }
    });
}

// Load notes on page load
loadNotes();                  

// Event listener for add note button
addNoteButton.addEventListener("click", addNote); 

// Event listener for search input
document.getElementById("searchnoteinput-button").addEventListener("input", searchNote);