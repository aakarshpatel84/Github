document.querySelector("form").addEventListener("submit", myDsa);
let userArr = JSON.parse(localStorage.getItem("userData")) || [];
displayTable(userArr);
window.addEventListener("load", function () {
  displayTable(userArr);
});
function myDsa(event) {
  event.preventDefault();
  let userObj = {
    questionTitle: document.querySelector("#title").value,
    queLink: document.querySelector("#link").value,
    difficuly: document.querySelector("#difficulty").value,
  };
  userArr.push(userObj);
  displayTable(userArr);
  localStorage.setItem("userData", JSON.stringify(userArr));
  function displayTable(userArr) {
    document.querySelector("tbody").innerHTML = "";
    userArr.forEach(function (element) {
      tr = document.createElement("tr");
      td1 = document.createElement("td");
      td1.innerText = element.questionTitle;

      td2 = document.createElement("td");
      td2.innerText = element.queLink;

      td3 = document.createElement("td");
      td3.innerText = element.difficuly;

      td4 = document.createElement("td");

      if (element.difficuly == "Easy") {
        td4.innerText = "No";
      } else {
        td4.innerText = "Yes";
      }
      td5 = document.createElement("td");
      td5.innerText = "Delete";
      td5.style.backgroundColor = "red";
      td5.style.cursor = "pointer";
      td5.addEventListener("click", deleteRow);

      tr.append(td1, td2, td3, td4, td5);
      document.querySelector("tbody").append(tr);
    });
    function deleteRow(event) {
      event.target.parentNode.remove();
    }
  }
}
