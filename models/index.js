const mongoose = require('mongoose');

mongoose.set('debug',true);
mongoose.connect('mongodb://mongo:27017',{
	useNewUrlParser:true, 
	useUnifiedTopology:true,
	useFindAndModify:false
});

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');
