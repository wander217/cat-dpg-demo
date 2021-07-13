function cat()
{
		console.log("a");
}

cat.prototype.eat = function(mouse){
	console.log("eat");
};

module.exports = cat;