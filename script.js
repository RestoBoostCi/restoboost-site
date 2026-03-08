function showPage(pageId){

let pages = document.querySelectorAll('.page');

pages.forEach(page => {

page.classList.remove('active');

});

document.getElementById(pageId).classList.add('active');

}


function toggleMenu(){

let menu = document.getElementById("navMenu");

if(menu.style.display === "flex"){

menu.style.display = "none";

}else{

menu.style.display = "flex";

}

}


window.onload = function(){

setTimeout(function(){

document.getElementById("loader").style.display="none";

},2000);

}
if ("serviceWorker" in navigator) {

  navigator.serviceWorker.register("service-worker.js")
  .then(() => console.log("Service Worker activé"));

}