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


// DAILY DATA //

const dailyDataContainer = document.querySelector(".dailyData");
const inhouseInput = document.getElementById("inhouse-input");
const stayoversInput = document.getElementById("totalstayovers-input");
const checkoutsInput = document.getElementById("totalcheckouts-input");

// Load existing data from local storage
loadDailyData();

// Add event listeners to hold data in input field //
inhouseInput.addEventListener("blur", () => saveDailyData("inhouse", inhouseInput.value));
stayoversInput.addEventListener("blur", () => saveDailyData("stayovers", stayoversInput.value));
checkoutsInput.addEventListener("blur", () => saveDailyData("checkouts", checkoutsInput.value));

// Loading data from local storage //
function loadDailyData() {
    const inhouse = localStorage.getItem("dailyData-inhouse") || "";
    const stayovers = localStorage.getItem("dailyData-stayovers") || "";
    const checkouts = localStorage.getItem("dailyData-checkouts") || "";

    inhouseInput.value = inhouse;
    stayoversInput.value = stayovers;
    checkoutsInput.value = checkouts;
}

// Saving data to local storage //
function saveDailyData(key, value) {
    localStorage.setItem(`dailyData-${key}`, value);
}



// INTRO PAGE //



// HOME PAGE //


function addRoom() {
    const inputBox = document.getElementById("addroominput-button");
    const firstFloorList = document.querySelector(".first-content");
    const secondFloorList = document.querySelector(".second-content");
    const thirdFloorList = document.querySelector(".third-content");
    const fourthFloorList = document.querySelector(".fourth-content");

    if (inputBox.value === ""){
        alert("Please enter a room");
    }
    else{
        if (inputBox.value > 100 && inputBox.value < 199){
            let li = document.createElement("li");
            li.innerHTML = `${inputBox.value}`;
            firstFloorList.appendChild(li);
        }
        else if (inputBox.value > 200 && inputBox.value < 299){
            let li = document.createElement("li");
            li.innerHTML = `${inputBox.value}`;
            secondFloorList.appendChild(li);
        }
        else if (inputBox.value > 300 && inputBox.value < 399){
            let li = document.createElement("li");
            li.innerHTML = `${inputBox.value}`;
            thirdFloorList.appendChild(li);
        }
        else if (inputBox.value > 400 && inputBox.value < 499){
            let li = document.createElement("li");
            li.innerHTML = `${inputBox.value}`;
            fourthFloorList.appendChild(li);
        }


    }
    inputBox.value="";
}

function saveNS(){
    localStorage.setItem("data", l)
}

function removeRoom() {
    let removeBox = document.getElementById("removenoshowsinput-button").value;
    const firstFloorList = document.querySelector(".first-content");
    const secondFloorList = document.querySelector(".second-content");
    const thirdFloorList = document.querySelector(".third-content");
    const fourthFloorList = document.querySelector(".fourth-content");
    // console.log(removeBox);
    if (removeBox.value === "") {
        alert("Please enter a room");
    }
 //WIPPPPPPPPPPPPPP

    else {
        let removeLi = listContainerNS.getElementsByTagName("li");
        for (var i=0; i< removeLi.length; i++) {
            let match = removeLi[i];
            // console.log(match.textContent);
            if(match) {
                let textvalue = match.value || match.textContent || match.innerHTML;
                // console.log(match);
                // console.log(textvalue);
                // console.log(removeBoxNS);
                if(textvalue === removeBoxNS) {
                    listContainerNS.removeChild(match);
                }
            }
            else{
                alert("Room does not exist");
            }
            removeBoxNS=""; //does not override the input box for some reason?
            console.log(removeBoxNS); 
        }
    }
}



// LATE CHECK OUTS //

const inputBoxLC = document.getElementById("latecheckoutinput-button");
const listContainerLC = document.querySelector(".latecheckout-list");
const timeOption = document.getElementById("latecheckout-time"); 
//console.log(timeOption.value);
function addRoomLC() {
    if (inputBoxLC.value === ""){
        alert("Please enter a room");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = `<input type= "checkbox">${inputBoxLC.value} - ${timeOption.value}`;
        listContainerLC.appendChild(li);
    }
    inputBoxLC.value="";
}


