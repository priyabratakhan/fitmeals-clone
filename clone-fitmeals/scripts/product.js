import navbar from "../components/navbar.js";
document.getElementById("header").innerHTML = navbar();

// document.getElementById("prod").addEventListener("click", produ);
// function produ() {
//     console.log("hi")
// }
// document.getElementById("click").addEventListener("click", getData);
// function prod() {
//     console.log("hi")
// }
let url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";

var dishes = JSON.parse(localStorage.getItem("food")) || [];

let container = document.getElementById("menu");

async function getData() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data);
      localStorage.setItem("food", JSON.stringify(data));
      appendProducts(dishes);
  } catch (err) {
    console.log(err);
  }
}

getData();

function appendProducts(data) {
    console.log("data:",data)

    data.meals.forEach(function (el) {
        // console.log(el)

        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.strMealThumb;

        let title = document.createElement("p");
        title.innerText = el.strMeal;

        let price = document.createElement("p");
        price.innerText = "Price: " + (Math.round(Math.random() * 500)+100)
        
        let button = document.createElement("button");
        button.innerText = "Add to Cart";

        div.append(img, title, price, button);
        container.append(div)
    })
}