function Horse(){
	console.log("aa");
};

Horse.prototype.run = function(){
	console.log("run");
}

Module.export = Horse;