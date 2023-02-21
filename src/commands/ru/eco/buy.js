const { MessageEmbed } = require('discord.js');
const timeout = require('discord-timeout-js');
const fs = require('fs');
const ms = require('ms');

module.exports = async (client,message,args,argsF) => {

	const lock = '<:locked:1001383615625695292>'
	var works = client.memory.guilds[message.guild.id].shop
	var dbus = client.memory.guilds[message.guild.id].members[message.author.id]


	const input = '\n\n\n<:tips:964246401485799514> **?warns <@ping>**\n\n**└ <@ping> - пинг участника**'

	// if (!)
	// console.log(String(works))

	for (let names of works) {
		console.log(names)
		// names = names[1]


		if (String(works) == '') {
	    	let exampleEmbed = new MessageEmbed()
				.setColor(0x2f3136)
				.setDescription('<:locked:1001383615625695292> **Ой! Извините, но, похоже, в магазине нет предметов!**')

			message.channel.send({ embeds: [exampleEmbed] });
		} else {
			if (args[0] == names.name) {

				if (dbus.nal < names.cost) {
			    	let exampleEmbed = new MessageEmbed()
						.setColor(0x2f3136)
						.setDescription('<:locked:1001383615625695292> **Ой! Извините, но, похоже, у вас нет нужного количества средств в наличных!**')

					return message.channel.send({ embeds: [exampleEmbed] });					
				}

				dbus.item.push(names.name)

				dbus.nal - names.cost
				client.save()


				// client.save()
		    	let exampleEmbed = new MessageEmbed()
					.setColor(0x00ffff)
					.setDescription('<:shop:962773822656872508> **Вы успешно приобрели товар!**')

				message.channel.send({ embeds: [exampleEmbed] });
			
			} else {
		    	let exampleEmbed = new MessageEmbed()
					.setColor(0x2f3136)
					.setDescription('<:locked:1001383615625695292> **Ой! Извините, но, похоже, нет такого товара!**')

				message.channel.send({ embeds: [exampleEmbed] });
			}				
		}

	}		
	
};	

module.exports.names = ["?buy"];
// ?job <name>