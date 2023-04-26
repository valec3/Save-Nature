const menu = document.querySelector(".fa-bars");
const navbar = document.querySelector(".navbar");


menu.addEventListener("click",(event)=>{
    menu.classList.toggle("fa-times"); //Menu hamburguesa
    navbar.classList.toggle("nav-toggle");
})

window.addEventListener("scroll",(event)=>{
    // Remove menu scrolling
    menu.classList.remove("fa-times"); //Menu hamburguesa
    navbar.classList.remove("nav-toggle");
})