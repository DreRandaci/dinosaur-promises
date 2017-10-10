'use strict';

const dom = require('./dom');

let dinosaurs = [];

const initializer = () => {
    dom([{name: 'dino!'}]);
};

const getDinosaurs = () => {
    return dinosaurs;
};

module.exports = {initializer, getDinosaurs};