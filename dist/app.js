(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const dom = require('./dom');

let dinosaurs = [];

// The old way - pyramid of doom
// const dinoGetter = () => {
//     $.ajax("./db/dinosaurs.json").done((data1) => {
//         console.log('data1:', data1);
//         data1.dinosaurs1.forEach((dino) => {
//             dinosaurs.push(dino);
//         });
//         console.log('dinosaurs array:', dinosaurs);
//             $.ajax("./db/dinosaurs2.json").done((data2) => {
//                 console.log('data2:', data2);
//                 data2.dinosaurs2.forEach((dino) => {
//                     dinosaurs.push(dino);
//                 });
//             console.log('dinosaurs array with dinosaurs2:', dinosaurs);
//                 $.ajax("./db/dinosaurs3.json").done((data3) => {
//                     console.log('data3:', data3);
//                     data3.dinosaurs3.forEach((dino) => {
//                         dinosaurs.push(dino);
//                     });
//                 console.log('dinosaurs array with dinosaurs3:', dinosaurs);        
//             });
//         });
//     });
// };

let firstDinosaurJSON = () => {
    return new Promise((resolve, reject) => {
        $.ajax("./db/dinosaurs.json").done((data1) => {
            resolve(data1.dinosaurs1);    
        }).fail((error) => {
            reject(error);
        });
    });
};

let secondDinosaurJSON = () => {
    return new Promise((resolve, reject) => {
        $.ajax("./db/dinosaurs2.json").done((data2) => {
            resolve(data2.dinosaurs2);    
        }).fail((error) => {
            reject(error);
        });
    });
};

let thirdDinosaurJSON = () => {
    return new Promise((resolve, reject) => {
        $.ajax("./db/dinosaurs3.json").done((data3) => {
            resolve(data3.dinosaurs3);    
        }).fail((error) => {
            reject(error);
        });
    });
};

//PROMISE WORKS - promise pyramid of DOOM
let dinoGetter = () => {
    firstDinosaurJSON().then((results1) => {
        results1.forEach((dino) => {
            dinosaurs.push(dino);
        });
        secondDinosaurJSON().then((results2) => {
            results2.forEach((dino) => {
                dinosaurs.push(dino);
            });
        });
        thirdDinosaurJSON().then((results3) => {
            results3.forEach((dino) => {
                dinosaurs.push(dino);
            });
        });
        console.log('dinsaurs array result:', dinosaurs);
    }).catch((error) => {
        console.log('error from dino1:', error);
    });
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
    let domString = '';
    dinosaur.forEach((dino) => {
        domString += `<div class='col-md-3'>`;
        domString +=    `<h1>${dino.name}</h1>`;
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
