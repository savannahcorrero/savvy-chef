document.addEventListener('DOMContentLoaded', function() {

    const postsData = [
        {
            title: "French Crepes",
            thumbnail:
                "https://images.pexels.com/photos/6811161/pexels-photo-6811161.jpeg",
            difficulty:
                "Effortless",
            link: "#",
        },
        {
            title: "Croissants",
            thumbnail:
            "https://images.pexels.com/photos/3850431/pexels-photo-3850431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            difficulty:
            "Complex",
            link: "#",
        },
        {
            title: "Peanut Butter Toast",
            thumbnail:
            "https://images.pexels.com/photos/13689949/pexels-photo-13689949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            difficulty:
            "Effortless",
            link: "#",
        },
        {
            title: "Pumpkin Pancakes",
            thumbnail:
            "https://images.pexels.com/photos/5377575/pexels-photo-5377575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            difficulty:
            "Effortless",
            link: "#",
        },
        {
            title: "Waffles + Vanilla Cream",
            thumbnail:
            "https://images.pexels.com/photos/221063/pexels-photo-221063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            difficulty:
            "Moderate",
            link: "#",
        },
        {
            title: "Stuffed Bell Peppers",
            thumbnail:
            "https://images.pexels.com/photos/1438540/pexels-photo-1438540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            difficulty:
            "Moderate",
            link: "#",
        },
        {
            title: "Caprese Salad",
            thumbnail:
            "https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            difficulty:
            "Effortless",
            link: "#",
        },
        {
            title: "Chicken Fried Rice",
            thumbnail:
            "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            difficulty:
            "Effortless",
            link: "#",
        },
        {
            title: "Sesame Chicken + Green Beans",
            thumbnail:
            "https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            difficulty:
            "Moderate",
            link: "#",
        },
        {
            title: "Quinoa Bowls",
            thumbnail:
            "https://images.pexels.com/photos/248509/pexels-photo-248509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            difficulty:
            "Effortless",
            link: "#",
        },
        {
            title: "Spaghetti Bolognese",
            thumbnail:
            "https://images.pexels.com/photos/4349774/pexels-photo-4349774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            difficulty:
            "Complex",
            link: "#",
        },
        {
            title: "Sesame Chicken",
            thumbnail:
            "https://images.pexels.com/photos/3386854/pexels-photo-3386854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            difficulty:
            "Moderate",
            link: "#",
        },
        {
            title: "Spinach Pizza",
            thumbnail:
            "https://images.pexels.com/photos/5902959/pexels-photo-5902959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            difficulty:
            "Moderate",
            link: "#",
        },
        {
            title: "Steak Fries",
            thumbnail:
            "https://images.pexels.com/photos/2741461/pexels-photo-2741461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            difficulty:
            "Effortless",
            link: "#",
        },
        {
            title: "Steak Tacos",
            thumbnail:
            "https://images.pexels.com/photos/7613561/pexels-photo-7613561.jpeg",
            difficulty:
            "Effortless",
            link: "#",
        },
        {
            title: "Chia Pudding",
            thumbnail:
            "https://images.pexels.com/photos/5645173/pexels-photo-5645173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            difficulty:
            "Effortless",
            link: "#",
        },
        {
            title: "Muddy Walnut Cake",
            thumbnail:
            "https://images.pexels.com/photos/8616836/pexels-photo-8616836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            difficulty:
            "Complex",
            link: "#",
        },
        {
            title: "Coconut Snowballs",
            thumbnail:
            "https://images.pexels.com/photos/3525754/pexels-photo-3525754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            difficulty:
            "Moderate",
            link: "#",
        },
        {
            title: "Raspberry Muffins",
            thumbnail:
            "https://images.pexels.com/photos/4051605/pexels-photo-4051605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            difficulty:
            "Effortless",
            link: "#",
        },
        {
            title: "Smoothie Bowls",
            thumbnail:
            "https://images.pexels.com/photos/3872248/pexels-photo-3872248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            difficulty:
            "Effortless",
            link: "#",
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