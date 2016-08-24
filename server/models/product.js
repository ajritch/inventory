var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	name: {type: String, required: [true, 'A product name must be entered.']},
	url: {type: String},
	description: {type: String},
	quantity: {type: Number, required: [true, 'A product quantity must be selected.']}
});

mongoose.model('Product', ProductSchema);