var helpers = require('./protractor-helpers.js');

(function() {
    for (var key in helpers) {
        global[key] = helpers[key];
    }

    onPrepare = function() {
        require('jasmine-reporters'); // is not available earlier, so we need to put it in here
        // require('../test/e2e/matchers.js');
        jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter('build/protractor-logs/', true, true));

        // Sets the width of the window, otherwise the default min width
        // of our site is too small and the login page is unusable.
        browser.driver.manage().window().setSize(3000, 3000);
    };

    config = {
        framework: 'jasmine',

        // The address of a running selenium server.
        seleniumAddress: 'http://localhost:4444/wd/hub',

        // Capabilities to be passed to the webdriver instance.
        capabilities: {
            'browserName': 'chrome',
            'phantomjs.binary.path': '/home/citypantry/project/mobile-app/node_modules/phantomjs/bin/phantomjs',
        },

        specs: [
          '../tests/e2e/*.js'
        ],

        onPrepare: onPrepare,

        jasmineNodeOpts: {
            showColors: true,
            defaultTimeoutInterval: 10000
        },

        allScriptsTimeout: 10000,
        baseUrl: 'http://localhost:8100/',
    };

    exports.config = config;
}).call(this);
