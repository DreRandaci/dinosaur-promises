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