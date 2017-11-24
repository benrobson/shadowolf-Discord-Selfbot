exports.run = function(client, message, args) {

	const settings = require('../settings.json');
	const prefix = settings.prefix;

	message.channel.send('Yes, you need help, we get it...');

	console.log(`${message.author.username} issued the command ${prefix}help`);

};
