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
const menuCategory = document.querySelector('[data-slide="menu-category"]');
const menuList = document.querySelector('[data-slide="slide-list"]');
const nextSlideButton = document.querySelector(
  '[data-slide="nav-next-button"]'
);
const previousSlideButton = document.querySelector(
  '[data-slide="nav-previous-button"]'
);
const slideMenuItems = document.querySelectorAll('[data-slide="item"]');

const statesMenuCategory = {
  currentSlideIndex: 0,
  savePosition: 0,
};

nextSlideButton.addEventListener("click", nextSlide);
previousSlideButton.addEventListener("click", previousSlide);

function nextSlide() {
  setVisibleSlide(statesMenuCategory.currentSlideIndex + 1);
}
function previousSlide() {
  setVisibleSlide(statesMenuCategory.currentSlideIndex - 1);
}
function setVisibleSlide(index) {
  const slideItem = slideMenuItems[index];
  const slideWidth = slideItem.clientWidth;
  const position = index * slideWidth;
  statesMenuCategory.currentSlideIndex = index;
  translateSlide(-position);
}
function translateSlide(position) {
  menuList.style.transform = `translateX(${position}px)`;
  console.log(menuList.transform);
  statesMenuCategory.savePosition = position;
}
