let data_from_ls = JSON.parse(localStorage.getItem('studentData'))
console.log("data_from_ls: ", data_from_ls);

function displayData(data_from_ls){
    
    data_from_ls.forEach((el,index) => {
        
        
        // let th = document.createElement('thead')
        
        let container = document.createElement('tr')
        let td1 = document.createElement('td')
        td1.innerText = el.name
        
        let td2 = document.createElement('td')
        td2.innerText = el.course
        
        let td3 = document.createElement('td')
        td3.innerText = el.unit
        
        let image = document.createElement('img')
        image.src = el.image
        
        let td4 = document.createElement('td')
        // td4.innerText = `ft-web-${el.batch}`
        td4.innerText = el.batch

        let btn = document.createElement("td")
        btn.innerText = "Remove"
        btn.style.cursor = 'pointer'
        btn.addEventListener('click',function(){

        remove(index)

        });

        container.append(td1,td2,td3,td4,image,btn)
        document.querySelector('tbody').append(container)
        
        
    });

}
function remove(index){
    console.log("index: ", index);
    // confirm("Do you want to remove this item?")
   data_from_ls.splice(index,1)
   localStorage.setItem("studentData",JSON.stringify(data_from_ls))
   window.location.reload()
}
displayData(data_from_ls)