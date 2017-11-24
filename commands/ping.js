exports.run = function(client, message, args) {

	const settings = require('../settings.json');
	const prefix = settings.prefix;

	message.channel.send(`Pong! \`${Date.now() - message.createdTimestamp} ms\``);

	console.log(`${message.author.username} issued the command ${prefix}ping`);


};
