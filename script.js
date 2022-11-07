const MenuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector(".menu-admin");
const tampilan = document.querySelector(".tampilan");
MenuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
  tampilan.classList.toggle("slide");
});
