exports.run = function(client, message, args) {

	const settings = require('../settings.json');
	const prefix = settings.prefix;

	message.channel.send("https://giphy.com/gifs/popcorn-richard-ayoade-the-it-crowd-TrDxCdtmdluP6")

	console.log(`${message.author.username} issued the command ${prefix}popcorn`);

};