function removeRoomLC() {
    let removeBoxLC = document.getElementById("removelatecheckoutinput-button").value;
    const listContainerLC = document.querySelector(".latecheckout-list");
    // console.log(removeBoxLC);
    if (removeBoxLC.value === "") {
        alert("Please enter a room");
    }
    else {
        let removeLi = listContainerLC.getElementsByTagName("li");
        for (var i=0; i< removeLi.length; i++) {
            let match = removeLi[i];
            // console.log(match.textContent);
            if(match) {
                let textvalue = match.value || match.textContent || match.innerHTML;
                // console.log(match);
                // console.log(textvalue);
                // console.log(removeBoxLC);
                if(textvalue = removeBoxLC) {
                    listContainerLC.removeChild(match);
                }
            }
            else{
                alert("Room does not exist");
            }
            removeBoxLC=""; //does not override the input box for some reason?
            console.log(removeBoxLC); 
        }
    }
}

// NEW STAYOVERS //

function addRoomNStay() {
    const inputBoxNStay = document.getElementById("newstayoversinput-button");
    const listContainerNStay = document.querySelector(".newstayovers-list");
    if (inputBoxNStay.value === ""){
        alert("Please enter a room");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = `<input type= "checkbox">${inputBoxNStay.value}`;
        listContainerNStay.appendChild(li);
    }
    inputBoxNStay.value="";
}


function removeRoomNStay() {
    let removeBoxNStay = document.getElementById("removenewstayoversinput-button").value;
    const listContainerNStay = document.querySelector(".newstayovers-list");
    // console.log(removeBoxNStay);
    if (removeBoxNStay === "") {
        alert("Please enter a room");
    }
    else {
        let removeLi = listContainerNStay.getElementsByTagName("li");
        for (var i=0; i< removeLi.length; i++) {
            let match = removeLi[i];
            // console.log(match.textContent);
            if(match) {
                let textvalue = match.value || match.textContent || match.innerHTML;
                // console.log(match);
                // console.log(textvalue);
                // console.log(removeBoxNStay);
                if(textvalue === removeBoxNStay) {
                    listContainerNStay.removeChild(match);
                    removeBoxNStay.innerHTML=""; //does not override the input box for some reason?
                    console.log(removeBoxNStay.innerHTML); 
                }
            }
            else{
                alert("Room does not exist");
            }
            
        }
    }
}

// NO SHOWS //

function addRoomNS() {
    const inputBoxNS = document.getElementById("noshowsinput-button");
    const listContainerNS = document.querySelector(".noshows-list");
    if (inputBoxNS.value === ""){
        alert("Please enter a room");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = `<input type= "checkbox">${inputBoxNS.value}`;
        listContainerNS.appendChild(li);
    }
    inputBoxNS.value="";
}

function saveNS(){
    localStorage.setItem("data", l)
}

function removeRoomNS() {
    let removeBoxNS = document.getElementById("removenoshowsinput-button").value;
    const listContainerNS = document.querySelector(".noshows-list");
    // console.log(removeBoxNS);
    if (removeBoxNS.value === "") {
        alert("Please enter a room");
    }
    else {
        let removeLi = listContainerNS.getElementsByTagName("li");
        for (var i=0; i< removeLi.length; i++) {
            let match = removeLi[i];
            // console.log(match.textContent);
            if(match) {
                let textvalue = match.value || match.textContent || match.innerHTML;
                // console.log(match);
                // console.log(textvalue);
                // console.log(removeBoxNS);
                if(textvalue === removeBoxNS) {
                    listContainerNS.removeChild(match);
                }
            }
            else{
                alert("Room does not exist");
            }
            removeBoxNS=""; //does not override the input box for some reason?
            console.log(removeBoxNS); 
        }
    }
}


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
    // console.log("add initialized");
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

//Search Note//
const searchNote = () => {
    const searchbox = document.getElementById("searchnoteinput-button").value.toUpperCase();
    const allNotes = document.querySelectorAll(".note");

    for (var i=0; i< allNotes.length; i++) {
        let match = allNotes[i];
        if(match) {
            let textvalue = match.value || match.textContent;

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                allNotes[i].style.display = "";
            }
            else{
                allNotes[i].style.display = "none";
            }
        }
    }

}