# Web Automation #

We are aiming to do automation on **[softwaretesting.com](https://magento.softwaretestingboard.com/)** with the help of [Cypress](https://www.cypress.io/) testing tool.

### What is this repository for? ###

* Summary: The objective is to have a test-cases which will cover the most critical impacted areas/functionalities of business
* Login
* SignUp
* Add item to Cart
* Remove item from Cart


### How do I get set up? ###

After cloning the repo, install following:
* cypress, `npm install cypress --save-dev`
* node_modules, `npm install node-modules`
* Allure lugin, `npm i -D @shelex/cypress-allure-plugin`

To run the tests with headed, run following
* npm run cy:run:headed

To run the tests in headed-less, run following
*  npm run cy:run

### Contribution guidelines ###

* This follows the **Cypress** way of writing test:
    * _define_: to group our test cases
    * _it_: for an individual test case


### Who do I talk to? ###

* Syeda Quratulain Asad