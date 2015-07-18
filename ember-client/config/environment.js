/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'basic-auth-demo',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy: {
      'connect-src': "'self' http://localhost:4500",
    },

    'simple-auth-token': {
      // get token
      serverTokenEndpoint: 'http://localhost:4500/get-token',
      // refresh token
      serverTokenRefreshEndpoint: 'http://localhost:4500/refresh-token',
      // timeFactor * refreshLeeway = milliseconds before token refresh
      timeFactor: 1000,   
      refreshLeeway: 60, // 1 minute
    },

    'simple-auth': {
      authorizer: 'simple-auth-authorizer:token'
    },

    torii: {
      providers: {
        'google-oauth2-bearer': {
          apiKey: '537477417489-6utn1t30jp5k0l0qglkeupg5giab2bm8.apps.googleusercontent.com',
          redirectUri: 'http://localhost:4200',
        },
      }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
