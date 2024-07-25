// HOME PAGE //

document.getElementById("addroominput-button").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("addbtn").click();
    }
});

function addRoom() {
    const inputBox = document.getElementById("addroominput-button");
    const firstFloorList = document.querySelector(".first-content");
    const secondFloorList = document.querySelector(".second-content");
    const thirdFloorList = document.querySelector(".third-content");
    const fourthFloorList = document.querySelector(".fourth-content");

    if (inputBox.value.trim() === ""){
        alert("Please enter a room");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value.trim();

        if (inputBox.value > 100 && inputBox.value < 200){
            firstFloorList.appendChild(li);
        } else if (inputBox.value > 200 && inputBox.value < 300){
            secondFloorList.appendChild(li);
        } else if (inputBox.value > 300 && inputBox.value < 400){
            thirdFloorList.appendChild(li);
        } else if (inputBox.value > 400 && inputBox.value < 500){
            fourthFloorList.appendChild(li);
        }

        inputBox.value = "";
        saveCheckouts();
    }
}

function saveCheckouts() {
    const floors = [".first-content", ".second-content", ".third-content", ".fourth-content"];
    const allRooms = {};

    floors.forEach((floor, index) => {
        const list = document.querySelector(floor);
        const items = [];

        list.querySelectorAll("li").forEach(item => {
            items.push(item.textContent.trim());
        });

        allRooms[`floor${index + 1}`] = items;
    });

    localStorage.setItem("checkoutsData", JSON.stringify(allRooms));
}

function showCheckouts() {
    const floors = [".first-content", ".second-content", ".third-content", ".fourth-content"];
    const allRooms = JSON.parse(localStorage.getItem("checkoutsData") || "{}");

    floors.forEach((floor, index) => {
        const list = document.querySelector(floor);
        list.innerHTML = "";

        (allRooms[`floor${index + 1}`] || []).forEach(room => {
            let li = document.createElement("li");
            li.textContent = room;
            list.appendChild(li);
        });
    });
}

showCheckouts();

document.getElementById("removeroominput-button").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("removebtn").click();
    }
});

function removeRoom() {
    const removeBox = document.getElementById("removeroominput-button");
    const floors = [".first-content", ".second-content", ".third-content", ".fourth-content"];

    if (removeBox.value.trim() === "") {
        alert("Please enter a room");
    } else {
        let roomFound = false;

        floors.forEach(floor => {
            const list = document.querySelector(floor);
            const items = list.getElementsByTagName("li");

            for (let i = 0; i < items.length; i++) {
                if (items[i].textContent.trim() === removeBox.value.trim()) {
                    list.removeChild(items[i]);
                    roomFound = true;
                    break;
                }
            }
        });

        if (roomFound) {
            removeBox.value = "";
            saveCheckouts();
        } else {
            alert("Room does not exist");
            removeBox.value = "";
        }
    }
}

document.getElementById("searchinput-button").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("searchbtn").click();
    }
});

function searchRoom() {
    const searchBox = document.getElementById("searchinput-button");
    const floors = [".first-content", ".second-content", ".third-content", ".fourth-content"];

    let roomFound = false;

    floors.forEach(floor => {
        const list = document.querySelector(floor);
        const items = list.getElementsByTagName("li");

        for (let i = 0; i < items.length; i++) {
            let match = items[i];
            if (match.textContent.toUpperCase().includes(searchBox.value.toUpperCase())) {
                items[i].style.backgroundColor = "yellow"; 
                if (!roomFound) {
                    items[i].scrollIntoView({ behavior: "smooth", block: "center" });
                    roomFound = true;
                }
                setTimeout(() => {
                    items[i].style.backgroundColor = "";
                }, 3000);
                break;
            } else {
                items[i].style.backgroundColor = ""; 
            }
        }
    });
    searchBox.value = ""; 

    if (!roomFound) {
        alert("Room does not exist");
    }
}