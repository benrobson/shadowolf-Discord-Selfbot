exports.run = function(client, message, args) {

	const settings = require('../settings.json');
	const prefix = settings.prefix;

	message.channel.send("Want to have and use this bot yourself? Here is a link to  the source code: https://github.com/shadowolfyt/shadowolf-Discord-Selfbot")

	console.log(`${message.author.username} issued the command ${prefix}source`);

};
