//Data for slide show
let poster = [
  " https://w.wallhaven.cc/full/xl/wallhaven-xly6jl.jpg",

  "https://w.wallhaven.cc/full/4y/wallhaven-4y861x.jpg",

  "https://w.wallhaven.cc/full/4g/wallhaven-4gkgkl.jpg",

  "https://wallpaperaccess.com/full/733952.png",

  " https://wallpaperaccess.com/full/329760.jpg",

  "https://w.wallhaven.cc/full/m9/wallhaven-m93dom.jpg",

  "https://w.wallhaven.cc/full/43/wallhaven-43vy66.jpg",

  "https://wallpaperaccess.com/full/54671.jpg",

  "https://wallpaperaccess.com/full/645154.jpg",
];

//Movies Data
let movie_Arr = [
  {
    box_image:
      "https://i.pinimg.com/564x/ba/46/d0/ba46d054ed6b8ad0ce1a1a3420fcdc3a.jpg",
    Movie_Name: "BLADE RUNNER",
    Rating: 8.1,
    release_date: "1982",
  },
  {
    box_image:
      "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/a367af8b717f224288f8664c7cf100f3_97fe025c-7bb8-41e2-bc39-8387f905d075_500x749.jpg?v=1573572646",
    Movie_Name: "LION KING",
    Rating: 6.8,
    release_date: "2019",
  },
  {
    box_image:
      "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/726b1b0e4005ab2219e31b5582e0602a_500x749.jpg?v=1573572660",
    Movie_Name: "KNIVES OUT",
    Rating: 7.9,
    release_date: "2019",
  },
  {
    box_image:
      "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/uncharted_8yb5nwo0_500x749.jpg?v=1648225108",
    Movie_Name: "UNCHARTED",
    Rating: 6.4,
    release_date: "2022",
  },
  {
    box_image:
      "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/d5cfdab5162ce79515c10c48b0c19cfe_ee891663-d226-4b27-901d-1451101eff10_500x749.jpg?v=1573617424",
    Movie_Name: "MOONLIGHT",
    Rating: 7.4,
    release_date: "2016",
  },
  {
    box_image:
      "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/doctor-strange-in-the-multiverse-of-madness_wjx1jpyh_500x749.jpg?v=1649951107",
    Movie_Name: "DOCTOR STRANGE",
    Rating: 7.1,
    release_date: "2022",
  },
  {
    box_image:
      "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/5e9dcc981a25b981d27721b974d76e4d_500x749.jpg?v=1573591610",
    Rating: 6.6,
    Movie_Name: "PIRATES OF CARIBBEAN",
    release_date: "2011",
  },
  {
    box_image:
      "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/6b7875d4a6fd687a6ad6260fd1fb5912_25269cc5-1aba-463c-b7d4-bcd664afa9eb_500x749.jpg?v=1573651487",
    Rating: 5.3,
    Movie_Name: "JUPITER ASCENDING",
    release_date: "2018",
  },
  {
    box_image: "https://w.wallhaven.cc/full/49/wallhaven-49yxo8.jpg",
    Rating: 8.1,
    Movie_Name: "MAD MAX",
    release_date: "2015",
  },
];

displayData(movie_Arr);
function displayData(movie_Arr) {
  document.getElementById("movies").innerHTML = "";
  movie_Arr.forEach(function (elem) {
    // Creating Element
    let div = document.createElement("div");
    let box_image = document.createElement("img");
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");
    let pera = document.createElement("p");

    //Set Attribute Img
    box_image.setAttribute("src", elem.box_image);
    box_image.setAttribute("class", "movie_img");

    //Give innertext
    h2.innerText = elem.Movie_Name;
    pera.innerText = elem.release_date;
    h3.innerText = elem.Rating + " " + "✡";

    //Appending
    div.append(box_image, h2, h3, pera);
    document.querySelector("#movies").append(div);
  });
}

//Slideshow
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

//Sorting Low to High<---->High to Low
function handleSortName() {
  let selected = document.getElementById("sortNames").value;
  if (selected === "Asending") {
    movie_Arr.sort(function (a, b) {
      if (a.Rating > b.Rating) return 1;
      if (a.Rating < b.Rating) return -1;
      return 0;
      // return b.Rating - a.Rating;
    });

    displayData(movie_Arr);
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
//End
