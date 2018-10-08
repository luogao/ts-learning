(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var Student = function Student(firstName, middleInitial, lastName) {
    _classCallCheck(this, Student);

    this.firstName = firstName;
    this.middleInitial = middleInitial;
    this.lastName = lastName;
    this.fullname = firstName + " " + middleInitial + " " + lastName;
};

exports.default = Student;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(name) {
    return "Hello from " + name;
}
exports.sayHello = sayHello;

},{}],3:[function(require,module,exports){
"use strict";

var _console;

Object.defineProperty(exports, "__esModule", { value: true });
var greet_1 = require("./greet");
var Student_1 = require("./Student");
function showHello(divName, name) {
    var el = document.getElementById(divName);
    setTimeout(function () {
        el.innerText = greet_1.sayHello(name);
    }, 300);
}
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
function showPerson(person) {
    var div = document.createElement('div');
    div.innerHTML = greeter(person);
    document.body.appendChild(div);
}
var student = new Student_1.default("Jane", "M.", "User");
var a = [1, 2, 3, 4, 5];
console.log(student);
(_console = console).log.apply(_console, a);
showPerson(student);
showHello('greeting', "TypeScript!");

},{"./Student":1,"./greet":2}]},{},[3])

//# sourceMappingURL=bundle.js.map
