"use strict";

const input = document.getElementsByClassName("text")[0];
const btn = document.getElementsByTagName("button")[0];
const listToDo = document.querySelector(".list-todo");
const listDone = document.querySelector(".list-done");
// const list = document.getElementById("list").innerText;

btn.addEventListener("click", () => {
    if(input.value === "") {  
        return;    
    }  
    createDelElements(input.value);
    input.value = "";                
});

function createDelElements(value) {
    
    // const listToDo = list.replace("{{title}}", "To do");
    //document.getElementsByTagName("ul")[0].innerHTML = listToDo;
    //const listDone = list.replace("{{title}}", "Done");

    const newElem = document.createElement("li");
    const removeBtn = createDelBtn(newElem);
    newElem.className = "new-elements";
    newElem.textContent = value; 
    
   
    const taskCheckbox = document.createElement("input");
    taskCheckbox.setAttribute("type", "checkbox");
    taskCheckbox.className = "taskCheckbox";

    taskCheckbox.addEventListener("change", () => {
        listDone.className = "done";
        listToDo.after(listDone);

        listDone.appendChild(newElem);
        newElem.appendChild(removeBtn);
        listDone.appendChild(taskCheckbox);
        if(!taskCheckbox.checked) {
            listToDo.appendChild(taskCheckbox);
            listToDo.appendChild(newElem);
        }
        removeBtn.addEventListener("click", () => {
            taskCheckbox.remove();
        });
    });

    listToDo.appendChild(newElem);
    listToDo.appendChild(taskCheckbox);

}
    
function createDelBtn(node) {
    const btnDel = document.createElement("button");
    btnDel.textContent = "Del"; 
    btnDel.className = "btn-del";
    btnDel.addEventListener("click", () => {
        node.remove();
    });
    return btnDel;
}
