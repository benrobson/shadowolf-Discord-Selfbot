exports.run = function(client, message, args) {

	const settings = require('../settings.json');
	const prefix = settings.prefix;

	message.channel.send("This command is here for whenever I want to release my source code for this selfbot there will be an avaliable link here somewhere.")

	console.log(`${message.author.username} issued the command ${prefix}source`);

};
