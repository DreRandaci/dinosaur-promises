(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

module.exports = {buildDomString};
},{}],2:[function(require,module,exports){
'use strict';
const dom = require('./dom');

dom.buildDomString([{name: 'dino!'}]);
},{"./dom":1}]},{},[2]);