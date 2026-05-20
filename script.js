// script.js

// MENU MOBILE

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// HEADER SCROLL

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){
    header.classList.add("scrolled");
  } else{
    header.classList.remove("scrolled");
  }

});

// REVEAL ANIMATION

const reveals = document.querySelectorAll(".reveal");

function revealElements(){

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){
      element.classList.add("active");
    }

  });

}
const progressBar = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {

  const scrollTop = window.scrollY;

  const docHeight =
    document.body.scrollHeight - window.innerHeight;

  const progress = (scrollTop / docHeight) * 100;

  progressBar.style.width = progress + "%";

});
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

  button.addEventListener("mousemove", (e) => {

    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform =
      `translate(${x * 0.08}px, ${y * 0.08}px)`;

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform = "translate(0,0)";

  });

});
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

  const offset = window.scrollY;

  hero.style.backgroundPositionY =
    offset * 0.5 + "px";

});
const light = document.querySelector(".light");

document.addEventListener("mousemove", (e) => {

  light.style.left = e.clientX + "px";
  light.style.top = e.clientY + "px";

});

window.addEventListener("scroll", revealElements);

revealElements();