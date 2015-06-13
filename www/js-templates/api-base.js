angular.module('cp-vendor-app.constants', [])
// @if ENV == 'DEVELOPMENT'
.constant('API_BASE', 'http://api.citypantry.dev')
// @endif
// @if ENV == 'STAGING'
.constant('API_BASE', 'http://api.staging.citypantry.com')
// @endif
// @if ENV == 'PRODUCTION'
.constant('API_BASE', 'https://api.citypantry.com')
// @endif
;
