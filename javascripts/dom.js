'use strict';

const buildDomString = (dinosaur) => {
    console.log('buildDom entered', dinosaur);
    let domString = '';
    dinosaur.forEach((dino) => {
        domString += `<div class='col-md-3'>`;
        domString +=    `<h1>${dino.type}</h1>`;
        domString += `</div>`;
    });
    writeToDom(domString);
};

const writeToDom = (domString) => {
    $('#dinosaurs').html(domString);
};

module.exports = buildDomString;