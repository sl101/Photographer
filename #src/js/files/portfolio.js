const buttonOpen = document.querySelector('.portfolio__button--open');
const buttonClose = document.querySelector('.portfolio__button--close');
const porfolioContent = document.querySelector('.portfolio__content');

buttonOpen.addEventListener('click', function (event) {
// console.log("click");
buttonOpen.style.opacity = "0";
buttonOpen.style.visibility = "hidden";
buttonClose.style.opacity = "1";
buttonClose.style.visibility = "visible";
porfolioContent.classList.add('active');
});

buttonClose.addEventListener('click', function (event) {
// console.log("click");
buttonOpen.style.opacity = "1";
buttonOpen.style.visibility = "visible";
buttonClose.style.opacity = "0";
buttonClose.style.visibility = "hidden";
porfolioContent.classList.remove('active');
});