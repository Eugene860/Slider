window.onload = function (){

let images = [
{
	img: ''
},
{	
	img: ''
},
{
	img: ''
}
];

let img = document.querySelector(".rightblock-step2");
let prev = document.querySelector(".vectorleft");
let next = document.querySelector(".vectorright");
let dotleft = document.querySelector(".dot1");
let dotcenter = document.querySelector(".dot2");
let dotright = document.querySelector(".dot3");
let jsAdmiral = document.querySelector("#js_admiral");
let jsThieves = document.querySelector("#js_thieves");
let jsPatriotic = document.querySelector("#js_patriotic");

let setImage = (index) => {
  img.style.backgroundImage = `url(${images[index].img})`
}

let currentIndex = 0;

function initArrows() {
prev.addEventListener("click", () => {
	if (currentIndex > 0) {
	setImage(currentIndex - 1);
  currentIndex -= 1;} else {
  	setImage(2);
  	currentIndex = 2;
  }
});
next.addEventListener("click", () => {
	if (currentIndex < 2) {
  setImage(currentIndex + 1);
  currentIndex += 1;} else {
  	setImage(0);
  	currentIndex = 0;}
})}
initArrows();

function initDots () {
dotleft.addEventListener("click", () => {
	setImage(0)
})
dotcenter.addEventListener("click", () => {
	setImage(1)
})
dotright.addEventListener("click", () => {
	setImage(2)
})
}
initDots()

function initTitles () {
jsAdmiral.addEventListener("click", () => {
	setImage(0)
})
jsThieves.addEventListener("click", () => {
	setImage(1)
})
jsPatriotic.addEventListener("click", () => {
	setImage(2)
})}
initTitles()

/*function according () {
	if (index = 1) {
		jsAdmiral.classList.remove("is-active2");
		jsThieves.classList.add("is-active2");
		dotleft.classList.remove("activedot");
		dotcenter.classList.add("activedot");
		} else if (index = 2) {
		jsThieves.classList.remove("is-active2");
		jsPatriotic.classList.add("is-active2");
		dotcenter.classList.remove("activedot");
		dotright.classList.add("activedot");
	} 
}
according()*/
}