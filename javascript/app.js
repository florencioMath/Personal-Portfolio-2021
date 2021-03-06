const navSlide = () => {
  const burger = document.querySelector(".container__burguer");
  const nav = document.querySelector(".container__links");
  const navLinks = document.querySelectorAll(".container__links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation =
          `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
      }
    });
    burger.classList.toggle("toggle");
  });
  
  nav.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation =
          `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
      }
    });
    burger.classList.toggle("toggle");
  });
};

navSlide();
