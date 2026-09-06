const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});


const joinBtn = document.getElementById("joinBtn");

joinBtn.addEventListener("click", function () {
  alert("Welcome to GaminX! Community features are coming soon.");
});


const exploreButtons = document.querySelectorAll(".small-btn");

exploreButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    alert("More information about this game is coming soon!");
  });
});