exports.run = function(client, message, args) {

	const settings = require('../settings.json');
	const prefix = settings.prefix;

	message.channel.send("https://giphy.com/gifs/26u4gfC13kKurkTGE")

	console.log(`${message.author.username} issued the command ${prefix}gay`);

};
