

// LATE CHECK OUTS //

const inputBoxLC = document.getElementById("latecheckoutinput-button");
const listContainerLC = document.querySelector(".latecheckout-list");
const timeOption = document.getElementById("latecheckout-time");

function addRoomLC() {
    if (inputBoxLC.value.trim() === "") {
        alert("Please enter a room");
    } else {
        let li = document.createElement("li");
        li.innerHTML = `<input type="checkbox">${inputBoxLC.value.trim()} - ${timeOption.value}`;
        listContainerLC.appendChild(li);
        inputBoxLC.value = "";
        saveLC();
    }
}

function saveLC() {
    const listContainerLC = document.querySelector(".latecheckout-list");
    const timeOption = document.getElementById("latecheckout-time");
    const items = [];

    listContainerLC.querySelectorAll("li").forEach(item => {
        const [room, time] = item.textContent.split(" - ");
        items.push({
            room: room.trim(),
            time: time.trim(),
            checked: item.querySelector("input[type='checkbox']").checked
        });
    });

    localStorage.setItem("lateCheckoutData", JSON.stringify(items));
    console.log(localStorage.getItem("lateCheckoutData")); 
}

function showLC() {
    const listContainerLC = document.querySelectorAll(".latecheckout-list");
    const items = JSON.parse(localStorage.getItem("lateCheckoutData") || "[]");
    console.log(listContainerLC);

    listContainerLC.forEach(listContainerLCo => {
        listContainerLCo.innerHTML = "";

        items.forEach(item => {
            let li = document.createElement("li");
            li.innerHTML = `<input type="checkbox"${item.checked ? " checked" : ""}>${item.room} - ${item.time}`;
            listContainerLCo.appendChild(li);
    });
    });
}

function removeRoomLC() {
    const removeBoxLC = document.getElementById("removelatecheckoutinput-button");

    if (removeBoxLC.value.trim() === "") {
        alert("Please enter a room");
    } else {
        const removeLi = listContainerLC.getElementsByTagName("li");
        let LCFound = false;

        for (let i = 0; i < removeLi.length; i++) {
            let match = removeLi[i];
            let textvalue = match.textContent.split(" - ")[0].trim();

            if (textvalue === removeBoxLC.value.trim()) {
                listContainerLC.removeChild(match);
                LCFound = true;
                break;
            }
        }

        if (LCFound) {
            removeBoxLC.value = "";
            saveLC(); 
        } else {
            alert("Room does not exist");
            removeBoxLC.value = "";
        }
    }
}

showLC();


