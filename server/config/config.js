var env = process.env.NODE_ENV || 'development';
console.log('env ****', env);

switch(env) {
	case 'development':
	case 'test':
		var config = require('./config.json');
		var envConfig = config[env];

		Object.keys(envConfig).forEach((key) => {
			process.env[key] = envConfig[key];
		});
	break;
}
