// ===============================
// KAHANI WEBSITE
// script.js
// ===============================

// Smooth scrolling for navigation

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// Navbar shadow while scrolling

window.addEventListener("scroll",()=>{

    const navbar=document.querySelector("header");

    if(window.scrollY>50){

        navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.3)";

    }

    else{

        navbar.style.boxShadow="none";

    }

});

// Service card hover animation

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px) scale(1)";

    });

});

console.log("Kahani Website Loaded Successfully");
