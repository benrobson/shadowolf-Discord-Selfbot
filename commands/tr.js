exports.run = function(client, message, args) {

	const settings = require('../settings.json');

	message.channel.send(':warning: T R I G G E R E D :warning:');

	console.log(`${message.author.username} issued the command ${settings.prefix}tr`);

};
