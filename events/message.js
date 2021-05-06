const Discord = require("discord.js")
const translator = require('@iamtraction/google-translate');

module.exports = async (bot, message) => {
    const /*Help command aliases*/cmdHELP = [`${prefix}help`, `${prefix}commands`, `${prefix}cmd`, `${prefix}cmds`];

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const msgArray = message.content.split(" ");
    const cmd = msgArray[0].toLowerCase();
    const args = msgArray.slice(1);

    if (message.mentions.has(bot.user) && !message.mentions.has(message.guild.id) | new Set(cmdHELP).has(cmd)) {
        const embedHelp = new Discord.MessageEmbed()
          .setColor('#0377fc')
          .setAuthor(bot.user.username, bot.user.displayAvatarURL())
          .setTitle('Help Command')
          .setDescription(`Oh, hello. This bot can't do anything yet.`)
          .setFooter('Prefix: ' + bot.prefix);
        message.channel.send(embedHelp);
      };
};