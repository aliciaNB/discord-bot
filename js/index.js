const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.json');

client.on('message', message => {
    if (message.content === '!ping') {
        // send back message back to the channel the message was sent in
        message.channel.send('Pong...Mudda dukka');
    }
});

client.once('ready', () => {
    console.log('Ready!');
});

client.login(config.token);
