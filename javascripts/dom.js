'use strict';

const buildDomString = (dinosaur) => {
    console.log('dinosaurs in buildDom', dinosaur);
    let domString = '';
    dinosaur.forEach((dino) => {
        domString += `<div class='col-md-3'>`;
        domString +=    `<h3>${dino.type}</h3>`;
        // domString +=    `<h4>${dino.snacks.name}</h4>`;
        domString += `</div>`;
    });
    writeToDom(domString);
};

const writeToDom = (domString) => {
    $('#dinosaurs').html(domString);
};

module.exports = buildDomString;