document.addEventListener('DOMContentLoaded', function() {

    // SEARCH BAR
    let searchContent = "";
    const box = document.querySelector(".auto-box");
    const search = document.querySelector(".search-bar");
    let searchTimeout;
    
    // FETCH JSON DATA
    fetch("https://savvy-chef.savannahcorrero.com/search.json")
        .then(async (response) => {
            searchContent = await response.json();
        })
        .then(() => {

            // DISPLAY SEARCH RESULTS
            const results = (searchResults) => {
                box.innerHTML = "";
                if (searchResults.length === 0) {
                    box.innerHTML = "<p class='no-result'>No Results Found</p>";
                    return
                }
                searchResults.forEach((result) => {
                    const { name, url } = result;
                    const searchResult = document.createElement("li");
                    searchResult.className = "search-result";
                    searchResult.innerHTML = `<a href="${url}" target="_blank">${name}</a>`;
                    box.appendChild(searchResult);
                });
            };

            const handleResults = (query) => {
                const searchQuery = query.trim().toLowerCase();

                if (searchQuery.length <= 1) {
                    return;
                }

                const searchResults = Object.keys(searchContent)
                    .flatMap((category) => searchContent[category])
                    .filter((recipe) =>
                        recipe.name.toLowerCase().includes(searchQuery)
                    );

                results(searchResults);

                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    box.innerHTML = "";
                }, 5000);
            };

            let debounceTimer;
        
            const debounce = (callback, time) => {
                window.clearTimeout(debounceTimer);
                debounceTimer = window.setTimeout(callback, time);
            };
        
            search.addEventListener("input", (event) => {
                const query = event.target.value;
                debounce(() => handleResults(query), 500);
            });

        
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
    });


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