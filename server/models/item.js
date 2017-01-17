var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
	name: {type: String, required: [true, 'An item name must be entered.'], unique: true},
	code: {type: Number, required: [true, 'A UPC code must be entered.'], unique: true}
});

mongoose.model('Item', ItemSchema);