const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '/?') {
    	message.reply('Commands: *Sorry there are no commands currently!*');
  	}
    if (message.content === 'u suck') {
    	message.reply('no u');
    }
    if (message.content === 'hi') {
    	message.reply('Hello!');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
