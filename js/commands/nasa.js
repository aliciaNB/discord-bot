module.exports = {
    name: 'nasa',
    description: 'Nasa Picture of the Day',
    execute(message, args) {
        message.channel.send('potd');
    },
};