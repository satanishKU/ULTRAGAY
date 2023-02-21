const { MessageEmbed } = require('discord.js');
const timeout = require('discord-timeout-js');
const ms = require('ms');

module.exports = async (client,message,args,argsF) => {

	let user = message.mentions.users.first();
	let users = message.mentions.members.first();
	// const time = args[1];
	let reason = args.slice(1).join(' ');
	client.reason(reason)
	const lock = '<:locked:1001383615625695292>'
	const botRole = message.guild.members.resolve(client.user).roles.highest.position

	const input = '\n\n\n<:tips:964246401485799514> **?unmute <@ping> <reason>**\n\n**  └ <@ping> - пинг участника**\n\n**  └ <reason> - причина размута**'

	if (!message.member.permissions.has("MUTE_MEMBERS")) {

    	let exampleEmbed = new MessageEmbed()
			.setColor(0x2f3136)
			.setTitle('<:locked:1001383615625695292> Ой! Извините, но, похоже, у вас нет прав!')

		message.channel.send({ embeds: [exampleEmbed] });

	} else {

		if (!user) {

	    	let exampleEmbed = new MessageEmbed()
				.setColor(0x2f3136)
				.setDescription(`${lock} **Ой! Извините, но, похоже, вы не указали участника!**${input}`)

			message.channel.send({ embeds: [exampleEmbed] });

		} else {
			if (!client.memory.guilds[message.guild.id].members[user.id]) {
			    // var guilds = `${}`
			    console.log(message.guild.id)
			    client.memory.guilds[message.guild.id].members[user.id] = client.createMembers()
			    fs.writeFileSync(`./src/memory.json`, JSON.stringify(client.memory, null, '\t'))
			};
			let mentionedRole = message.mentions.members.first().roles.highest;
			let authorRole = message.member.roles.highest;

			if (mentionedRole.position > authorRole.position) {

		    	let exampleEmbed = new MessageEmbed()
					.setColor(0x2f3136)
					.setDescription(`${lock} **Ой! Извините, но, похоже, ${user.username} выше вас!**`)

				message.channel.send({ embeds: [exampleEmbed] });

			} else {
				if (mentionedRole.position == authorRole.position) {
			    	let exampleEmbed = new MessageEmbed()
						.setColor(0x2f3136)
						.setDescription(`${lock} **Ой! Извините, но, похоже, ${user.username} на одном уровне с вами!**`)

					message.channel.send({ embeds: [exampleEmbed] });

				} else {
					if (message.guild.owner == user) {

				    	let exampleEmbed = new MessageEmbed()
							.setColor(0x2f3136)
							.setDescription(`${lock} **Ой! Извините, но, похоже, ${user.username} является овнером и я не могу его размутить!**`)

						message.channel.send({ embeds: [exampleEmbed] });

					} else {

						if (user == message.author) {
			
					    	let exampleEmbed = new MessageEmbed()
								.setColor(0x2f3136)
								.setDescription(`${lock} **Ой! Извините, но, похоже, вы не можете размутить себя!**`)

							message.channel.send({ embeds: [exampleEmbed] });

						} else {

							if (mentionedRole.position > botRole.position) {
						    	
						    	let exampleEmbed = new MessageEmbed()
									.setColor(0x2f3136)
									.setDescription(`${lock} **Ой! Извините, но, похоже, ${user.username} выше меня!**`)

								message.channel.send({ embeds: [exampleEmbed] });								
							
							} else {

								try {

									if (users.permissions.has('ADMINISTRATOR')) {
								    	let exampleEmbed = new MessageEmbed()
											.setColor(0x2f3136)
											.setDescription(`${lock} **Ой! Извините, но, похоже, У человка есть право администратора! На него это не сработает!**`)

										message.channel.send({ embeds: [exampleEmbed] });



									} else {
										await users.timeout(10)
								    	let exampleEmbed = new MessageEmbed()
											.setColor(0x00ffff)
											.setTitle('• × UNMUTED × •')
											.setDescription(`<:support:962092843747377262> **Модератор**\n**NAME**: *${message.author.username}*, **ID**: *${message.author.id}*\n\n<:emoji_1:998486143320469505> **Участник**\n**NAME**: *${user.username}*, **ID**: *${user.id}*\n\n<:emoji_17:998504423477223476> **Причина**\n*${reason}*`)

										message.channel.send({ embeds: [exampleEmbed] });												
									};
								} catch {

							    	let exampleEmbed = new MessageEmbed()
										.setColor(0x2f3136)
										.setDescription(`${lock} **Ой! Извините, но, похоже, я не могу размутить человка! Если у человка есть право администратор то я не смогу его размутить! Проверьте всё ли вы сделали правельно. Если да то обратитесь в тех поддержку!**${input}`)

									message.channel.send({ embeds: [exampleEmbed] });

										
									
								};
							};
						};
					};
				};
			};
		};
	};
};	
module.exports.names = ["?unmute"];