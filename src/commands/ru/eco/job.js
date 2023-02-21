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

	if (args[0] == undefined || args[0] == '') {
		let msg = ''
		var v = 0;
		for (let w of Object.entries(client.memory.guilds[message.guild.id].work)) {
			// msg += `id ${w}`
			v += 1
			w = w[1]
			// console.log(w)
			msg += `<:work:962772893446586448> **Работа:** *${w.name}*\n<:money:972561293544411216> **Зарплата:** *${w.cost}* <:money:972561293544411216>ㅤㅤㅤㅤ\n\n`
			
			// v = w
		}
		if (v == 0) {
			msg += '<:false:976408069875593227> **Не найдено подходящих вакансий!**'
		}

		let exampleEmbed = new MessageEmbed()
			.setColor(0x00ffff)
			.setTitle(`• × WORKS \`${message.guild.name}\` × •`)
			.setDescription(msg)


		// console.log(v)
		// console.log(w)
		message.channel.send({ embeds: [exampleEmbed] });

	} else {


		for (let names of works) {


			if (String(dbus.job) != 'NaN') {
		    	let exampleEmbed = new MessageEmbed()
					.setColor(0x2f3136)
					.setDescription('<:locked:1001383615625695292> **Ой! Извините, но, похоже, вас уже наняли на работу!**')

				message.channel.send({ embeds: [exampleEmbed] });
			} else {
				if (args[0] == names.name) {

					dbus.job = {"name": names.name, "cost": names.cost}
					client.save()
			    	let exampleEmbed = new MessageEmbed()
						.setColor(0x2f3136)
						.setDescription('<:partner:1003977319192473680> **Вы успешно устроились на работу!**')

					message.channel.send({ embeds: [exampleEmbed] });
				
				} else {
			    	let exampleEmbed = new MessageEmbed()
						.setColor(0x2f3136)
						.setDescription('<:locked:1001383615625695292> **Ой! Извините, но, похоже, нет такой вакансии!**')

					message.channel.send({ embeds: [exampleEmbed] });
				}				
			}

		}		
	}

		


	
};	

module.exports.names = ["?job"];
// ?job <name>