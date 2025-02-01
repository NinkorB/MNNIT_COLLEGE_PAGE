let slideIndex = 0;
showSlides();

// Automatic slideshow
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Manual navigation
function changeSlide(n) {
    slideIndex += n;
    if (slideIndex < 1) {
        slideIndex = document.getElementsByClassName("slide").length;
    } else if (slideIndex > document.getElementsByClassName("slide").length) {
        slideIndex = 1;
    }
    updateSlides();
}

// Dot navigation
function currentSlide(n) {
    slideIndex = n;
    updateSlides();
}

function updateSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}