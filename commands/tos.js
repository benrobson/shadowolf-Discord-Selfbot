exports.run = function(client, message, args) {

	const settings = require('../settings.json');
	const prefix = settings.prefix;

	message.channel.send("Can a Selfbot get you banned? ```Yes, selfbots are against the ToS. As for getting banned from them, as long as you don't spam api requests, you should be fine.``` Source: https://www.reddit.com/r/discordapp/comments/6wlvrk/are_selfbots_against_the_tos/ ```Automating normal user accounts (generally called self-bots) outside of the OAuth2/bot API is forbidden, and can result in an account termination if found.``` Source: https://discordapp.com/developers/docs/topics/oauth2#bots")

	console.log(`${message.author.username} issued the command ${prefix}tos`);

};
