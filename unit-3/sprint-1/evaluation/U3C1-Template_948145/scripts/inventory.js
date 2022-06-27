let data = JSON.parse(localStorage.getItem("products")) || [];
// console.log(data);

displayData(data);

function displayData(data) {
  // document.querySelector("products_data").innerHTML = "";
  data.forEach(function (elem, index) {
    let box1 = document.createElement("div");
    let img = document.createElement("img");
    img.src = elem.image;
    let brand = document.createElement("h3");
    brand.innerText = elem.brandName;
    let name = document.createElement("p");
    name.innerText = elem.productName;
    let price = document.createElement("p");
    price.innerText = elem.productPrice;
    let btn = document.createElement("button");
    btn.setAttribute("id", "Remove_Product");
    btn.innerText = "Remove";
    btn.addEventListener("click", function () {
      remove(elem, index);
    });
    box1.append(img, brand, name, price, btn);
    document.querySelector("#products_data").append(box1);
  });
}
function remove(elem, index) {
  // let data = JSON.parse(localStorage.getItem("products"));

  data.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(data));
  displayData(data);
  window.location.reload();
}
document.querySelector("#add_product").addEventListener("click", myAdd);
function myAdd() {
  location.href = "index.html";
}
