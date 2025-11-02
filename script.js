let input = document.querySelector("input");
let list = document.getElementById("todo-list");
let addBtn = document.getElementById("add-btn");

const saved = localStorage.getItem("todos");
const todos = saved? JSON.parse(saved) : [];

function saveTodos(){
    localStorage.setItem("todos",JSON.stringify(todos));
}
function createToDoNode(todo,index){
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = !!todo.completed;   
    checkbox.addEventListener("change",()=>{
        todo.completed = checkbox.checked;
        textSpan.style.textDecoration = todo.completed? "line-through" : "";
        saveTodos();
    })

    const textSpan = document.createElement("span");
    textSpan.textContent = todo.text;
    textSpan.style.margin = "0 8px";
    if (todo.completed) {
        textSpan.style.textDecoration = "line-through";
    }
    textSpan.addEventListener("dblclick",()=>{
        const newText = prompt("Edit task",todo.text);
        if(newText !== null){
            todo.text = newText;
            textSpan.textContent = todo.text;
            saveTodos();
        }
    })
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click",()=>{
        todos.splice(index,1);
        render();
        saveTodos();
    })

li.appendChild(checkbox);
li.appendChild(textSpan);
li.appendChild(delBtn);

return li;
}

function render(){
    list.innerHTML = "";

    todos.forEach((todo,index)=>{
        const node = createToDoNode(todo,index);
        list.appendChild(node);
    });
}
function addToDo(){
    const text = input.value.trim();
    if (!text) {
        return
    }

    todos.push({text:text,completed:false});
    console.log(text);
    input.value = "";
    render();
    saveTodos();
}

addBtn.addEventListener("click",addToDo);
input.addEventListener("keydown",(e)=>{
    if (e.key == "Enter") {
        addToDo();
    }
})

render();




// console.log("Input:", input);
// console.log("Add Button:", addBtn);
// console.log("List:", list);
