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
// displayData(data);
let obj = JSON.parse(localStorage.getItem("cart_item"));
function displayData(data) {
  function myFun() {
    console.log("hyy");

    localStorage.setItem("cart_item", JSON.stringify(data));
  }
  document.getElementById("container").innerHTML = "";
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

    btn.addEventListener("click", myFun);

    box.append(img, product_name, product_price, btn);
    x.append(box);
  });
}

// myFun();
