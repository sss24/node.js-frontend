"use strict";

const fl = require('fs');

const text = fl.readFileSync('script.js', 'utf8');
console.log(text);