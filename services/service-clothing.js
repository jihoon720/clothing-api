const Clothing = require('../models/model-clothing');
_this = this;

exports.getClothing = async function(){
	try{
		var clothing = await Clothing;
		return clothing;	
	}
	catch(err){
		throw Error("There was an error: getClothing");
	}
}

exports.createClothing = async function(clothing){
	var newClothing = new Clothing({
		name: clothing.name,
		description: clothing.description,
		category: clothing.category,
		releaseDate: clothing.releaseDate,
		price: Number
	});

	try{
		var savedClothing = await newClothing.save();
		return savedClothing;
	}
	catch(err){
		throw Error("There was an error: createClothing");
	}
}
