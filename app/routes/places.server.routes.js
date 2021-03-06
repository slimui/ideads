'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users'),
	places = require('../../app/controllers/places');

module.exports = function(app) {
	// Places Routes
	app.route('/places')
		.get(places.list)
		.post(users.requiresLogin, places.hasAuthorization, places.create);

	app.route('/places/:placeId')
		.get(places.read)
		.put(users.requiresLogin, places.hasAuthorization, places.update)
		.delete(users.requiresLogin, places.hasAuthorization, places.delete);

	// Finish by binding the places middleware
	app.param('placeId', places.placeByID);
};
