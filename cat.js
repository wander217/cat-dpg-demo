var mouse = require('./mouse');

function cat(){
		console.log("a");
}

cat.prototype.eat = function(animal){
	if(animal instanceof mouse){
		console.log("eat");
		return;
	}
	throw new Error("error");
};

module.exports = cat;