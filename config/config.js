// requires
const _ = require('lodash');

// module variables
const config = require('./config.json');
const defaultConfig = config.testing;
const environment = process.env.NODE_ENV || 'testing';
const environmentConfig = config[environment];
const finalConfig = _.merge(defaultConfig, environmentConfig);

// as a best practice
// all global variables should be referenced via global. syntax
// and their names should always begin with g
global.gConfig = finalConfig;

// log global.gConfig
console.log(`global.gConfig: ${JSON.stringify(global.gConfig, undefined, global.gConfig.json_indentation)}`);