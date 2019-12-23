const myToken = '995308759:AAG0cSOOdlAP8r3n6tnaXtBx0wArse89YDA'
const library = require('node-telegram-bot-api')
const bot = new library(myToken,{polling: true})
bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'Stas is NOOB')
})