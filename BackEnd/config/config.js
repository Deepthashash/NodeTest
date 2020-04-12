//check environment 
var env = process.env.NODE_ENV || 'development';
//fetch config
var config = require('./config.json');
var envConfig = config[env];
//assigning values
Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]); 