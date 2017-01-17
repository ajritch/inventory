var mongoose = require('mongoose');
var Item = mongoose.model('Item');

module.exports = (function() {
	return {

		//get all items
		index: function(req, res) {
			Item.find({}, function(err, results) {
				if (err) {
					console.log(err);
				} else {
					res.json(results);
				}
			})
		},

		//add an item
		create: function(req, res) {
			// console.log(req.body)
			var item = new Item(req.body);
			item.save(function(err, results) {
				if (err) {
					//is it a duplication error"
					if (err.name == 'MongoError') {
						var error = {duplicate_error: 'That item name has already been entered.'};
						res.json(error);
					} else {
						res.json(err);
					}
				} else {
					res.redirect('/items');
				}
			})
		},

		//delete an item
		delete: function(req, res) {
			console.log(req.params.id);
			Item.remove({_id: req.params.id}, function(err) {
				if (err) {
					res.json(err);
				} else {
					res.redirect('/items');
				}
			});
		},

		//get an item by id
		get: function(req, res) {
			Item.findOne({code: req.params.code}, function(err, item) {
				if (err) {
					res.json(err);
				} else if (!item) {
					res.json({"status": "fail"})
				} else {
					res.json(item);
				}
			})
		}




	}

})();