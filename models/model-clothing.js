const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePagniate = require('mongoose-paginate');

var clothingSchema = new Schema({
	name: String,
	description: String,
	category: String,
	releaseDate: Date;
	price: Number
});

clothingSchema.plugin(mongoosePaginate);
const clothing = mongoose.model('Clothing', clothingSchema);
module.exports = clothing;