document.querySelector(".nav__btn").addEventListener("click", showNav);

function showNav() {
  document.querySelector(".nav__links").classList.toggle("show__links");
}

// window.addEventListener("load", () =>
//   document.querySelector(".preloader").classList.add("hidePreloader")
// );
