// write code here, dont change anything in HTML and css files
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks
document.querySelector("form").addEventListener("submit", myFunction);
function myFunction(event) {
  event.preventDefault();
  var pic = document.querySelector("#image").value;
  var name = document.querySelector("#name").value;
  var batch = document.querySelector("#batch").value;
  var dsa = document.querySelector("#dsa").value;
  var cs = document.querySelector("#cs").value;
  var coding = document.querySelector("#coding").value;

  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  td1.innerText = pic;
  var td2 = document.createElement("td");
  td2.innerText = name;
  var td3 = document.createElement("td");
  td3.innerText = batch;
  var td4 = document.createElement("td");
  td4.innerText = dsa;
  var td5 = document.createElement("td");
  td5.innerText = cs;
  var td6 = document.createElement("td");
  td6.innerText = coding;
  var obtainedMarks = Number(dsa) + Number(coding) + Number(cs);
  var percentage = (obtainedMarks / 30) * 100;
  var td7 = document.createElement("td");
  td7.innerText = percentage.toFixed(2) + "%";
  var td8 = document.createElement("td");
  if (percentage >= 50) {
    td8.innerText = "Passed";
    td8.style.backgroundColor = "#7cfc00";
  } else {
    td8.innerText = "Async";
    td8.style.backgroundColor = "#e50202";
  }

  var td9 = document.createElement("td");
  td9.innerText = "Delete";
  td9.style.backgroundColor = "red";
  td9.style.cursor = "pointer";
  td9.addEventListener("click", deleteRow);

  tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9);
  document.querySelector("tbody").append(tr);
}
function deleteRow(event) {
  event.target.parentNode.remove();
}
