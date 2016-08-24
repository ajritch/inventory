var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');

module.exports = (function() {
	return{
		//get all orders
		index: function(req, res) {
			Order.find({}).populate('_customer').populate('_product').exec(function(err, results) {
				if (err) {
					console.log(err);
				} else {
					res.json(results);
				}
			});
		},

		//add an order
		create: function(req, res) {
			var order = new Order({_customer: req.body.customer, _product: req.body.product, quantity: req.body.quantity});
			//check: are there enough of that product left?
			Product.findOne({_id: order._product}).exec(function(err, prod) {
				if (err) {
					console.log(err);
				} else if (prod.quantity == 0) {
					res.json({quant_error: "Sorry, " + prod.name + " is out of stock."});
				} else if (prod.quantity < order.quantity) {
					res.json({quant_error: "Quantity too large: only " + prod.quantity + " " + prod.name + "(s) left in stock."});
				} else {
					//save the order
					order.save(function(err) {
						if (err) {
							res.json(err);
						} else {
							//everything good? update product quantity and redirect
							Product.update({_id: order._product}, {$set: {quantity: prod.quantity - order.quantity}}, function(err, output) {
								if (err) {
									console.log(err);
								}
							});
							res.redirect('/orders');
						}
					});		
				}
			})
		},

		//delete an order
		delete: function(req, res) {
			Order.remove({_id: req.params.id}, function(err) {
				if (err) {
					res.json(err);
				} else {
					res.redirect('/orders');
				}
			})
		}

	}
})();