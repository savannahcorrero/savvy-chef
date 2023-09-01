document.addEventListener('DOMContentLoaded', function() {

    // SEARCH BAR
    let searchContent = [];
    const box = document.querySelector(".auto-box");

    // FETCH JSON DATA
    fetch("https://savvy-chef.savannahcorrero.com/search.json")
        .then(async (response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            searchContent = data;
            searchContent.forEach((searchResult) => results(searchResult));
        })
        .catch((error) => {
            console.error("Fetch error:", error);
        });


    // DISPLAY SEARCH RESULTS
    const results = (searchContent) => {
        const { name, url } = searchContent;
        const searchResult = document.createElement("li");
        searchResult.className = "search-result";
        searchResult.innerHTML = `<a href="${url}" target="_blank">${name}</a>`;
        box.append(searchResult);

        if (searchResult.length == 0) {
            searchResult.innerHTML = "No results found";
        }
    };

    const handleResults = (query) => {
        const searchQuery = query.trim().toLowerCase();

        if (searchQuery.length <= 1) {
            return;
        }

        let resultFilter = searchContent.filter(
            (searchResult) =>
                searchResult.categories.some((category) =>
                    category.toLowerCase().includes(searchQuery)
                ) || searchResult.title.toLowerCase().includes(query)
        );

        box.innerHTML = "";
        resultFilter.forEach((searchResult) => results(searchResult));
    };

    let resultFilter = [...searchContent].filter(
        (searchResult) =>
        searchResult.categories.some((category) => category.toLowerCase().includes(searchQuery)) ||
        searchResult.title.toLowerCase().includes(query)
    );

    box.innerHTML = "";
    resultFilter.map((searchResult) => results(searchResult));


    // RESET SEARCH RESULTS
    const reset = () => {
        search.innerHTML = ""
        searchResult.innerHTML = "";
        searchResult.map((searchResult) => results(searchResult));
    };
    
    const search = document.querySelector(".search-bar");
    let debounceTimer;
    
    const debounce = (callback, time) => {
        window.clearTimeout(debounceTimer);
        debounceTimer = window.setTimeout(callback, time);
    };

    search.addEventListener(
        "input",
        (event) => { 
            const query = event.target.value;
            debounce(() => handleResults(query), 500);
        },
        false
    );


    
    // PHOTO CAROUSEL
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
        slides[slideIndex - 1].classList.add("fade");
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