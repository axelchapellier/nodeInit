const myInformation = require('./information.js');

var cowsay = require("cowsay");
const information = require('./information.js');

console.log(cowsay.say({
	text : "I'm " + information[0] + " from the campus " + information[1],
	e : "oO",
	T : "U "
}));