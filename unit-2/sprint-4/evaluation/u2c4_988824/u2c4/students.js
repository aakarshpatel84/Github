// All the Code for All Students Page Goes Here
let arrFormsLS = JSON.parse(localStorage.getItem("studentData"));
// console.log(arrFormsLS);
let acceptArr = JSON.parse(localStorage.getItem("acceptedData")) || [];
let rejectArr = JSON.parse(localStorage.getItem("rejectedData")) || [];
document.querySelector("#filter").addEventListener("change", filtring);
function filtring() {
  let select = document.querySelector("#filter").value;
  let selectList = arrFormsLS.filter(function (elem, index) {
    return elem.studentCourse == select;
  });
  displayData(selectList);
}
displayData(arrFormsLS);

function displayData(arrFormsLS) {
  arrFormsLS.forEach(function (elem, index) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = elem.studentName;
    let td2 = document.createElement("td");
    td2.innerText = elem.studentEmail;
    let td3 = document.createElement("td");
    td3.innerText = elem.studentPhone;
    let td4 = document.createElement("td");
    td4.innerText = elem.studentGender;
    let td5 = document.createElement("td");
    td5.innerText = elem.studentCourse;
    let td6 = document.createElement("td");
    td6.innerText = "Admitted";
    td6.addEventListener("click", delAccept);
    td6.style.backgroundColor = "Green";
    td6.style.cursor = "pointer";
    td6.addEventListener("click", function () {
      acceptedFunction(elem);
    });
    let td7 = document.createElement("td");
    td7.style.backgroundColor = "red";
    td7.style.cursor = "pointer";
    td7.addEventListener("click", delRej);
    td7.innerText = "Rejected";
    td7.addEventListener("click", function () {
      rejectedFunction(elem);
    });
    tr.append(td1, td2, td3, td4, td5, td6, td7);
    document.querySelector("tbody").append(tr);
  });
}
function delAccept(event) {
  event.target.parentNode.remove();
}
function delRej(event) {
  event.target.parentNode.remove();
}
function acceptedFunction(elem) {
  acceptArr.push(elem);
  localStorage.setItem("acceptedData", JSON.stringify(acceptArr));
}
function rejectedFunction(elem) {
  rejectArr.push(elem);
  localStorage.setItem("rejectedData", JSON.stringify(rejectArr));
}
