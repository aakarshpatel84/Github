let search = async()=>{
    let query = document.getElementById("query").value
    let data = await getData(query)
    displayData(data)
    // getData()

    //displayData
      
}

let getData = async(query) =>{
    try{

        let url =`https://masai-mock-api.herokuapp.com/hotels/search?city=${query}`
    
        let res = await fetch(url)
        let data = await res.json()
        return data.hotels;
        // console.log(data.hotels) 


    }catch(err){
        console.log("does not ")
    }
}

displayData = (data) =>{
    let container = document.getElementById("hotel")
    
    data.forEach(elem => {
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.src = elem.Images

        let title = document.createElement("p")
        title.innerText = elem.Ttile

        let price = document.createElement("p")
        price.innerText = elem.Price

        let rating = document.createElement("p")
        rating.innerText = elem.Rating

        let rooms = document.createElement("p")
        rooms.innerText = elem.Rooms

        let ac= document.createElement("p")
        ac.innerText = elem.Ac


      div.append(img, title, price, rating, rooms,ac)
      container.append(div)
                
    });

}




