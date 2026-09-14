let addingTask = document.querySelector(".adding");
let addButton = document.querySelector("button");
let taskMsg = document.querySelector(".taskText");

let count=0;
addButton.addEventListener("click",(evt) => {
    evt.preventDefault();
    let newDiv = document.createElement("li");
    newDiv.classList.add("textBorderDesign");
    let newcheckbox = document.createElement("input");
    newcheckbox.type="checkbox";
    newcheckbox.classList.add("newcheckboxDesign");
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButtonDesign");
    let trashIcon = document.createElement("i");
    trashIcon.classList.add("fa-solid", "fa-trash");
    deleteButton.appendChild(trashIcon);
    let container = document.createElement("div");
    container.classList.add("containerDesign");
    taskMsg.appendChild(container);
    
    newDiv.innerText = `${addingTask.value}`;
    container.appendChild(newDiv);
    container.appendChild(newcheckbox);
    container.appendChild(deleteButton);
    addingTask.value="Enter new tasks";
    
    deleteButton.addEventListener("click", (evt) => {
        evt.preventDefault();
        newDiv.remove();
        newcheckbox.remove();
        deleteButton.remove();
        count=0;
    });
});





