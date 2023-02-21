module.exports = (client) => {
	client.on('ready', () => require('./on_ready')(client));
	client.on('messageCreate', (message) => require('./msg')(client, message));
	// client.on('guildCreate', (guild) => require('./guildNew')(client, guild);
};