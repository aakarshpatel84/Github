//store the products array in localstorage as "data"
function productData(b, n, p, i) {
  this.brandName = b;
  this.productName = n;
  this.productPrice = p;
  this.image = i;
}

document.querySelector("form").addEventListener("submit", myForm);
let data = JSON.parse(localStorage.getItem("products")) || [];
function myForm(event) {
  event.preventDefault();
  document.querySelector("#product_form");
  let brandName = document.getElementById("product_brand").value;
  let productName = document.getElementById("product_name").value;
  let productPrice = document.getElementById("product_price").value;
  let image = document.getElementById("product_image").value;
  //   console.log(brandName, productName, productPrice, image);
  let show_product_data = new productData(
    brandName,
    productName,
    productPrice,
    image
  );
  data.push(show_product_data);
  localStorage.setItem("products", JSON.stringify(data));
  console.log(data);
}
document.querySelector("#show_products").addEventListener("click", myBtn);
function myBtn() {
  location.href = "inventory.html";
}
