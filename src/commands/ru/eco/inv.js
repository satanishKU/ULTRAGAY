const { MessageEmbed } = require('discord.js');
const timeout = require('discord-timeout-js');
const fs = require('fs');
const ms = require('ms');

module.exports = async (client,message,args,argsF) => {

	const lock = '<:locked:1001383615625695292>'
	let user = message.mentions.users.first();
	let users = message.mentions.members.first();
	var works = client.memory.guilds[message.guild.id].members[message.author.id].item
	var dbus = client.memory.guilds[message.guild.id].members[message.author.id]
	
	var Timeout = client.Timeout

	if (!user) {
		let msg = ''
		for (let u of works) {
			msg += `*${u},* `
		}
    	let exampleEmbed = new MessageEmbed()
			.setColor(0x00ffff)
			.setThumbnail('https://media.discordapp.net/attachments/964245440755273840/1077542594470494208/UCoKbWh.png')
			.setTitle(`• × INVENTORY ${message.author.username} × •`)
			.setDescription(`<:work:962772893446586448> **Купленные предметы:** ${msg}`)

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
			// .setThumbnail('https://media.discordapp.net/attachments/964245440755273840/1077542594470494208/UCoKbWh.png')
			.setTitle(`• × INVENTORY ${user.username} × •`)
			.setDescription(`${works}`)

		message.channel.send({ embeds: [exampleEmbed] });		
	}
	





	
};	

module.exports.names = ["?inv"];
// ?job <name>