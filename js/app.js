//Header Background Image/Text Effect
const headerBackground = document.querySelector('.header-background');
const headerText = document.getElementById('header-text');
const backgroundImagePurple = 'linear-gradient(to bottom, rgba(246, 245, 252, 0.247), rgba(117, 19, 93, 0.73)), url("../img/sbimage.jpeg")';
const backgroundImageOrange = 'linear-gradient(to bottom, rgba(246, 245, 252, 0.247), rgba(117, 19, 93, 0.055)), url("../img/sbimage.jpeg")';

headerBackground.addEventListener('mouseover', () => {
    headerBackground.style.backgroundImage = backgroundImagePurple;
    headerText.innerText = "And I'm a web developer from Santa Barbara, California."
});

headerBackground.addEventListener('mouseout', () => {
    headerBackground.style.backgroundImage = backgroundImageOrange;
    headerText.innerText = "My name is Jon";
})



