let addingTask = document.querySelector(".adding");
let addButton = document.querySelector("button");
let taskMsg = document.querySelector(".taskText");

addButton.addEventListener("click",(evt) => {
    evt.preventDefault();
    if(addingTask.value.trim() ==="")return;

    let newDiv = document.createElement("ol");
    newDiv.classList.add("textBorderDesign");

    let newcheckbox = document.createElement("input");
    newcheckbox.type="checkbox";
    newcheckbox.classList.add("newcheckboxDesign");
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButtonDesign");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

    let container = document.createElement("div");
    container.classList.add("containerDesign");
    
    
    newDiv.innerText = `${addingTask.value}`;
    container.appendChild(newDiv);
    container.appendChild(newcheckbox);
    container.appendChild(deleteButton);
    taskMsg.appendChild(container);
    addingTask.value = "";

    deleteButton.addEventListener("click", (evt) => {
        evt.preventDefault();
        container.remove();
        count=0;
    });
});





