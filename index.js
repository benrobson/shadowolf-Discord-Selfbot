const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
require('./util/eventLoader')(client);

var reload = (message, cmd) => {
	delete require.cache[require.resolve('./commands/' + cmd)];
	try {
		let cmdFile = require('./commands/' + cmd);
	} catch (err) {
		message.channel.send(`There was a problem reloading thw following command ${cmd}: ${err}`);
	}
	message.channel.send(`The command ${cmd} has been successfully reloaded.`);
};
exports.reload = reload;

client.login(settings.token);
