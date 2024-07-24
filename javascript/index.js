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

// Print all wip //

function printAll() {
    if (event.type === "click"){
        console.log('print');
        import {showLC,items} from './latecheckouts.js';
        
        window.print(showLC,items);

    } else {
        console.log("print dont work")
    }
}

// Reset all wip //

function resetAll() {

}

