const Discord = require('discord.js');
const fs = require('fs')

const bot = new Discord.Client({
    disableEveryone: true,
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});

const config = require('./config');
bot.token = config.bot.token
bot.prefix = config.bot.prefix;
bot.status = config.bot.status;
bot.activity = config.bot.activity.toUpperCase()


//Config check
if(bot.token === '') {
    console.log('🔴 ' + 'Bot token in config is empty!\nKilling process...');
    return process.exit(1);
} else if (bot.prefix === '') {
    console.log('🔴 ' + 'Bot prefix in config is empty!\nKilling process...');
    return process.exit(1);
} else if (bot.status === '') {
    console.log('🟡 ' + 'Bot status in config was empty! Bot status was disabled.')
    bot.status = false;
} else if (bot.activity === '' && bot.status !== false) {
    console.log('🟡 ' + 'Bot activity type in config was empty! Activity type is now "playing"')
    bot.activity = 'PLAYING'
}

//Event handler
const eventsFolder = fs.readdirSync('./events');
for (const file of eventsFolder) {
    const event = require(`./events/${file}`);
    bot.on(file.split(".")[0], event.bind(null, bot));
};

//Bot login
bot.login(bot.token);