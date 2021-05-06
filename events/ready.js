module.exports = async (bot) => {
    if(bot.status && bot.status !== false) {
        bot.user.setActivity(bot.status, {type: bot.activity})
    }
    console.log("🟢 " + bot.user.username + " is now working")
}