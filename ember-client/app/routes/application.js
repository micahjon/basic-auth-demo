// application route

import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
	actions: {
		sessionRequiresAuthentication: function() {
			var session = this.get('session');
			this.get('torii')
				.open('google-oauth2-bearer')
				.then(function(googleAuth){
					var googleToken = googleAuth.authorizationToken.access_token;
					console.log('Google authentication successful.');

					session
						.authenticate('simple-auth-authenticator:jwt', { password: googleToken} )
						.then(function(){
							console.log('custom token authentication successful!');
						}, function (error) {
							console.log('custom token authentication failed!', error.message);
						});

				}, function (error) {
					console.error('Google auth failed: ', error.message);
				});
		}
	}
});