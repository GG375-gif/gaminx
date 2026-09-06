// Mobile Menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close mobile menu when clicking a link

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// Join Community Button

const joinBtn = document.getElementById("joinBtn");

joinBtn.addEventListener("click", () => {
    alert("Welcome to GaminX! Community features are coming soon.");
});


// Newsletter Subscription

const subscribeBtn = document.getElementById("subscribeBtn");
const emailInput = document.getElementById("emailInput");
const message = document.getElementById("message");

subscribeBtn.addEventListener("click", () => {

    const email = emailInput.value.trim();

    if (email === "") {
        message.textContent = "Please enter your email.";
        return;
    }

    if (!email.includes("@")) {
        message.textContent = "Please enter a valid email.";
        return;
    }

    message.textContent = "Thanks for subscribing to GaminX! 🎮";

    emailInput.value = "";
});


// Explore Buttons

const exploreButtons = document.querySelectorAll(".small-btn");

exploreButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("More game content coming soon to GaminX!");
    });
});