
{
 "version": "0.2.0",
 "configurations": [
  {
   "name": "Launch Server",
   "type": "node",
   "request": "launch",
   "program": "${workspaceFolder}/backend/server.js",
   "skipFiles": ["<node_internals>/**"]
  }
 ]
} 

window.onload = function () {
  let data = JSON.parse(localStorage.getItem("students")) || [];
  data.forEach(name => addToList(name));
};

function addStudent() {
  let input = document.querySelector("input");
  let name = input.value;

  let data = JSON.parse(localStorage.getItem("students")) || [];
  data.push(name);
  localStorage.setItem("students", JSON.stringify(data));

  addToList(name);
}

function addToList(name) {
  let li = document.createElement("li");
  li.textContent = name;
  document.getElementById("studentList").appendChild(li);
}
