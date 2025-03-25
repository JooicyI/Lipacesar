let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.opacity = 0;
    }
    slideIndex++;
    if(slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    fadeIn(slides[slideIndex - 1]);
    setTimeout(showSlides, 5000);
}

function fadeIn(element){
    let opacity = 0;
    let interval = setInterval(function(){
        if(opacity < 1){
            opacity += 0.1;
            element.style.opacity = opacity;
        }else{
            clearInterval(interval);
        }
    },100);
}

document.addEventListener("DOMContentLoaded", showSlides);