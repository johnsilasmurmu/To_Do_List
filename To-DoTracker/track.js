let addingTask = document.querySelector("input");
let addButton = document.querySelector("button");
let taskMsg = document.querySelector(".taskText");





let count=0;
addButton.addEventListener("click",(evt) => {
    evt.preventDefault();
    let newDiv = document.createElement("div");
    newDiv.classList.add("textBorderDesign");
    let newcheckbox = document.createElement("input");
    newcheckbox.type="checkbox";
    newcheckbox.classList.add("newcheckboxDesign");
    let deleteButton = document.createElement("button");
    deleteButton.value="delete";
    deleteButton.classList.add("deleteButtonDesign");

    count++;
    newDiv.innerText = `${count}. ${addingTask.value}`;
    taskMsg.appendChild(newDiv);
    taskMsg.appendChild(newcheckbox);
    taskMsg.appendChild(deleteButton);
    addingTask.value="Enter new tasks";
    deleteButton.addEventListener("click", (evt) => {
        evt.preventDefault();
        newDiv.remove();
        newcheckbox.remove();
        deleteButton.remove();
        count=0;
    });
});





