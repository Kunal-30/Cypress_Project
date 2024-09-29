const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
async function setupNodeEvents(on,config){
  on('file:preprocessor', cucumber());
  return config;
}


module.exports = defineConfig({
  e2e: {
    setupNodeEvents, 
    // specPattern : 'cypress/Integration/Advanced/*.js'
    // specPattern : 'cypress/UAT/features/*.feature'
    // specPattern : 'cypress/Integration/Assessment3/assesss.js'    
    specPattern:'cypress/Integration/iframe.js'
  },
});
