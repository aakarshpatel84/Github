let form = document.querySelector("form")
user_data_arr = JSON.parse(localStorage.getItem("userData")) || []

form.addEventListener("submit", function(event){

    event.preventDefault()
    let user_data_obj = {
        name:form.name.value,
      email:form.email.value,
      password:form.password.value

    };
    if(checkEmail(user_data_obj.email)===true){
        user_data_arr.push(user_data_obj)
        localStorage.setItem("userData",JSON.stringify(user_data_arr))
        alert("successfull signup")
        location.href = 'login.html'
        
    }else{
        alert("account already exists")
    }

    
    
});
function checkEmail(email){
    let filtered = user_data_arr.filter(function(elem){
        return email === elem.email

    });
    if(filtered.length > 0){
        return false

    }else{
        return true
    }
}