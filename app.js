var body = document.querySelector(".body");
var btn = document.querySelector("button")

// event listener

btn.addEventListener("click" , ()=>{
   var color =document.querySelector(".color").value;
   body.style.backgroundColor = color; 
});