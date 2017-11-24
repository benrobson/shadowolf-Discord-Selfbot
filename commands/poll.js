exports.run = function(client, message, args) {

  const Discord = require('discord.js');
  const settings = require('../settings.json');

  const embed = new Discord.RichEmbed()
  .setColor(0xff8080)
  .setTimestamp(new Date())
  .addField(`Poll by ${message.author.username}`, `${args}`.split(',').join(' '))

  return message.channel.send(embed).then(message.delete())

  .then(function (message, str) {
        message.react("👍")
        message.react("👎")
      }).catch(function() {
      })
      .then(console.log(`${message.author.username} created a poll with the following question "${args}"`.split(',').join(' ')))

}
