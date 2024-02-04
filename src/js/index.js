const menuHamburguer = document.querySelector("#navMenu");
const menu = document.querySelector(".menu");
const menuMobile = document.querySelector(".menu__navigation-mobile");

menuHamburguer.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuHamburguer.classList.toggle("active");
  menuMobile.classList.toggle("active");
});

const submenu = document.querySelectorAll(".activeSubMenu");

for (const menu of submenu) {
  menu.addEventListener("click", (e) => {
    e.target.parentElement.children[1].classList.add("active");
  });
}

function closeSubmenu(e) {
  e.target.parentElement.classList.remove("active");
}
