const { MessageEmbed } = require('discord.js');
const timeout = require('discord-timeout-js');
const fs = require('fs');
const ms = require('ms');

module.exports = async (client,message,args,argsF) => {

	// let role = message.mentions.roles.first();
	// let users = message.mentions.members.first();
	// const time = args[1];
	// let reason = args.slice(1).join(' ');
	// client.reason(reason)
	var name = args[0]
	var cost = args[1]
	// var what = args[2]
	let role = message.mentions.roles.first();
	const lock = '<:locked:1001383615625695292>'
	const connect = client.memory.guilds[message.guild.id]
	const botRole = message.guild.members.resolve(client.user).roles.highest.position

	const input = '\n\n\n<:tips:964246401485799514> **?warn <@ping> <reason>**\n\n**  └ <@ping> - пинг участника**\n\n**  └ <reason> - причина предупреждения**'

	// if (!)

	if (!message.member.permissions.has("ADMINISTRATOR")) {

    	let exampleEmbed = new MessageEmbed()
			.setColor(0x2f3136)
			.setDescription('<:locked:1001383615625695292> **Ой! Извините, но, похоже, у вас нет прав!**')

		message.channel.send({ embeds: [exampleEmbed] });

	} else {
		if (!name) {
	    	let exampleEmbed = new MessageEmbed()
				.setColor(0x2f3136)
				.setDescription('<:locked:1001383615625695292> **Ой! Извините, но, похоже, вы не указали название вакансии!**')

			message.channel.send({ embeds: [exampleEmbed] });			
		} else {
			
			let dq = 0;

			for (let names of connect.work) {
				if (name == names.name) {

					dq += 1;

			    	let exampleEmbed = new MessageEmbed()
						.setColor(0x2f3136)
						.setDescription('<:locked:1001383615625695292> **Ой! Извините, но, похоже, эта работа уже добавлена в список!**')

					return message.channel.send({ embeds: [exampleEmbed] });
					break

				}
			}

			if (dq == 1) {
				return 0
			}

			if (!cost) {
		    	let exampleEmbed = new MessageEmbed()
					.setColor(0x2f3136)
					.setDescription('<:locked:1001383615625695292> **Ой! Извините, но, похоже, вы не указали зарпалту!**')

				message.channel.send({ embeds: [exampleEmbed] });
			} else {
				cost = Number(cost)
				if (typeof(cost) !== typeof(2) || String(cost) == 'NaN') {
			    	let exampleEmbed = new MessageEmbed()
						.setColor(0x2f3136)
						.setDescription('<:locked:1001383615625695292> **Ой! Извините, но, похоже, вы должны указать число в зарплате!**')

					message.channel.send({ embeds: [exampleEmbed] });
				} else {
					try {

						connect.work.push({'name': name, "cost": cost})
						client.save()
				    	let exampleEmbed = new MessageEmbed()
							.setColor(0x00ffff)
							.setDescription('**<:shop:962773822656872508> Вакансия была успешно добавлена в ваш магазин!**')

						message.channel.send({ embeds: [exampleEmbed] });								
					} catch {
				    	let exampleEmbed = new MessageEmbed()
							.setColor(0x00ffff)
							.setDescription('**<:shop:962773822656872508> произошла не извсетная ошибка! Пожалуйста, обратитесь в службу поддержки!**')

						message.channel.send({ embeds: [exampleEmbed] });
					}

					
				}
			}
		}
	};
};	
module.exports.names = ["?addwork"];
// ?additem <name> <cost> <yes/no> $[if(no) => <role>]