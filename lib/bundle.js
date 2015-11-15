(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function greet(name) {
  return "Hello! " + name;
}

function bye(name) {
  return "Good Bye! " + name;
}

exports.default = {
  greet: greet,
  bye: bye
};

},{}],2:[function(require,module,exports){
"use strict";

var _greeter = require("./greeter");

var _greeter2 = _interopRequireDefault(_greeter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ss = [_greeter2.default.greet("Bob"), _greeter2.default.bye("Ken")];
ss.map(function (s) {
  return console.log(s);
});

},{"./greeter":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZ3JlZXRlci5qcyIsInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FDQUEsU0FBUyxLQUFLLENBQUMsSUFBSSxFQUFFO0FBQ25CLHFCQUFpQixJQUFJLENBQUc7Q0FDekI7O0FBRUQsU0FBUyxHQUFHLENBQUMsSUFBSSxFQUFFO0FBQ2pCLHdCQUFvQixJQUFJLENBQUc7Q0FDNUI7O2tCQUVjO0FBQ2IsT0FBSyxFQUFMLEtBQUs7QUFDTCxLQUFHLEVBQUgsR0FBRztDQUNKOzs7Ozs7Ozs7OztBQ1RELElBQUksRUFBRSxHQUFHLENBQUMsa0JBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLGtCQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDO1NBQUssT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Q0FBQSxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZnVuY3Rpb24gZ3JlZXQobmFtZSkge1xuICByZXR1cm4gYEhlbGxvISAke25hbWV9YDtcbn1cblxuZnVuY3Rpb24gYnllKG5hbWUpIHtcbiAgcmV0dXJuIGBHb29kIEJ5ZSEgJHtuYW1lfWA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ3JlZXQsXG4gIGJ5ZVxufTtcblxuIiwiaW1wb3J0IGcgZnJvbSBcIi4vZ3JlZXRlclwiO1xuXG5sZXQgc3MgPSBbZy5ncmVldChcIkJvYlwiKSwgZy5ieWUoXCJLZW5cIildO1xuc3MubWFwKChzKSA9PiBjb25zb2xlLmxvZyhzKSk7XG5cbiJdfQ==
