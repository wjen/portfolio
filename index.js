const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");
console.log(navLinks);
// add toggle nav-open class to hamburger
navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

// remove nav-open class
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});
