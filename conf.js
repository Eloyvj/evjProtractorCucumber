'use strict'

var dirname = __dirname

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  ignoreUncaughtExceptions: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  restartBrowserBetweenTests: false,
  getPageTimeout: 20000,
  allScriptsTimeout: 30000,
  rootElement: '*[ng-app]',
  baseUrl: 'https://pokedex-angular-example.herokuapp.com/',
  
  specs: [
    'features/*.feature'
  ],

  exclude: [
  ],

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {

      prefs: {
        download: {
          'prompt_for_download': false,
          'directory_upgrade': true,
          'default_directory': dirname + '/features/download'
        }
      }
    }
  },

  cucumberOpts: {
    require: 'features/step_definitions/*.js',
    // tags: ['~@notImplemented'],
    tags: ['@pesquisa'],
    format: ['json:results.json', 'pretty'],
    profile: false,
    'no-source': true
  },

  beforeLaunch: function () {
    setTimeout(function () {
      browser.driver.executeScript(function () {
        return {
          width: window.screen.availWidth,
          height: window.screen.availHeight
        }
      }).then(function (result) {
        browser.driver.manage().window().setSize(result.width, result.height)
      })
    })
  },
  onPrepare: function () {
    // Use only for angular applications
    // False: app Angular
    // True: app not Angular
    browser.ignoreSynchronization = false
  },

  afterLaunch: function () {
    var reporter = require('cucumber-html-reporter')

    var options = {
      theme: 'bootstrap',
      jsonFile: 'results.json',
      output: 'report/cucumber_report.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
        'App Version': '0.0.1',
        'Test Environment': 'STAGING',
        'Browser': 'Chrome  54.0.2840.98',
        'Platform': 'OSX',
        'Parallel': 'Scenarios',
        'Executed': 'Remote'
      }
    }

    reporter.generate(options)
  }

}
