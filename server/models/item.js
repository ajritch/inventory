var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
	product_name: {type: String, required: [true, 'An item name must be entered.']},
	upc: {type: Number, required: [true, 'A UPC code must be entered.']}
});

mongoose.model('Item', ItemSchema);