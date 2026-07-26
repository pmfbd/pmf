// PMF Official Website
// Version 1.0

window.addEventListener("load", () => {

    // Hero Animation
    const hero = document.querySelector(".hero-content");

    hero.style.opacity = "0";
    hero.style.transform = "translateY(60px)";

    setTimeout(() => {
        hero.style.transition = "1s";
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";
    }, 300);

});

// Smooth Scroll
document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e){

        const target = this.getAttribute("href");

        if(target.startsWith("#")){

            e.preventDefault();

            document.querySelector(target).scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

// Button Hover Effect
const btn = document.querySelector(".btn");

btn.addEventListener("mouseenter",()=>{

    btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

    btn.style.transform="scale(1)";

});

console.log("PMF Website Loaded Successfully");
