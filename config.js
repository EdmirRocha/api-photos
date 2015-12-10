'use strict';

let config = {
	development: {
		db: {
			host: 'localhost',
			port: 27017,
			nome: 'bd_teste'
		}
	},
	production: {
		db: {
			host: 'localhost',
			port: 27017,
			nome: 'bd_producao'
		}		
	}
};

let env = process.env.NODE_ENV || 'development';

module.exports = config[env];

