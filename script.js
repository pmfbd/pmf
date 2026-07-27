/*==================================
PMF WEBSITE SCRIPT
==================================*/

/*==================================
MOBILE MENU
==================================*/

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

    menuToggle.innerHTML =
        nav.classList.contains("active") ? "✕" : "☰";

});

/*==================================
CLOSE MENU AFTER CLICK
==================================*/

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuToggle.innerHTML = "☰";

    });

});

/*==================================
HEADER SHADOW
==================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(11,110,61,.98)";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.18)";

    } else {

        header.style.background = "rgba(11,110,61,.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";

    }

});

/*==================================
BACK TO TOP BUTTON
==================================*/

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
/*==================================
SCROLL ANIMATION
==================================*/

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.15
});

document.querySelectorAll(
".card,.activity-card,.gallery-item,.report-card,.join-card,.stat-card"
).forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(60px)";

el.style.transition=".8s";

observer.observe(el);

});

/*==================================
COUNTER
==================================*/

const counters=document.querySelectorAll(".counter");

const speed=80;

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const counter=entry.target;

const target=parseInt(counter.innerText);

let count=0;

const update=()=>{

const inc=Math.ceil(target/speed);

count+=inc;

if(count>=target){

counter.innerText=target+"+";

}else{

counter.innerText=count;

requestAnimationFrame(update);

}

};

update();

counterObserver.unobserve(counter);

});

},{threshold:.5});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/*==================================
IMAGE HOVER EFFECT
==================================*/

document.querySelectorAll(".gallery-item img").forEach(img=>{

img.setAttribute("loading","lazy");

});

/*==================================
SMOOTH SECTION FADE
==================================*/

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

document.body.style.opacity="0";

document.body.style.transition="opacity .5s";

/*==================================
ACTIVE NAV LINK
==================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});
/*==================================
CONTACT FORM
==================================*/

const form=document.querySelector(".contact-form form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const button=form.querySelector("button");

button.innerHTML="Sending...";

button.disabled=true;

setTimeout(()=>{

alert("✅ Thank you for contacting PMF. We received your message.");

form.reset();

button.innerHTML="Send Message";

button.disabled=false;

},1200);

});

}

/*==================================
GALLERY LIGHTBOX
==================================*/

const galleryImages=document.querySelectorAll(".gallery-item img");

const lightbox=document.createElement("div");

lightbox.id="lightbox";

lightbox.innerHTML="<img>";

document.body.appendChild(lightbox);

galleryImages.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.classList.add("show");

lightbox.querySelector("img").src=image.src;

});

});

lightbox.addEventListener("click",()=>{

lightbox.classList.remove("show");

});

/*==================================
LIGHTBOX STYLE
==================================*/

const style=document.createElement("style");

style.innerHTML=`

#lightbox{

position:fixed;

left:0;

top:0;

width:100%;

height:100%;

background:rgba(0,0,0,.9);

display:flex;

justify-content:center;

align-items:center;

visibility:hidden;

opacity:0;

transition:.35s;

z-index:999999;

cursor:pointer;

}

#lightbox.show{

visibility:visible;

opacity:1;

}

#lightbox img{

max-width:90%;

max-height:90%;

border-radius:12px;

box-shadow:0 10px 40px rgba(0,0,0,.4);

}

nav a.active{

color:#FFD54F;

}

`;

document.head.appendChild(style);

/*==================================
YEAR
==================================*/

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}

/*==================================
FINISHED
==================================*/

console.log("PMF Website Loaded Successfully");
