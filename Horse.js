function Horse(){
	console.log("aa");
};

Horse.prototype.jump = function(){
	console.log("jump1");
	console.log("jump");
}

Module.export = Horse;