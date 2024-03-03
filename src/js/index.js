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

//menu categoria

const listCategories = document.querySelector(
  ".categories-menu__list-categories"
);
const arrows = document.querySelectorAll(".control-carrosel");

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    const getClassArrow = arrow.firstElementChild.classList[1];
    const displacement =
      getClassArrow === "fa-chevron-left"
        ? (listCategories.scrollLeft -= 320)
        : (listCategories.scrollLeft += 320);

    return displacement;
  });
});

////

// let contador = 1;

// function carrosel() {
//   let imagem = document.querySelector(`#carrousel__img-${contador}`);

//   if (imagem.classList.length == 2) {
//     imagem.classList.remove("active");
//   } else {
//     console.log("invisivel");
//   }

//   if (contador == 4) {
//     contador = 0;
//   }
//   contador++;
//   // console.log(imagem.classList);
// }

let box = document.querySelector(".appleTV__carrousel");
let imagens = document.querySelectorAll(".carrousel__img");

let contador = 1;
