'use strict';

var Router = require('express').Router;

var router = new Router();

var controllers = require('../controllers');
let bodyParser = require('body-parser');
let multer = require('multer')();


router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
router.use(multer.array());


router
	.route('/photos')
	.get(controllers.photos.list)
 	.post(controllers.photos.create);


router
	.route('/photos/:id')
	.get(controllers.photos.get)
	.put(controllers.photos.update)
	.delete(controllers.photos.delete);


module.exports = router;