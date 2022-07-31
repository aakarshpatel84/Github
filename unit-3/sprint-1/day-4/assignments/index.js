document.querySelector("form").addEventListener('submit',frm)
function frm(event){
    event.preventDefault()
    let name = document.getElementById('name').value
    let course = document.getElementById('course').value
    let unit = document.getElementById('unit').value
    let image = document.getElementById('image').value
    let batch = document.getElementById('batch').value
    window.location.reload()
    let showData = new myData(name,course,unit,image,batch)
    // console.log("showData: ", showData);
    

    
    let arr = JSON.parse(localStorage.getItem('studentData')) || []
    arr.push(showData)
    
    console.log("arr: ", arr);
    localStorage.setItem('studentData',JSON.stringify(arr))
}
function myData(n,c,u,i,b){
   this.name = n
   this.course = c
   this.unit = u
   this.image = i 
   this.batch = `Batch${b}  `
}

function calculate(){

    let arr = JSON.parse(localStorage.getItem('studentData')) || []
    let obj = {}
    for(i=0;i<arr.length;i++){
        let key = arr[i].batch
        if(obj[key]===undefined){
            obj[key]=1
        }else{
            obj[key]++
        }
        
    }
    for (let i in obj){
        
        document.querySelector('p').append(i+" : "+obj[i]+" || ")
    }

  
   
}
  calculate()



document.getElementById('dashboard').addEventListener('click',myds)
function myds(){
    location.href = 'dashboard.html'
}


