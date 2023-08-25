document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 1;
    let t;
    let btns = document.querySelectorAll(".nav-btn");
    let timedelay = 3500;
    let slides = document.getElementsByClassName("slide");


    showImg(slideIndex);
    autoSlide();


    // NAV BUBBLES
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            currentSlide(i + 1);
        });
    }

    function currentSlide(n) {
        showImg(slideIndex = n);
    }

    // DISPLAY SLIDES
    function showImg(n) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        for (let i = 0; i < btns.length; i++) {
            btns[i].className = btns[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        btns[slideIndex - 1].className += " active";
    }

    // AUTOMATIC SLIDES
    function autoSlide() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        for (let i = 0; i < btns.length; i++) {
            btns[i].className = btns[i].className.replace(" active", "");
        }

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = "block";
        btns[slideIndex - 1].className += " active";
        t = setTimeout(autoSlide, timedelay);
    }

    // TIMERS
    function pauseImg() {
        clearTimeout(t)
    }

    function startImg() {
        t = setTimeout(autoSlide, timedelay);
    }
});