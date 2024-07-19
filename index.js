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

//WIPPPPPPPPPPPPPP (saving data to local storage is added)

//Search Room Button  (wip)

const searchRoom = () => {
    const searchbox = document.getElementById("searchinput-button");
    const allRooms = document.querySelectorAll(".note");

    for (var i=0; i< allNotes.length; i++) {
        let match = allRooms[i];
        if(match) {
            let textvalue = math.innerHTML || match.value || match.textContent;

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                allRooms[i].style.display = "";
            }
            else{
                allRooms[i].style.display = "none";
            }
        }
    }

}


function removeRoom() {
    let removeBox = document.getElementById("removeroominput-button");
    const firstFloorList = document.querySelector(".first-content");
    const secondFloorList = document.querySelector(".second-content");
    const thirdFloorList = document.querySelector(".third-content");
    const fourthFloorList = document.querySelector(".fourth-content");
    // console.log(removeBox);
    if (removeBox.value === "") {
        alert("Please enter a room");
    }
    else {
        let removeLi1 = firstFloorList.getElementsByTagName("li");
        let removeLi2 = secondFloorList.getElementsByTagName("li");
        let removeLi3 = thirdFloorList.getElementsByTagName("li");
        let removeLi4 = fourthFloorList.getElementsByTagName("li");
        
        if (removeBox.value < 200){        
            for (var i=0; i< removeLi1.length; i++) {
                let match1 = removeLi1[i];
                //console.log(match2.textContent);
                if(match1) {
                    let textvalue = match1.textContent;
                    // console.log(match);
                     // console.log(textvalue);
                    // console.log(removeBox);
                    if(textvalue === removeBox.value) {
                        firstFloorList.removeChild(match1);
                        removeBox.value="";
                        break;
                    }
                    else{
                        alert("Room does not exist");
                        removeBox.value="";
                        //console.log(removeBox.textContent);
                        break;
                    }
                }
            }
        }
        else if (200 < removeBox.value < 300){        
            for (var i=0; i< removeLi2.length; i++) {
                let match2 = removeLi2[i];
                //console.log(match2.textContent);
                if(match2) {
                    let textvalue = match2.textContent;
                    // console.log(match2);
                     // console.log(textvalue);
                    // console.log(removeBox);
                    if(textvalue === removeBox.value) {
                        secondFloorList.removeChild(match2);
                        removeBox.value="";
                        break;
                    }
                    else{
                        alert("Room does not exist");
                        removeBox.value="";
                        //console.log(removeBox.textContent);
                        break;
                    }
                }
            }
        }
        else if (300 < removeBox.value < 400){        
            for (var i=0; i< removeLi3.length; i++) {
                let match3 = removeLi3[i];
                //console.log(match2.textContent);
                if(match3) {
                    let textvalue = match3.textContent;
                    // console.log(match3);
                     // console.log(textvalue);
                    // console.log(removeBox);
                    if(textvalue === removeBox.value) {
                        thirdFloorList.removeChild(match3);
                        removeBox.value="";
                        break;
                    }
                    else{
                        alert("Room does not exist");
                        removeBox.value="";
                        //console.log(removeBox.textContent);
                        break;
                    }
                }
            }
        }
        else if (400 < removeBox.value < 500){        
            for (var i=0; i< removeLi4.length; i++) {
                let match2 = removeLi4[i];
                //console.log(match2.textContent);
                if(match4) {
                    let textvalue = match4.textContent;
                    // console.log(match4);
                     // console.log(textvalue);
                    // console.log(removeBox);
                    if(textvalue === removeBox.value) {
                        fourthFloorList.removeChild(match4);
                        removeBox.value="";
                        break;
                    }
                    else{
                        alert("Room does not exist");
                        removeBox.value="";
                        //console.log(removeBox.textContent);
                        break;
                    }
                }
            }
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
    let removeBoxLC = document.getElementById("removelatecheckoutinput-button");
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
                if(textvalue === removeBoxLC.value) {
                    listContainerLC.removeChild(match);
                    removeBoxLC.value="";
                    //console.log(removeBoxLC.textContent);
                    break;
                }
                else{
                    console.log("break");
                    alert("Room does not exist");
                    removeBoxLC.value="";
                    //console.log(removeBoxLC.textContent);
                    break;
                }
            }
            
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
    let removeBoxNStay = document.getElementById("removenewstayoversinput-button");
    const listContainerNStay = document.querySelector(".newstayovers-list");
    // console.log(removeBoxNStay);
    if (removeBoxNStay.value === "") {
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
                if(textvalue === removeBoxNStay.value) {
                    listContainerNStay.removeChild(match);
                    removeBoxNStay.value="";
                    //console.log(removeBoxNStay.textContent);
                    break;
                }
                else{
                    alert("Room does not exist");
                    removeBoxNStay.value="";
                    //console.log(removeBoxNStay.textContent);
                    break;
                }
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
        saveNS();
    }
    inputBoxNS.value="";
    
}

var checkboxNS = document.querySelector("input[type=checkbox]");
checkboxNS.addEventListener("change", function(){
    if (this.checked){
        console.log("Checked checkbox");
        saveNS();
    } else {
        console.log("unchecked");
    }
})

function saveNS(){
    const listContainerNS = document.querySelector(".noshows-list");
    localStorage.setItem("data", listContainerNS.textContent);
    console.log(listContainerNS.textContent);
}

function showNS(){
    const listContainerNS = document.querySelector(".noshows-list");
    listContainerNS.textContent = localStorage.getItem("data");
}

showNS()


function removeRoomNS() {
    let removeBoxNS = document.getElementById("removenoshowsinput-button");
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
                if(textvalue === removeBoxNS.value) {
                    listContainerNS.removeChild(match);
                    removeBoxNS.value="";
                    //console.log(removeBoxNS.textContent);
                    break;
                }
                else{
                    alert("Room does not exist");
                    removeBoxNS.value="";
                    //console.log(removeBoxNS.textContent);
                    break;
                }
            }
        }
    }
}


// NOTES PAGE //

const notesContainer = document.querySelector(".addnotes-container")
1

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
    const searchboxN = document.getElementById("searchnoteinput-button").value.toUpperCase();
    const allNotes = document.querySelectorAll(".note");

    for (var i=0; i< allNotes.length; i++) {
        let match = allNotes[i];
        if(match) {
            let textvalue = match.value || match.textContent;

            if(textvalue.toUpperCase().indexOf(searchboxN) > -1){
                allNotes[i].style.display = "";
            }
            else{
                allNotes[i].style.display = "none";
            }
        }
    }

}