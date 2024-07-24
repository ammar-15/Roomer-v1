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

