let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    // Remove active class from all slides
    slides.forEach(slide => slide.classList.remove('active'));

    // Move to next slide
    slideIndex = (slideIndex + 1) % slides.length;

    // Add active class to current slide
    slides[slideIndex].classList.add('active');

    // Continue slideshow
    setTimeout(showSlides, 5000);
}

// Start slideshow
document.addEventListener('DOMContentLoaded', () => {
    showSlides();

    // Add fade-in animation to elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in-up class
    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const btnResoluciones = document.getElementById('botonResoluciones');
const btnCirculares = document.getElementById('botonCirculares');
const tablaResoluciones = document.getElementById('tablaResoluciones');
const tablaCirculares = document.getElementById('tablaCirculares');

btnResoluciones.addEventListener('click', () => {
    const visible = tablaResoluciones.classList.contains('activa');
    ocultarTodo();
    if (!visible) {
        tablaResoluciones.classList.add('activa');
        btnResoluciones.classList.add('activo');
    }
});

btnCirculares.addEventListener('click', () => {
    const visible = tablaCirculares.classList.contains('activa');
    ocultarTodo();
    if (!visible) {
        tablaCirculares.classList.add('activa');
        btnCirculares.classList.add('activo');
    }
});

function ocultarTodo() {
    tablaResoluciones.classList.remove('activa');
    tablaCirculares.classList.remove('activa');
    btnResoluciones.classList.remove('activo');
    btnCirculares.classList.remove('activo');
}


// let slideIndex = 0;
// const slides = document.getElementsByClassName("slide");

// function showSlides() {
//     for(let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//         slides[i].style.opacity = 0;
//     }
//     slideIndex++;
//     if(slideIndex > slides.length) {slideIndex = 1}
//     slides[slideIndex-1].style.display = "block";
//     fadeIn(slides[slideIndex - 1]);
//     setTimeout(showSlides, 5000);
// }

// function fadeIn(element){
//     let opacity = 0;
//     let interval = setInterval(function(){
//         if(opacity < 1){
//             opacity += 0.1;
//             element.style.opacity = opacity;
//         }else{
//             clearInterval(interval);
//         }
//     },100);
// }

// document.addEventListener("DOMContentLoaded", showSlides);