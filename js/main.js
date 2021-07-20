const d = document;
const $burger = d.querySelector(".burger");
const $nav = d.querySelector(".nav");
/******************  Activacion menu responsive *********************/
$burger.addEventListener("click", () => {
  $nav.classList.toggle("nav-active");
});
/************  Animacion de banner *****************/
// Wrap every letter in a span
var textWrapper = document.querySelector(".ml12");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml12 .letter",
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i,
  })
  .add({
    targets: ".ml12 .letter",
    translateX: [0, -30],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i,
  });

/*******************  slider automatico**********************/
const $sliderItem = d.querySelectorAll(".aboutUs__slider__item");
const images = [
  "/img/actores.jpg",
  "/img/actores2.jpg",
  "/img/actores3.jpg",
  "/img/actores4.jpg",
];
let i = 0;
const sliderAuto = () => {
  setInterval(() => {
    console.log("hola mundooo");
    $sliderItem.removeAttribute("src", images[i]);
    i++;
    $sliderItem.setAttribute("src", images[i]);
    if (i >= images.length) {
      i = 0;
      $sliderItem.setAttribute("src", images[0]);
    }
  }, 4000);
};
// sliderAuto();
// console.log($sliderItem[0]);
const $slider = d.querySelector(".aboutUs__slider__container");
const sliderAutomatic = () => {
  setInterval(() => {
    console.log("hola mundo");
    let position = 0;
    let operacion = position * -50;
    $slider.style.transform = `translateY${operacion}%`;
    position++;
    // if (position >= $slider.length) position = 0;
  }, 2000);
};
// sliderAutomatic();
