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
	var what = args[2]
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
				.setDescription('<:locked:1001383615625695292> **Ой! Извините, но, похоже, вы не указали название товара!**')

			message.channel.send({ embeds: [exampleEmbed] });			
		} else {
			
			let dq = 0;
			let s;
			for (let names of connect.shop) {
				if (name == names.name) {

					dq += 1;
					s = names

					break

				}
			}

			if (dq == 0) {
		    	let exampleEmbed = new MessageEmbed()
					.setColor(0x2f3136)
					.setDescription('<:locked:1001383615625695292> Извините, но, похоже, такого товара нет!')

				return message.channel.send({ embeds: [exampleEmbed] });
			}


			try {
				connect.shop.splice(s, 1)
				client.save()
		    	let exampleEmbed = new MessageEmbed()
					.setColor(0x00ffff)
					.setDescription('<:shop:962773822656872508> Товар был успешно удалён из вашего магазина!')

				message.channel.send({ embeds: [exampleEmbed] });								
			} catch {
		    	let exampleEmbed = new MessageEmbed()
					.setColor(0x00ffff)
					.setDescription('<:shop:962773822656872508> произошла не извсетная ошибка! Пожалуйста, обратитесь в службу поддержки!')

				message.channel.send({ embeds: [exampleEmbed] });
			}

					
				
		}
	};
}
module.exports.names = ["?delitem"];
// ?additem <name> <cost> <yes/no> $[if(no) => <role>]