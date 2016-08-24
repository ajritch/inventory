var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = (function() {
	return{

		//get all products
		index: function(req, res) {
			Product.find({}, function(err, results) {
				if (err) {
					res.json(err);
				} else {
					res.json(results);
				}
			});
		},

		//add a product
		create: function(req, res) {
			var product = new Product(req.body);
			product.save(function(err, results) {
				if (err) {
					res.json(err);
				} else {
					res.redirect('/products');
				}
			})
		}

	}
})();