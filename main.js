let burger = document.querySelector(".header__btn-open");
let closed = document.querySelector(".header__btn-close");
let nav = document.querySelector(".header__nav");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  nav.classList.toggle("nav--visible");
});

closed.addEventListener("click", function () {
  closed.classList.toggle("burger--active");
  nav.classList.toggle("nav--visible");
});
