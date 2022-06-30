let form = document.querySelector("form");
let user_data_array = JSON.parse(localStorage.getItem("user_data")) || [];
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let user_data_obj = {
    user_email: form.user_email.value,

    user_password: form.user_password.value,
  };
  if (
    checkSignIn(user_data_obj.user_email, user_data_obj.user_password) === true
  ) {
    localStorage.setItem("login", JSON.stringify(user_data_obj));
    alert("login successfull");
    window.location.href = "index.html";
  } else {
    alert("wrong name and password");
    window.location.href = "signup.html";
  }
});
function checkSignIn(user_email, user_password) {
  let filter = user_data_array.filter(function (elem) {
    return (
      user_email === elem.user_email && user_password === elem.user_password
    );
  });
  if (filter.length > 0) {
    return true;
  } else {
    return false;
  }
}
