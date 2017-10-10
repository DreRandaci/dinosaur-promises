'use strict';

const dom = require('./dom');

const initializer = () => {
    dom([{name: 'dino!'}]);
};

module.exports = {initializer};