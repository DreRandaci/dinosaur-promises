(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const dom = require('./dom');

let dinosaurs = [];

const firstDinosaurJSON = () => {
    return new Promise((resolve, reject) => {
        $.ajax("./db/dinosaurs.json").done((data1) => {
            resolve(data1.dinosaurs1);    
        }).fail((error) => {
            reject(error);
        });
    });
};

const secondDinosaurJSON = () => {
    return new Promise((resolve, reject) => {
        $.ajax("./db/dinosaurs2.json").done((data2) => {
            resolve(data2.dinosaurs2);    
        }).fail((error) => {
            reject(error);
        });
    });
};

const thirdDinosaurJSON = () => {
    return new Promise((resolve, reject) => {
        $.ajax("./db/dinosaurs3.json").done((data3) => {
            resolve(data3.dinosaurs3);    
        }).fail((error) => {
            reject(error);
        });
    });
};

const allTheCats = () => {
    return new Promise((resolve, reject) => {
        $.ajax("./db/catSnacks.json").done((catData) => {
            resolve(catData.cats);    
        }).fail((error) => {
            reject(error);
        });
    });
};

const dinoGetter = () => {
    Promise.all([firstDinosaurJSON(), secondDinosaurJSON(), thirdDinosaurJSON()]).then((results) => {
        allTheCats().then((cats) => {
        results.forEach((result) => {
            result.forEach((dino) => {
                dino.snacks = [];
                dino.catIds.forEach((catId) => {
                    cats.forEach((cat) => {
                        if (cat.id === catId) {
                            dino.snacks.push(cat);
                        }
                    });
                });
                dinosaurs.push(dino);
            });
        });
        makeDinos();
    });        
    }).catch((error) => {
        console.log('error from Promise.all', error);
    });
};

const makeDinos = () => {
    dom(dinosaurs);
};

const initializer = () => {
    dinoGetter();
};

const getDinosaurs = () => {
    return dinosaurs;
};

module.exports = {initializer, getDinosaurs};
},{"./dom":2}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
'use strict';

const data = require('./data');

$(document).ready(function() {
    data.initializer();
});
},{"./data":1}]},{},[3]);
