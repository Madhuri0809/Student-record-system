function addStudent() {
  let input = document.querySelector("input");
  let name = input.value;

  if (name === "") {
    alert("Enter student name");
    return;
  }

  let li = document.createElement("li");
  li.textContent = name;

  // delete button
  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(delBtn);

  document.getElementById("studentList").appendChild(li);

  input.value = "";
}

document.getElementById("studentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let id = document.getElementById("studentId").value;
  let age = document.getElementById("age").value;
  let course = document.getElementById("course").value;
  let dept = document.getElementById("department").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;

  let row = `<tr>
    <td>${name}</td>
    <td>${id}</td>
    <td>${age}</td>
    <td>${course}</td>
    <td>${dept}</td>
    <td>${phone}</td>
    <td>${email}</td>
  </tr>`;

  document.getElementById("studentTable").innerHTML += row;
});
