const { MessageEmbed } = require('discord.js');
const timeout = require('discord-timeout-js');
const fs = require('fs');
const ms = require('ms');

module.exports = async (client,message,args,argsF) => {

	const lock = '<:locked:1001383615625695292>'
	let user = message.mentions.users.first();
	let users = message.mentions.members.first();
	var works = client.memory.guilds[message.guild.id].work
	var dbus = client.memory.guilds[message.guild.id].members[message.author.id]
	
	var Timeout = client.Timeout

	const input = '\n\n\n<:tips:964246401485799514> **?warns <@ping>**\n\n**└ <@ping> - пинг участника**'

	if (!user) {
	    	let exampleEmbed = new MessageEmbed()
			.setColor(0x00ffff)
			.setThumbnail('https://media.discordapp.net/attachments/964245440755273840/1077542594470494208/UCoKbWh.png')
			.setTitle(`• × WALLET ${message.author.username} × •`)
			.setDescription(`<:money:972561293544411216> **Наличные:** *${dbus.nal}* <:money:972561293544411216>\n\n<:money:972561293544411216> **Банк:** *${dbus.bank}* <:money:972561293544411216>\n\n<:economy:962750236571365438> **Общий баланс:** *${dbus.bank + dbus.nal}*`)

		message.channel.send({ embeds: [exampleEmbed] });
	} else {
		if (!client.memory.guilds[message.guild.id].members[user.id]) {

			console.log(message.guild.id)
			client.memory.guilds[message.guild.id].members[user.id] = client.createMembers()
			fs.writeFileSync(`./src/memory.json`, JSON.stringify(client.memory, null, '\t'))
		};
		var dbuss = client.memory.guilds[message.guild.id].members[user.id]
	    	let exampleEmbed = new MessageEmbed()
			.setColor(0x00ffff)
			.setThumbnail('https://media.discordapp.net/attachments/964245440755273840/1077542594470494208/UCoKbWh.png')
			.setTitle(`• × WALLET ${user.username} × •`)
			.setDescription(`<:money:972561293544411216> **Наличные:** *${dbuss.nal}* <:money:972561293544411216>\n\n<:money:972561293544411216> **Банк:** *${dbuss.bank}* <:money:972561293544411216>ㅤㅤㅤ\n\n<:economy:962750236571365438> **Общий баланс:** *${dbuss.bank + dbuss.nal}*ㅤㅤㅤ`)

		message.channel.send({ embeds: [exampleEmbed] });		
	}
	





	
};	

module.exports.names = ["?bal", "?balance"];
// ?job <name>