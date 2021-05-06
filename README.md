[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/you-didnt-ask-for-this.svg)](https://forthebadge.com)

# Discord google translator bot
### Discord javascript bot, with you can translate messages!

This discord bot was created just for fun.

This bot is useful for global servers with with a lot of members who still speak in different language.

This code could not be created without **Google Translate package**
* Google Translate package
  * [Github Repository](https://github.com/iamtraction/google-translate)
  * [npmjs package](https://www.npmjs.com/package/@iamtraction/google-translate)
  * [Author Github Profile](https://github.com/iamtraction)

## HOW TO USE
1. Download Github Desktop app and clone this repository or download the code from this repository and open it in visual studio code or other coding programs.
2. Configurate the config.js file.
```javascript
module.exports = {
    bot: {
        token: '',
        prefix: '',
        status: '',
        activity: ''
    }
};
```
**Token** - Your unique bot token, just copy it from https://discord.com/developers/applications/.
![TOKEN](https://tinyurl.com/discordbot-token)

**Prefix** - Your custom prefix of the bot, like "!", every command should start with prefix.

**Status** - Discord users and bots can have an activity status. Like you're playing game. You can set on your bot, that he play Minecraft or someting like that.

**Activity** - With custom status, you need to specify activity type. You can choose between PLAYING, LISTENING, WATCHING and COMPETING.

3. You need to use command `npm install` to install all packages. *In visual studio code the console opens with `ctrl+;`*
4. You're finished! Use `npm start` in console and start the bot.