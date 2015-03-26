var express = require('express');
var router = express.Router();
var model = require('../models/article');

/**
 *
 *___ _____ _   ___ _____   _  _ ___ ___ ___
 / __|_   _/_\ | _ \_   _| | || | __| _ \ __|
 \__ \ | |/ _ \|   / | |   | __ | _||   / _|
 |___/ |_/_/ \_\_|_\ |_|   |_||_|___|_|_\___|
						CREATE ADDITIONAL ROUTES
 */


/**
 * List
 */
router.get('/articles', function(req, res) {
	model.find().exec(function(err, articles) {
		if (err) res.status(500).send();
		res.json(articles);
	});
});


/**
 * Show
 */

router.get('/articles/:id', function(req, res) {
	var id = req.params.id;
	model.findOne({_id: id}).exec(function(err, articles) {
		if (err) res.status(500).send();
		else res.json(articles);
	});
});


/**
 * Create an article
 */
router.post('/articles', function (req, res) {
	var article = new model(req.body);
	if (!(article.body && article.title)) {
		res.status(500).send('No body or title');
	} else {
		article.save(function(err, article) {
			res.json({message: 'Created Successfully', article: article});
		});
	}
});



/**
 * Update article
 */
router.put('/articles/:id', function (req, res) {
	var id = req.params.id;
	model.findOne({_id: id}).exec(function(err, article) {
		if (err) res.status(500).send('No ID found');
		else {
			for (var key in req.body) {
				if (req.body.hasOwnProperty(key))
					article[key] = req.body[key];
			}
			article.save(function (err, article) {
				res.json({message: 'Updated Successfully', article: article});
			});
		}
	});
});


 /**
 * END ROUTES
 */

module.exports = router;