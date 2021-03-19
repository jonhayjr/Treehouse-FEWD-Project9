//Header Background Image/Text Effect
const headerBackground = document.querySelector('.header-background');
const headerText1 = document.getElementById('header-text-1');
const headerText2 = document.getElementById('header-text-2');

headerBackground.addEventListener('mouseover', () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 768) {
        headerBackground.classList.remove('background-image-orange');
        headerBackground.classList.add('background-image-purple');
        headerText1.classList.add('hidden');
        headerText2.classList.remove('hidden');
    }
});

headerBackground.addEventListener('mouseout', () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 768) {
        headerBackground.classList.remove('background-image-purple');
        headerBackground.classList.add('background-image-orange');
        headerText2.classList.add('hidden');
        headerText1.classList.remove('hidden');
    }
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
      
    
        if (skillUsedText.indexOf(selectValue) >= 0 || selectValue === 'all') {
            parent.classList.remove('hidden');
        } else {
            parent.classList.add('hidden');
        }
    });
}


skillSelect.addEventListener('change', filterSkills);

