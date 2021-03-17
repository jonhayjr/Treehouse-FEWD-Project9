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


//Invert Skills List Colors on mouse hover
const listItems = document.querySelectorAll('.skills .list-group-item');

function invertColors(element) {
    const listItem = element.target;
    const listText = listItem.innerText.toLowerCase();
    const normalClass = "list-item-" + listText;
    const invertedClass = normalClass + "-inverted";
    const currentClassList = listItem.className;
    listItem.style.transition = "all 0.3s ease-in-out";

    if (currentClassList.indexOf(invertedClass) >= 0) {
        listItem.classList.remove(invertedClass);
        listItem.classList.add(normalClass);
    } else {
        listItem.classList.remove(normalClass);
        listItem.classList.add(invertedClass);
    }
}

listItems.forEach(listItem => {
    listItem.addEventListener('mouseover', (event) => {
        invertColors(event);
    });
});

listItems.forEach(listItem => {
    listItem.addEventListener('mouseout', (event) => {
        invertColors(event);
    });
});

/*Project Skill Filter - Allows projects to be filtered by skills used*/
const skillSelect = document.querySelector('select');

function filterSkills() {
   const selectValue = skillSelect.value;
    const skillsUsed= document.querySelectorAll('.skills-used');
    skillsUsed.forEach(skill => {
        const parent = skill.parentElement.parentElement.parentElement;
        const skillUsedText = skill.innerText.replace('Skills Used:', '').toLowerCase();
      
    
        if (skillUsedText.indexOf(selectValue) >= 0) {
            parent.classList.remove('hidden');
        } else {
            parent.classList.add('hidden');
        }
    });
}


skillSelect.addEventListener('change', filterSkills);

 