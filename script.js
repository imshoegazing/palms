const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav .container a");
const open = document.getElementById("sticky-btn");
const close = document.getElementById("close-btn");
const contact = document.getElementById("a-contact");
const home = document.getElementById("a-home");
const services = document.getElementById("a-services");
const modal = document.getElementById("modal");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("current");
    if (link.getAttribute("href") === `#${currentSection.id}`) {
      link.classList.add("current");
    }
  });

  contact.addEventListener("click", () => {
    if (modal) {
      modal.classList.add("show-modal");
      navLinks.forEach((link) => {
        link.classList.remove("current");
      });
      contact.classList.add("current");
    }
  });

  if (window.pageYOffset === 0) {
    home.classList.add("current");
  }

  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    navLinks.forEach((link) => {
      link.classList.remove("current");
    });
    services.classList.add("current");
  }
});

open.addEventListener("click", () => {
  modal.classList.add("show-modal");
  navLinks.forEach((link) => {
    link.classList.remove("current");
  });
  contact.classList.add("current");
});

close.addEventListener("click", () => {
  modal.classList.remove("show-modal");
  contact.classList.remove("current");
});

window.addEventListener("click", (e) =>
  e.target == modal
    ? modal.classList.remove("show-modal") &&
      contact.classList.remove("current")
    : false
);
