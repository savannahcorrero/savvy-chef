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


    // SURPRISE CARD
    const postsData = [
        {
            title: "French Crepes",
            thumbnail:
                "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/breakfast/crepes/crepe.jpg",
            difficulty:
                "Effortless",
            link: "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/breakfast/crepes/crepes.html",
        },
        {
            title: "Croissants",
            thumbnail:
            "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/breakfast/croissant/croissant.jpg",
            difficulty:
            "Complex",
            link: "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/breakfast/croissant/croissant.html",
        },
        {
            title: "Peanut Butter Toast",
            thumbnail:
            "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/breakfast/pb-toast/pb-toast.jpg",
            difficulty:
            "Effortless",
            link: "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/breakfast/pb-toast/pb-toast.html",
        },
        {
            title: "Pumpkin Pancakes",
            thumbnail:
            "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/breakfast/pancake/pumpkin-pancake.jpg",
            difficulty:
            "Effortless",
            link: "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/breakfast/pancake/pancake.html",
        },
        {
            title: "Waffles + Vanilla Cream",
            thumbnail:
            "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/breakfast/waffle/waffle.jpg",
            difficulty:
            "Moderate",
            link: "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/breakfast/waffle/waffle.html",
        },
        {
            title: "Stuffed Bell Peppers",
            thumbnail:
            "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/lunch/bell-pep/bell-pep.jpg",
            difficulty:
            "Moderate",
            link: "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/lunch/bell-pep/bell-pep.html",
        },
        {
            title: "Caprese Salad",
            thumbnail:
            "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/lunch/caprese/caprese.jpg",
            difficulty:
            "Effortless",
            link: "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/lunch/caprese/caprese.html",
        },
        {
            title: "Chicken Fried Rice",
            thumbnail:
            "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/lunch/chx-rice/chx-rice.jpg",
            difficulty:
            "Effortless",
            link: "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/lunch/chx-rice/chx-rice.html",
        },
        {
            title: "Sesame Chicken + Green Beans",
            thumbnail:
            "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/lunch/chx-gb/chx-gb.jpg",
            difficulty:
            "Moderate",
            link: "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/lunch/chx-gb/chx-gb.html",
        },
        {
            title: "Quinoa Bowls",
            thumbnail:
            "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/lunch/quinoa-bowl/quinoa-bowl.jpg",
            difficulty:
            "Effortless",
            link: "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/lunch/quinoa-bowl/quinoa-bowl.html",
        },
        {
            title: "Spaghetti Bolognese",
            thumbnail:
            "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/dinner/bolognese/bol.jpg",
            difficulty:
            "Complex",
            link: "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/dinner/bolognese/bol.html",
        },
        {
            title: "Sesame Chicken",
            thumbnail:
            "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/dinner/ses-chx/ses-chx.jpg",
            difficulty:
            "Moderate",
            link: "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/dinner/ses-chx/ses-chx.html",
        },
        {
            title: "Spinach Pizza",
            thumbnail:
            "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/dinner/spn-pza/spn-pza.jpg",
            difficulty:
            "Moderate",
            link: "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/dinner/spn-pza/spn-pza.html",
        },
        {
            title: "Steak Fries",
            thumbnail:
            "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/dinner/stk-fry/stk-fry.jpg",
            difficulty:
            "Effortless",
            link: "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/dinner/stk-fry/stk-fry.html",
        },
        {
            title: "Steak Tacos",
            thumbnail:
            "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/dinner/stk-taco/stk-tacos.jpg",
            difficulty:
            "Effortless",
            link: "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/dinner/stk-taco/stk-taco.html",
        },
        {
            title: "Chia Pudding",
            thumbnail:
            "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/desert/chia/chia-pudding.jpg",
            difficulty:
            "Effortless",
            link: "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/desert/chia/chia.html",
        },
        {
            title: "Muddy Walnut Cake",
            thumbnail:
            "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/desert/choc-wal/choc-walnut.jpg",
            difficulty:
            "Complex",
            link: "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/desert/choc-wal/choc-wal.html",
        },
        {
            title: "Coconut Snowballs",
            thumbnail:
            "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/desert/coco-snow/coconut-snow.jpg",
            difficulty:
            "Moderate",
            link: "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/desert/coco-snow/coco-snow.html",
        },
        {
            title: "Raspberry Muffins",
            thumbnail:
            "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/desert/rasp-muf/rasp-muf.jpg",
            difficulty:
            "Effortless",
            link: "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/desert/rasp-muf/rasp-muf.html",
        },
        {
            title: "Smoothie Bowls",
            thumbnail:
            "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/desert/smoothie-bowl/smoothie-bowl.jpg",
            difficulty:
            "Effortless",
            link: "https://savvy-chef.savannahcorrero.com/pages/recipes/recipe-pages/meal/desert/smoothie-bowl/smoothie-bowl.html",
        },
    ];

    const randomPost = document.querySelector(".random-rcp");
    const imgElement = randomPost.querySelector("img");
    const titleElement = randomPost.querySelector(".title h3");
    const difficultyElement = randomPost.querySelector(".difficulty p");
    const tryAgain = document.querySelector(".try-again");

    const getRandomIndex = (max) => {
        return Math.floor(Math.random() * max);
    };

    let postIndex = getRandomIndex(postsData.length);

    window.addEventListener("load", () => {
        postsData.forEach((post) => {
            preloadImage(post.thumbnail);
        });
    });

    const preloadImage = (url) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(url);
            img.onerror = () => reject(url);
            img.src = url;
        });
    };

    const displayRandomPost = async () => {
        randomPost.style.display = "none";
        
        try {
            await preloadImage(postsData[postIndex].thumbnail);
            imgElement.style.opacity = 0.6; 
            imgElement.src = postsData[postIndex].thumbnail;
            titleElement.textContent = postsData[postIndex].title;
            difficultyElement.textContent = postsData[postIndex].difficulty;
    
            setTimeout(() => {
                imgElement.style.opacity = 0.6;
            }, 10);
    
            randomPost.style.display = "block";
        } catch (error) {
            console.error("Error preloading image:", error);
        }
    };

    displayRandomPost();

    tryAgain.addEventListener("click", () => {
        let newIndex = postIndex;

        while (newIndex === postIndex) {
            newIndex = getRandomIndex(postsData.length);
        }

        postIndex = newIndex;
        displayRandomPost();
    });
});