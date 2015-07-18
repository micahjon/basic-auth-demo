// application.js adapter

import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'http://localhost:4500'
});
