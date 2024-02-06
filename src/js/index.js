const menuHamburguer = document.querySelector("#navMenu");
let menu = document.querySelector(".menu");
const menuMobile = document.querySelector(".menu__navigation-mobile");

menuHamburguer.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuHamburguer.classList.toggle("active");
  menuMobile.classList.toggle("active");
});

const submenu = document.querySelectorAll(".activeSubMenu");
const teste = document.querySelectorAll(".fa-chevron-left");
const ulSubMenuActived = document.querySelectorAll(".link__submenu");

for (let i = 0; i < submenu.length; i++) {
  const subMenuAtual = submenu[i];
  subMenuAtual.addEventListener("click", () => {
    menu.classList.add("active");
    if (!ulSubMenuActived[i].classList.contains("active")) {
      const submenuAtivo = document.querySelector(".link__submenu.active");
      console.log(submenuAtivo);
      if (submenuAtivo) {
        submenuAtivo.classList.remove("active");
      }
      ulSubMenuActived[i].classList.add("active");
    }
  });
}

function closeSubmenu(e) {
  menu.classList.remove("active");
  const close = e.target.parentElement;
  close.classList.remove("active");
}
