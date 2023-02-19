const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  e2e: {
    baseUrl: "https://magento.softwaretestingboard.com/",
    viewport: "macbook-16",
    user_details: {
        firstname: "Syeda", 
        lastname: "Qurat", 
        email:"annie",
        password: "test123!!", 
        password_confirm: "test123!!"
  },
  user_login: { 
    email:"syeda.annie.asad@gmail.com",
    password: "test123!!", 
},
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    env: {
      allureReuseAfterSpec: true,
    },
  },
});
