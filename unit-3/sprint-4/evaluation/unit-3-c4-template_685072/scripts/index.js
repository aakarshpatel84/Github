// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import  {nev,side,dataFetch,append}  from "../components/nevbar.js";
 document.getElementById("nevbar").innerHTML = nev()
 document.getElementById("sidebar").innerHTML = side()
console.log("hyy")
let getData = async() =>{
    let containers = document.getElementById("result")

    let data = await dataFetch("in")
    console.log("data: ", data);
    append(data)
}
getData()
document.getElementById("in").addEventListener("click" ,getData)

let USA = async() =>{
    let containers = document.getElementById("news")
    containers.innerHTML = null
    let data = await dataFetch("us")
    console.log("data: ", data);
    append(data.el.articles.containers)
     
}
document.getElementById("us",us).addEventListener("click",USA)

