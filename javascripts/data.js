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

//PROMISE WORKS - promise pyramid of DOOM
// const dinoGetter = () => {
//     firstDinosaurJSON().then((results1) => {
//         results1.forEach((dino) => {
//             dinosaurs.push(dino);
//         });
//         secondDinosaurJSON().then((results2) => {
//             results2.forEach((dino) => {
//                 dinosaurs.push(dino);
//             });
//         });
//         thirdDinosaurJSON().then((results3) => {
//             results3.forEach((dino) => {
//                 dinosaurs.push(dino);
//             });
//         });
//         console.log('dinsaurs array result:', dinosaurs);
//     }).catch((error) => {
//         console.log('error from dino1:', error);
//     });
// };

//PROMISE - Correct way
// const dinoGetter = () => {
//     firstDinosaurJSON().then((results1) => {
//         results1.forEach((dino) => {
//             dinosaurs.push(dino);
//         });
//         return secondDinosaurJSON();
//     }).then((results2) => {
//         results2.forEach((dino) => {
//             dinosaurs.push(dino);
//         });
//     return thirdDinosaurJSON();
//     }).then((results3) => {
//         results3.forEach((dino) => {
//             dinosaurs.push(dino);
//         });
//         console.log('dinsaurs array result:', dinosaurs);
//         makeDinos();
//     });
// };

const dinoGetter = () => {
    Promise.all([firstDinosaurJSON(), secondDinosaurJSON(), thirdDinosaurJSON()]).then((results) => {
        console.log('results from promise.all', results);
        results.forEach((result) => {
            result.forEach((dino) => {
                dinosaurs.push(dino);
            });
        });
        makeDinos();
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