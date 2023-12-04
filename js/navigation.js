window.addEventListener("scroll", function () {
  const header = document.querySelector(".header-top");
  window.scrollY > 0
    ? header.classList.add("scrolled")
    : header.classList.remove("scrolled");
});
