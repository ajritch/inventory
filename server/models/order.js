var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
	_customer: {type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: [true, 'A customer must be selected.']},
	_product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: [true, 'A product must be selected.']},
	quantity: {type: Number, required: [true, 'A quantity must be selected']}
}, {timestamps: true});

mongoose.model('Order', OrderSchema);