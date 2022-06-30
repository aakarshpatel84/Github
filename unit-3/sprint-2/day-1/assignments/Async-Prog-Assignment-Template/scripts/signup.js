//hare get all the values from tag:form
let form = document.querySelector("form");

let user_data_array = JSON.parse(localStorage.getItem("user_data")) || [];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let user_data_obj = {
    user_name: form.user_name.value,
    user_contact: form.user_contact.value,
    user_email: form.user_email.value,
    user_password: form.user_password.value,
  };
  if (checkEmail(user_data_obj.user_email) === true) {
    user_data_array.push(user_data_obj);
    localStorage.setItem("user_data", JSON.stringify(user_data_array));
    window.location.href = "login.html";
  } else {
    alert("Account already exists");
    window.location.href = "login.html";
  }
});

//Here i filtered email
function checkEmail(user_email) {
  let filtered = user_data_array.filter(function (elem) {
    return user_email === elem.user_email;
  });
  if (filtered.length > 0) {
    return false;
  } else {
    return true;
  }
}
