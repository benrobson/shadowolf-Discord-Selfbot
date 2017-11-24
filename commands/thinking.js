exports.run = function(client, message, args) {

	const settings = require('../settings.json');
	const prefix = settings.prefix;

	message.channel.send("https://media.discordapp.net/attachments/86530360246038528/377542715572748288/image.gif")

	console.log(`${message.author.username} issued the command ${prefix}thinking`);

};
