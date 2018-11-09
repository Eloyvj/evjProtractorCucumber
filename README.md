#  Project Protractor-Cucumber.js for functional automation tests in web applications
Small project for show a automation test structure using Protractor-Cucumber.js

### Install Node.js

* Download and install Node.js [here](https://nodejs.org/en/)
* npm is distributed with Node.js- which means that when you download Node.js, you automatically get npm installed on your computer.

### Install Protractor

* Open a terminal window and type:
    * npm install -g protractor 
    * This will install two command line tools, protractor and webdriver-manager. Try running protractor --version to make sure it's working.

### Install project dependencies

* Go to root directory and type:
    * npm install

### Run tests

* Update e start webdriver-managar
    * Open a terminal window and type:
        * webdriver-managar update
        * webdriver-managar start
* Open a new terminal window and go to root directory:
    * npm run test

### Report

* After test execution check report directory:
    * features/report/