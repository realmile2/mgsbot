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
    if (message.content === 'no u') {
    	message.reply('uno');
    }
    if (message.content === 'uno') {
    	message.reply('reverse');
    }
    if (message.content === 'reverse') {
    	message.reply('+4');
    }
    if (message.content === '+4') {
    	message.reply('block');
    }
    if (message.content === 'no no u') {
    	message.reply('no uno');
    }
    if (message.content === 'block') {
    	message.reply('oh no, u got me');
    }
    if (message.content === '/cmds') {
    	message('**There are no commands**');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
