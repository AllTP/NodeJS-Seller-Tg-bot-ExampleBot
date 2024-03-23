
require('dotenv').config();
const token = process.env.BOT_TOKEN;

const telegramApi = require('node-telegram-bot-api');

const bot = new telegramApi(token, {polling: true})

bot.setMyCommands([
    {command: '/start', description: 'О магазине'},
    {command: '/product', description: 'Товары'}
]);

bot.on('message', async msg =>
{
    let text = msg.text;
    const chatId = msg.chat.id;

    if (text === '/start')
    {
        await bot.sendPoll()
    }
});