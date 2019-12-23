const myToken = '995308759:AAG0cSOOdlAP8r3n6tnaXtBx0wArse89YDA'
const library = require('node-telegram-bot-api')
const bot = new TelegramBot(myToken,{polling: true})
bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'Hello from HEROKU,bot says:"Hi, ${msg.from.first_name}"')
})