//__________________________________Making Data
let poster = [
  " https://w.wallhaven.cc/full/ne/wallhaven-ne8gyk.jpg",

  "https://w.wallhaven.cc/full/4y/wallhaven-4y861x.jpg",

  "https://w.wallhaven.cc/full/4g/wallhaven-4gkgkl.jpg",

  "https://wallpaperaccess.com/full/733952.png",

  " https://wallpaperaccess.com/full/329760.jpg",

  "https://w.wallhaven.cc/full/m9/wallhaven-m93dom.jpg",

  "https://w.wallhaven.cc/full/43/wallhaven-43vy66.jpg",

  "https://wallpaperaccess.com/full/54671.jpg",

  "https://wallpaperaccess.com/full/645154.jpg",
];

//_________________________________________________________________________________________________________________________________

let movie_Arr = [
  {
    box_image:
      "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/5afeb8388cc2b8ecedad82c5179a833d_0153b77b-a6a2-4644-b5bb-191f5728ec9d_500x749.jpg?v=1573617533",
    Movie_Name: "PIKACHU",
    Rating: "8.3",
    release_date: "2019",
  },
  {
    box_image:
      "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/a367af8b717f224288f8664c7cf100f3_97fe025c-7bb8-41e2-bc39-8387f905d075_500x749.jpg?v=1573572646",
    Movie_Name: "LION KING",
    Rating: "8.7",
    release_date: "2019",
  },
  {
    box_image:
      "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/726b1b0e4005ab2219e31b5582e0602a_500x749.jpg?v=1573572660",
    Movie_Name: "KNIVES OUT",
    Rating: "6.1",
    release_date: "2019",
  },
  {
    box_image:
      "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/uncharted_8yb5nwo0_500x749.jpg?v=1648225108",
    Movie_Name: "UNCHARTED",
    Rating: "7.5",
    release_date: "2022",
  },
  {
    box_image:
      "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/d5cfdab5162ce79515c10c48b0c19cfe_ee891663-d226-4b27-901d-1451101eff10_500x749.jpg?v=1573617424",
    Movie_Name: "MOONLIGHT",
    Rating: "6.9",
    release_date: "2016",
  },
  {
    box_image:
      "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/doctor-strange-in-the-multiverse-of-madness_wjx1jpyh_500x749.jpg?v=1649951107",
    Movie_Name: "DOCTOR-STRANGE",
    Rating: " 8.9",
    release_date: "2022",
  },
  {
    box_image:
      "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/5e9dcc981a25b981d27721b974d76e4d_500x749.jpg?v=1573591610",
    Movie_Name: "PIRATES OF CARIBBEAN",
    Rating: "5.5",
    release_date: "2011",
  },
  {
    box_image:
      "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/6b7875d4a6fd687a6ad6260fd1fb5912_25269cc5-1aba-463c-b7d4-bcd664afa9eb_500x749.jpg?v=1573651487",
    Movie_Name: "JUPITER ASCENDING",
    Rating: "4.2",
    release_date: "2018",
  },
  {
    box_image: "https://w.wallhaven.cc/full/49/wallhaven-49yxo8.jpg",
    Movie_Name: "Mad max",
    Rating: "4.1",
    release_date: "2015",
  },
];
//_______________________________________________________________________

// let get_Data = JSON.parse(localStorage.getItem("movie_data")) || [];
// let id;
// i = 0;
// localStorage.setItem("movie_data", JSON.stringify(movie_Arr));
displayData(movie_Arr);
// get_Data.push(movie_Arr);

function displayData(movie_Arr) {
  document.getElementById("movies").innerHTML = "";
  movie_Arr.forEach(function (elem) {
    //_____________________________________Creating Element

    let div = document.createElement("div");
    let box_image = document.createElement("img");
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");
    let pera = document.createElement("p");

    //____________________________________Set Attribute Img

    box_image.setAttribute("src", elem.box_image);
    box_image.setAttribute("class", "movie_img");

    //____________________________________Giving innertext

    h2.innerText = elem.Movie_Name;
    pera.innerText = elem.release_date;
    h3.innerText = elem.Rating + " " + "✡";

    //________________________________________Appending

    //
    div.append(box_image, h2, h3, pera);
    // document.getElementById("slideshow").append(img);
    document.querySelector("#movies").append(div);
    //___________________________________________________________________
  });
}

//___________________________________________Slideshow

let my_slide_show = document.getElementById("slideshow");
let img = document.createElement("img");
img.src = poster[0];
img.setAttribute("class", "slide_show");
my_slide_show.append(img);
let i = 0;
function showSlider(poster) {
  setInterval(function () {
    if (i === poster.length) {
      i = 0;
    }
    img.src = poster[i];

    my_slide_show.append(img);
    i++;
  }, 2000);
}
showSlider(poster);

//Sorting Low to High----High to Low

function handleSortName() {
  let selected = document.getElementById("sortNames").value;
  if (selected === "Asending") {
    movie_Arr.sort(function (a, b) {
      if (a.Rating > b.Rating) return 1;
      if (a.Rating < b.Rating) return -1;
      return 0;
    });

    displayData(movie_Arr);
    // console.log(get_Data);
  }
  if (selected === "Decending") {
    movie_Arr.sort(function (a, b) {
      if (a.Rating > b.Rating) return -1;
      if (a.Rating < b.Rating) return 1;
      return 0;
    });
    displayData(movie_Arr);
  }
}
