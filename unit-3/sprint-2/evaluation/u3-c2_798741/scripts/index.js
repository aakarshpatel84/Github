const url = "https://grocery-masai.herokuapp.com/items";
fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    console.log(res);
    return displayData(res.data);
  })
  .catch(function (err) {
    console.log(err);
  });
function displayData(data) {
  // document.getElementById("container").innerHTML = "";
  let x = document.getElementById("container");
  data.forEach((elem) => {
    let box = document.createElement("div");
    box.setAttribute("class", "box");

    let img = document.createElement("img");
    img.src = elem.image;

    let product_name = document.createElement("p");
    product_name.innerText = elem.name;

    let product_price = document.createElement("p");
    product_price.innerText = elem.price;

    let btn = document.createElement("button");
    btn.setAttribute("class", "add_to_cart");
    btn.innerText = "Add to cart";

    box.append(img, product_name, product_price, btn);
    x.append(box);

    btn.addEventListener("click", function () {
      // console.log("hyy");
      productName(elem);

      // let cartData = JSON.stringify(localStorage.getItem("cart_item"));
    });
  });
}

// displayData(data);
// // myFun();
// console.log(data);

// let obj = JSON.parse(localStorage.getItem("cart_item"));

// localStorage.setItem("cart_item", JSON.stringify(elem));
let blankArr = [];
function productName(elem) {
  console.log("elem: ", elem);
  blankArr.push(elem);
  localStorage.setItem("cart_item", JSON.stringify(blankArr));
}
