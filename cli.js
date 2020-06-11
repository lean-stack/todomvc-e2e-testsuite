#!/usr/bin/env node

const cypress = require('cypress');
const { help } = require('yargs');

require('yargs')
  .scriptName("todomvc-e2e-cy-testsuite")

  .command('headless', 'start a headless testsuite', {}, argv => {
    cypress.run({
      project: __dirname,
      config: {
        baseUrl: `http://localhost:${argv.port || 4200}`
      }
    });
  })
  .command('ui', 'start a ui testsuite', {}, (argv) => {
    cypress.open({
      project: __dirname,
      config: {
        baseUrl: `http://localhost:${argv.port || 4200}`
      }
    });
  })
  .demandCommand(1,
    'You need a command (ui or headless) before moving on',
  )
  .option('port', {
    alias: 'p',
    number: true,
    default: 4200,
    description: 'port the app to test is listening on'
  })
  .argv;
