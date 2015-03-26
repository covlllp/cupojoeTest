var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/assessjs');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


var Article;
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  // setup schema here
  title: { type: String, required: true },
  body: { type: String, required: true },
  tags: { type: [String], get: arrayToString },
});

// read up on methods/statics

// Methods
ArticleSchema.methods.asJSON = function() {
	return JSON.stringify(this);
}

// Statics
ArticleSchema.statics.findByTitle = function(title, cb) {
	this.findOne({title: title}).exec(cb);
}

// Getter functions
function arrayToString (tags) {
	return tags.toString();
}




Article = mongoose.model('Article', ArticleSchema);


module.exports = Article;


