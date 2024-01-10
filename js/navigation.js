window.addEventListener("scroll", function () {
  const header = document.querySelector(".header-top");
  window.scrollY > 0 ? header.classList.add("scrolled") : header.classList.remove("scrolled");
});

const hamburger = document.querySelector(".mobile-btn");
const mobNavi = document.querySelector(".mob-wrapper");
const closeMobNavi = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");

const removeActive = function () {
  mobNavi.classList.remove("active");
  overlay.classList.remove("active");
};
hamburger.addEventListener("click", function () {
  mobNavi.classList.add("active");
  overlay.classList.add("active");
});
closeMobNavi.addEventListener("click", removeActive);
overlay.addEventListener("click", removeActive);

const allsubMenus = mobNavi.querySelectorAll(".sub-menu");

allsubMenus.forEach(function (el, i) {
  const elHeight = el.offsetHeight;
  el.style.height = "0px";

  el.previousElementSibling.addEventListener("click", function (e) {
    e.preventDefault();
    const clickedElHeight = el.offsetHeight;

    if (clickedElHeight === 0) {
      el.style.height = `${elHeight}px`;
    } else {
      el.style.height = `0px`;
    }
  });
});
