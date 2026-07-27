// ===========================
// MOBILE MENU
// ===========================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

});

// ===========================
// CLOSE MENU AFTER CLICK
// ===========================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});
// ===========================
// STICKY HEADER
// ===========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.padding = "12px 8%";
        header.style.background = "#0B6E3D";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.20)";

    } else {

        header.style.padding = "15px 8%";
        header.style.background = "#0B6E3D";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";

    }

});

// ===========================
// BACK TO TOP BUTTON
// ===========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
// ===========================
// STATISTICS COUNTER
// ===========================

const counters = document.querySelectorAll(".stat-card h3");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const text = counter.innerText;

        const target = parseInt(text.replace(/\D/g, "")) || 0;

        const suffix = text.replace(/[0-9]/g, "");

        let current = 0;

        const increment = Math.max(1, Math.ceil(target / 100));

        const updateCounter = () => {

            current += increment;

            if (current >= target) {

                counter.innerText = target + suffix;

            } else {

                counter.innerText = current + suffix;

                requestAnimationFrame(updateCounter);

            }

        };

        updateCounter();

        counterObserver.unobserve(counter);

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

// ===========================
// SCROLL FADE ANIMATION
// ===========================

const animatedItems = document.querySelectorAll(
".card, .stat-card, .activity-card, .gallery-item, .report-card, .join-card, .contact-info, .contact-form"
);

animatedItems.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all .8s ease";

});

const animationObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.15

});

animatedItems.forEach(item => {

    animationObserver.observe(item);

});
// ===========================
// CONTACT FORM
// ===========================

const contactForm = document.querySelector(".contact-form form");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

const name=this.querySelector('input[type="text"]').value.trim();

const email=this.querySelector('input[type="email"]').value.trim();

const message=this.querySelector("textarea").value.trim();

if(name==="" || email==="" || message===""){

alert("Please fill in all fields.");

return;

}

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){

alert("Please enter a valid email address.");

return;

}

alert("Thank you! Your message has been received.");

this.reset();

});

}

// ===========================
// IMAGE LAZY LOADING
// ===========================

document.querySelectorAll("img").forEach(img=>{

img.loading="lazy";

});

// ===========================
// SMOOTH SCROLL
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ===========================
// CONSOLE MESSAGE
// ===========================

console.log("===================================");

console.log("Probal Manobsheba Foundation (PMF)");

console.log("Designed & Developed by");

console.log("Bayjid Hossain Sagor");

console.log("===================================");

// ===========================
// FUTURE FEATURES
// ===========================

// Member Login System
// Online Payment Gateway
// Admin Dashboard
// Monthly Report API
// Certificate Verification
// Volunteer Management
// Donation Tracking
// Notification System
// Event Registration
// Member Profile

