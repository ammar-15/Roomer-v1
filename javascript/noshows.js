
// NO SHOWS //

function addRoomNS() {
    const inputBoxNS = document.getElementById("noshowsinput-button");
    const listContainerNS = document.querySelector(".noshows-list");

    if (inputBoxNS.value.trim() === "") {
        alert("Please enter a room");
    } else {
        let li = document.createElement("li");
        li.innerHTML = `<input type="checkbox">${inputBoxNS.value.trim()}`;
        listContainerNS.appendChild(li);
        inputBoxNS.value = "";
        saveNS();
    }
}

function saveNS() {
    const listContainerNS = document.querySelector(".noshows-list");
    const items = [];

    listContainerNS.querySelectorAll("li").forEach(item => {
        items.push({
            text: item.textContent.trim(),
            checked: item.querySelector("input[type='checkbox']").checked
        });
    });

    localStorage.setItem("noShowsData", JSON.stringify(items));
    console.log(localStorage.getItem("noShowsData"));
}

function showNS() {
    const listContainerNS = document.querySelectorAll(".noshows-list");
    const items = JSON.parse(localStorage.getItem("noShowsData") || "[]");

    listContainerNS.forEach(listContainerns => {
        listContainerns.innerHTML = "";

        items.forEach(item => {
            let li = document.createElement("li");
            li.innerHTML = `<input type="checkbox"${item.checked ? " checked" : ""}>${item.text}`;
            listContainerns.appendChild(li);
        });
    });

}

showNS();

function removeRoomNS() {
    const removeBoxNS = document.getElementById("removenoshowsinput-button");
    const listContainerNS = document.querySelector(".noshows-list");

    if (removeBoxNS.value.trim() === "") {
        alert("Please enter a room");
    } else {
        const removeLi = listContainerNS.getElementsByTagName("li");
        let NSFound = false;

        for (let i = 0; i < removeLi.length; i++) {
            let match = removeLi[i];
            let textvalue = match.textContent.trim();

            if (textvalue === removeBoxNS.value.trim()) {
                listContainerNS.removeChild(match);
                NSFound = true;
                break;
            }
        }

        if (NSFound) {
            removeBoxNS.value = "";
            saveNS(); 
        } else {
            alert("Room does not exist");
            removeBoxNS.value = "";
        }
    }
}
