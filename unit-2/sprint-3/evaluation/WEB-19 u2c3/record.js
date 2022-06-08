// fill in javascript code here
document.querySelector("form").addEventListener("submit", myFunction);
function myFunction(event) {
  event.preventDefault();
  let formTag = document.querySelector("form");

  let name = formTag.name.value;
  let emplyerId = formTag.employeeID.value;
  let department = formTag.department.value;
  let excperience = formTag.exp.value;
  let mail = formTag.email.value;
  let mobile = formTag.mbl.value;
  console.log(name, emplyerId, department, excperience, mail, mobile);
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.innerText = name;
  let td2 = document.createElement("td");
  td2.innerText = emplyerId;
  let td3 = document.createElement("td");
  td3.innerText = department;
  let td4 = document.createElement("td");
  td4.innerText = excperience;
  let td5 = document.createElement("td");
  td5.innerText = mail;
  let td6 = document.createElement("td");
  td6.innerText = mobile;
  let td7 = document.createElement("td");
  if (excperience > 5) {
    td7.innerText = "Senior";
  } else if (excperience == 2 && 5) {
    td7.innerText = "Junier";
  } else {
    td7.innerText = "Fresher";
  }
  let td8 = document.createElement("td");
  td8.innerText = "Delete";
  td8.style.backgroundColor = "red";
  td8.style.cursor = "pointer";
  td8.addEventListener("click", deleteRow);
  tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
  document.querySelector("tbody").append(tr);
}
function deleteRow(event) {
  event.target.parentNode.remove();
}
