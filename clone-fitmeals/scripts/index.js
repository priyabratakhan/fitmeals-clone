import navbar from "../components/navbar.js";
document.getElementById("header").innerHTML = navbar();

import footer from "../components/footer.js";
document.getElementById("foot").innerHTML = footer()
// div.innerHTML = navbar()

//slide
let id; 
let img_arr=["https://images.pexels.com/photos/1508666/pexels-photo-1508666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
"https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
"https://images.pexels.com/photos/1150682/pexels-photo-1150682.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
"https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
"https://images.pexels.com/photos/6869059/pexels-photo-6869059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

]
let img=document.createElement("img");
img.src=img_arr[0];
let i=1; 

id=setInterval(function(){
    if(i==img_arr.length){
        i=0; 
    }
    img.src=img_arr[i];
 let div1= document.getElementById("slide")
 div1.append(img);
 i++; 
},3000)