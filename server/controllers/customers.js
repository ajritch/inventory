var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function() {
	return {

		//get all customers
		index: function(req, res) {
			Customer.find({}, function(err, results) {
				if (err) {
					console.log(err);
				} else {
					res.json(results);
				}
			})
		},

		//add a customer
		create: function(req, res) {
			var customer = new Customer(req.body);
			customer.save(function(err, results) {
				if (err) {
					//is it a duplication error"
					if (err.name == 'MongoError') {
						var error = {duplicate_error: 'That customer name has already been entered.'};
						res.json(error);
					} else {
						res.json(err);
					}
				} else {
					res.redirect('/customers');
				}
			})
		},

		//delete a customer
		delete: function(req, res) {
			console.log(req.params.id);
			Customer.remove({_id: req.params.id}, function(err) {
				if (err) {
					res.json(err);
				} else {
					res.redirect('/customers');
				}
			});
		}


	}

})();