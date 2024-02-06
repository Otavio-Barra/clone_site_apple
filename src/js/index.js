const menuHamburguer = document.querySelector("#navMenu");
const header = document.querySelector(".menu");
const menuMobile = document.querySelector(".menu__navigation");
const submenu = document.querySelectorAll(".activeSubMenu");
const subMenuActived = document.querySelectorAll(".link__submenu");

menuHamburguer.addEventListener("click", () => {
  header.classList.toggle("active");
  menuHamburguer.classList.toggle("active");
  menuMobile.classList.toggle("active");
});

for (let i = 0; i < submenu.length; i++) {
  const currentSubMenu = submenu[i];
  currentSubMenu.addEventListener("click", () => {
    header.classList.add("active");
    if (!subMenuActived[i].classList.contains("active")) {
      const submenuEnabled = document.querySelector(".link__submenu.active");
      console.log(submenuEnabled);
      if (submenuEnabled) {
        submenuEnabled.classList.remove("active");
      }
      subMenuActived[i].classList.add("active");
    }
  });
}

function closeSubmenu(e) {
  const close = e.target.parentElement;
  header.classList.remove("active");
  close.classList.remove("active");
}
