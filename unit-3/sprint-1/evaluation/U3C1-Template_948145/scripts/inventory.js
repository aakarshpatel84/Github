let data = JSON.parse(localStorage.getItem("products"));
// console.log(data);
displayData();
function displayData() {
  data.forEach(function (elem, index) {
    let img = document.createElement("img");
    img.setAttribute("src", elem.image);
    let box1 = document.createElement("div");
    box1.innerHTML = elem.brandName;
    let box2 = document.createElement("div");
    box2.innerText = elem.productName;
    let box3 = document.createElement("div");
    box3.innerText = elem.productPrice;
    let btn = document.createElement("button");
    btn.setAttribute("id", "btn");
    btn.innerText = "Remove";
    btn.addEventListener("click", function () {
      remove(el, index);
    });
    document.querySelector("#products_data").append(img, box1, box2, box3, btn);
  });
}
function remove(el, index) {
  let data = JSON.parse(localStorage.getItem("products"));
  data.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(data));
  displayData(data);
}
document.querySelector("#add_product").addEventListener("click", myAdd);
function myAdd() {
  location.href = "index.html";
}
