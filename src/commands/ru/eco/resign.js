const { MessageEmbed } = require('discord.js');
const timeout = require('discord-timeout-js');
const fs = require('fs');
const ms = require('ms');

module.exports = async (client,message,args,argsF) => {

	const lock = '<:locked:1001383615625695292>'
	var works = client.memory.guilds[message.guild.id].work
	var dbus = client.memory.guilds[message.guild.id].members[message.author.id]

	const input = '\n\n\n<:tips:964246401485799514> **?warns <@ping>**\n\n**└ <@ping> - пинг участника**'

	// if (!)




	for (let names of works) {


		if (String(dbus.job) == 'NaN') {
	    	let exampleEmbed = new MessageEmbed()
				.setColor(0x2f3136)
				.setDescription('<:locked:1001383615625695292> **Ой! Извините, но, похоже, вы и так безработный!**')

			message.channel.send({ embeds: [exampleEmbed] });
		} else {


			dbus.job = 'NaN'
			client.save()
	    	let exampleEmbed = new MessageEmbed()
				.setColor(0x2f3136)
				.setDescription('<:partner:1003977319192473680> **Вы успешно уволились с работы!**')

			message.channel.send({ embeds: [exampleEmbed] });
	
		}

	}		


		


	
};	

module.exports.names = ["?resgin"];
// ?job <name>