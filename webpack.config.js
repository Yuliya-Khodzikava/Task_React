const path = require('path');

module.exports = {
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve('public'),
		filename: 'bundle.js',
	},
	module: {
	  loaders: [
	    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
	  ],
},
};