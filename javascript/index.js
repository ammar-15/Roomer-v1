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
document.getElementById('printall-button').addEventListener('click', function () {
    const iframes = document.querySelectorAll('iframe');
    let loadedCounter = 0;
    let combinedContent = '';

    iframes.forEach(iframe => {
        iframe.onload = function() {
            combinedContent += iframe.contentDocument.body.innerHTML;
            loadedCounter++;
            if (loadedCounter === iframes.length) {
                printCombinedContent(combinedContent);
            }
        };
        iframe.src = iframe.src;
    });

    function printCombinedContent(content) {
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
                <head>
                    <title>Print All Content</title>
                </head>
                <body>${content}</body>
            </html>
        `);
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => {
            printWindow.print();
            printWindow.close();
        }, 500);
    }
});
// Reset all wip //

function resetAll() {

}

