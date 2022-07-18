let nev = () =>{
    return `  <h3>Home Page</h3>
    <input type="text" placeholder="Search" />
    <button>Search</button>
    `
}
let side = () =>{
    return `<button id="in">INDIA</button>
    <button id="ch">CHINA</button>
    <button id="us">USA</button>
    <button id="uk">UK</button>
    <button id="nz">NEWZELEND</button>
    <div id="news"></div>
    `
}
// nev()

async function dataFetch(country) {

    const url = `https://masai-api.herokuapp.com/news/top-headlines?country=${country}`
    try {
        let res = await fetch(url)
        let data = await res.json()
        return data
    }
    catch(err){
        return err
    }
   
}
let append = (data) =>{
    let parent = document.getElementById("news")
        parent.innerHTML = null
    data.articles.forEach(el=>{
        
                let image = document.createElement("img")
                image.src = el.urlToImage
        let auther = document.createElement("h2")
        auther.innerText = el.author

        let conten = document.createElement("p")
        conten.innerText = el.content

        let descrip = document.createElement("p")
        descrip.innerText = el.description

        let box = document.createElement("div")
        box.setAttribute("id","result")
        box.append(image,auther,conten,descrip)
        parent.append(box)



    })

}







export {nev,side,dataFetch,append}