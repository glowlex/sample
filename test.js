let assert = require('assert');
let hello = require('./public/main').hello;
let russianPlural = require('./public/main').russianPlural;

assert.equal(russianPlural(0, ["раз","раза","раз"]), "раз");
assert.equal(russianPlural(1, ["раз","раза","раз"]), "раз");
assert.equal(russianPlural(2, ["раз","раза","раз"]), "раза");
assert.equal(russianPlural(3, ["раз","раза","раз"]), "раза");
assert.equal(russianPlural(5, ["раз","раза","раз"]), "раз");
assert.equal(russianPlural(11, ["раз","раза","раз"]), "раз");
assert.equal(russianPlural(12, ["раз","раза","раз"]), "раз");
assert.equal(russianPlural(21, ["раз","раза","раз"]), "раз");
assert.equal(russianPlural(22, ["раз","раза","раз"]), "раза");
