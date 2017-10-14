'use strict';

const buildDomString = (dinosaur) => {
    let domString = '';
        domString += `<div class=${dinosaur.info === 'Carnivore' ? 'card-bad' : 'card-good'}>`;
        domString +=    `<h1>${dinosaur.type}</h1>`;
        domString +=    `<h4>${dinosaur.bio}</h4>`;
        if (dinosaur.info === 'Carnivore') {
            domString += `<h4>Has some tasty snacks.</h4>`;
        } else {
            domString += `<h4>Has some adorable (debatable) friends</h4>`;
        }
        domString += `<div class='card-holder'>`;
        dinosaur.snacks.forEach((cat) => {
            domString += `<div class='card'>`;
            domString += `<h5>${cat.name}</h5>`;
            domString += `<div class='card-image'>`;
            domString += `<img src=${cat.imageUrl}>`;
            domString += `</div>`;
            domString += `<p class='card-description'>${cat.specialSkill}</p>`;
            domString += `</div>`;
        });
        domString += `</div>`;
        domString += `</div>`;
    writeToDom(domString);
};

const writeToDom = (domString) => {
    $('#dinosaurs').append(domString);
};

module.exports = buildDomString;