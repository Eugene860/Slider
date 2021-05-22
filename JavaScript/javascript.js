window.onload = function (){

let images = [
{
	img: 'https://github.com/Eugene860/Slider/blob/master/Images/image%202.1.png?raw=true'
},
{	
	img: 'https://github.com/Eugene860/Slider/blob/master/Images/image%2022.png?raw=true'
},
{
	img: 'https://github.com/Eugene860/Slider/blob/master/Images/image%203.png?raw=true'
}
];

let img = document.querySelector(".rightblock-step2");
let prev = document.querySelector(".vectorleft");
let next = document.querySelector(".vectorright");
let dots = document.querySelectorAll(".dots");
let cities = document.querySelectorAll(".s2m__item");

let currentIndex = 0;

setImage(currentIndex);



prev.addEventListener('click', () => {
    if (currentIndex === 0) {
        setImage(images.length - 1)
    } else {
        setImage(currentIndex - 1)
    }
});
next.addEventListener('click', () => {
    if (currentIndex === (images.length - 1)) {
        setImage(0)
    } else {
        setImage(currentIndex + 1)
    }
});


dots.forEach ((item, index) => item.addEventListener('click', (e) => {
    e.preventDefault();
    setImage(index);
})); 

cities.forEach((item, index) => item.addEventListener('click', (e) => {
    e.preventDefault();
    setImage(index);
}));

function setImage(index) {
	img.style.backgroundImage = `url(${images[index].img})`
    
    dots.forEach(item => {
        item.classList.remove('activedot')
    });
    dots[index].classList.add('activedot');

    cities.forEach(item => {
        item.classList.remove('is-active2')
    });
    cities[index].classList.add('is-active2');
    currentIndex = index;
}
}