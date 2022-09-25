var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelector("li");

function inputLen() {
    return input.value.length;
}

function createListElement() {
    var div = document.createElement("div");
    var li = document.createElement("li");
    var btn = document.createElement("button");
    div.classList.add("wrapper");
    ul.appendChild(div);
    div.append(li);
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(btn);
    input.value = "";
    btn.classList.add("finished")
    btn.innerHTML='Complete';
}

function addList() {
    if(inputLen()>0) {
        createListElement();
    }
}

function addListKeyboard(event) {
    if (inputLen()>0 && event.which === 13){
        createListElement();
    }
}
function done(task){
    if (task.target.tagName === "LI"){
    task.target.classList.toggle("done");
    }
    
}
function taskComplete(element){
    if (element.target.className === "finished"){
		element.target.parentElement.remove();
	}
}

function UIClick (element){
    done(element);
    taskComplete(element);
}

button.addEventListener("click",addList);
input.addEventListener("keypress", addListKeyboard);
ul.addEventListener('click', UIClick);