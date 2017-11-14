require('dotenv').config();
const delay = require('delay');
const mineflayer = require('mineflayer');
const bot = mineflayer.createBot({
  host: process.env.MC_HOST,
  port: process.env.MC_PORT,
  username: process.env.MC_USERNAME,
  password: process.env.MC_PASSWORD,
  verbose: true
});

require('./src/bot-extension')(bot);

console.log('Connecting to [' + process.env.MC_HOST +':' + process.env.MC_PORT + ']');
console.log('User [' + process.env.MC_USERNAME + ']');

function chatAddPattern(bot) {
  // kenmomine.club向けchat/whisperパターン
  bot.chatAddPattern(/^(?:\[[^\]]*\])<([^ :]*)> (.*)$/, 'chat', 'kenmomine.club chat');
  bot.chatAddPattern(/^([^ ]*) whispers: (.*)$/, 'whisper', 'kenmomine.club whisper(Chatco)');
}

function match_chat(bot, sender_name, message) {
  if (message.match(/^きよし$/)) {
    bot.safechat('フォン');
  }
}

function match_whisper(text) {
  
}

bot.on('connect', () => {
  bot.log('[connect] connected.');
  chatAddPattern(bot);
  
  // 入力を有効にする
  bot.init_readline();
  bot.safechat('hi', 2000);

  bot.on('chat', (username, message, translate, jsonMsg, matches) => {
    bot.log('[chat] <' + username + '>: ' + message);
    match_chat(bot, username, message);
  });
  
  bot.on('whisper', (username, message, translate, jsonMsg, matches) => {
    bot.log('[whisper] <' + username + '>: ' + message);
    bot.safechat(username + "さんが" + message + "って言ってるよ");
  });

  bot.on('message', (jmes) => {
    bot.log('[message] ' + bot.jmes_to_text(jmes));
  });

  bot.on('kicked', (reason, loggedIn) => {
    bot.log('[kicked] reason: ' + reason);
  });

  bot.on('end', () => {
    bot.log('[end]');
    delay(1000).then(() => {
      process.exit(0);
    })
  });
});
