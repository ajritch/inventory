var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
	name: {type: String, required: [true, 'A customer name must be entered.'], unique: true},
	orders: [{type: mongoose.Schema.Types.ObjectId, ref: 'Order'}]
}, {timestamps: true});

mongoose.model('Customer', CustomerSchema);