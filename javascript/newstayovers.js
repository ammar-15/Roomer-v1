
// NEW STAYOVERS //

function addRoomNStay() {
    const inputBoxNStay = document.getElementById("newstayoversinput-button");
    const listContainerNStay = document.querySelector(".newstayovers-list");

    if (inputBoxNStay.value === "") {
        console.log(inputBoxNStay);
        console.log(inputBoxNStay.value);
        alert("Please enter a room");
    } else {
        let li = document.createElement("li");
        li.innerHTML = `<input type="checkbox">${inputBoxNStay.value.trim()}`;
        listContainerNStay.appendChild(li);
        inputBoxNStay.value = "";
        saveNStay();
    }
}

function saveNStay() {
    const listContainerNStay = document.querySelector(".newstayovers-list");
    const items = [];

    listContainerNStay.querySelectorAll("li").forEach(item => {
        items.push({
            text: item.textContent.trim(),
            checked: item.querySelector("input[type='checkbox']").checked
        });
    });

    localStorage.setItem("newStayoverData", JSON.stringify(items));
    console.log(localStorage.getItem("newStayoverData"));
}

function showNStay() {
    const listContainerNStay = document.querySelectorAll(".newstayovers-list");
    const items = JSON.parse(localStorage.getItem("newStayoverData") || "[]");

    listContainerNStay.forEach(listContainerNSt => {
        listContainerNSt.innerHTML = "";

        items.forEach(item => {
            let li = document.createElement("li");
            li.innerHTML = `<input type="checkbox"${item.checked ? " checked" : ""}>${item.text}`;
            listContainerNSt.appendChild(li);
        });
    });

}

showNStay();

function removeRoomNStay() {
    const removeBoxNStay = document.getElementById("removenewstayoversinput-button");
    const listContainerNStay = document.querySelector(".newstayovers-list");

    if (removeBoxNStay.value.trim() === "") {
        alert("Please enter a room");
    } else {
        const removeLi = listContainerNStay.getElementsByTagName("li");
        let NStayFound = false;

        for (let i = 0; i < removeLi.length; i++) {
            let match = removeLi[i];
            let textvalue = match.textContent.trim();

            if (textvalue === removeBoxNStay.value.trim()) {
                listContainerNStay.removeChild(match);
                NStayFound = true;
                break;
            }
        }

        if (NStayFound) {
            removeBoxNStay.value = "";
            saveNStay(); 
        } else {
            alert("Room does not exist");
            removeBoxNStay.value = "";
        }
    }
}
