const { MessageEmbed } = require('discord.js');
const timeout = require('discord-timeout-js');
const fs = require('fs');
const ms = require('ms');

module.exports = async (client,message,args,argsF) => {

	let user = message.mentions.users.first();
	let users = message.mentions.members.first();
	// const time = args[1];
	let idd = args[1]
	let reason = args.slice(2).join(' ');
	client.reason(reason)
	const lock = '<:locked:1001383615625695292>'
	const botRole = message.guild.members.resolve(client.user).roles.highest.position

	const input = '\n\n\n<:tips:964246401485799514> **?unwarn <@ping> <reason>**\n\n**  └ <@ping> - пинг участника**\n\n**  └ <reason> - причина снятия предупреждения**'

	// if (!)

	if (!message.member.permissions.has("KICK_MEMBERS")) {

    	let exampleEmbed = new MessageEmbed()
			.setColor(0x2f3136)
			.setTitle('<:locked:1001383615625695292> **Ой! Извините, но, похоже, у вас нет прав!**')

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
							.setDescription(`${lock} **Ой! Извините, но, похоже, ${user.username} является овнером и я не могу его забрать варн!**`)

						message.channel.send({ embeds: [exampleEmbed] });

					} else {

						if (user == message.author) {
			
					    	let exampleEmbed = new MessageEmbed()
								.setColor(0x2f3136)
								.setDescription(`${lock} **Ой! Извините, но, похоже, вы не можете забрать варн у себя!**`)

							message.channel.send({ embeds: [exampleEmbed] });

						} else {

							if (mentionedRole.position > botRole.position) {
						    	
						    	let exampleEmbed = new MessageEmbed()
									.setColor(0x2f3136)
									.setDescription(`${lock} **Ой! Извините, но, похоже, ${user.username} выше меня!**`)

								message.channel.send({ embeds: [exampleEmbed] });								
							
							} else {

								var v = 0
								if (client.memory.guilds[message.guild.id].members[user.id].warn === 0) {
									// console.log(w)
									v += 1
								// if (v == 0) {
							    	let exampleEmbed = new MessageEmbed()
										.setColor(0x2f3136)
										.setDescription(`${lock} **Ой! Извините, но, похоже, у ${user.username} нет предупреждений!**`)

									return message.channel.send({ embeds: [exampleEmbed] });										

								}



								if (idd == '' || idd == undefined) {
									if (v == 0) {
								    	let exampleEmbed = new MessageEmbed()
											.setColor(0x2f3136)
											.setDescription(`${lock} **Ой! Извините, но, похоже, вы не указали номер предупреждения!**`)

										return message.channel.send({ embeds: [exampleEmbed] });										
									}
								}
								var i = 0

								for (let w of Object.entries(client.memory.guilds[message.guild.id].members[user.id].warns)) {
									w = w[1]
									if (idd == w.id) {
										i += 1;
										break
									}
								}

								if (i == 0) {
							    	let exampleEmbed = new MessageEmbed()
										.setColor(0x2f3136)
										.setDescription(`${lock} **Ой! Извините, но, похоже, вы указали не верный номер предупреждения!**`)

									return message.channel.send({ embeds: [exampleEmbed] });									
								}


								try {

									if (users.permissions.has('ADMINISTRATOR')) {
								    	let exampleEmbed = new MessageEmbed()
											.setColor(0x2f3136)
											.setDescription(`${lock} **Ой! Извините, но, похоже, у ${user.username} есть право администратора! На него это не сработает!**`)

										message.channel.send({ embeds: [exampleEmbed] });



									} else {
										var ns;
										client.memory.guilds[message.guild.id].members[user.id].warns.forEach(w => {
											var cs = w
											w = cs
											console.log(w, cs)
											const index = client.memory.guilds[message.guild.id].members[user.id].warns.indexOf(cs)

											if (idd == w.id) {
												client.memory.guilds[message.guild.id].members[user.id].warns.splice(index, 1);
												// break
											}
										})										

										client.memory.guilds[message.guild.id].members[user.id].warn -= 1
										client.save()
										let mat = client.random()
										client.memory.guilds[message.guild.id].members[user.id].warns.push({"id": `${mat}`, "reason": `${reason}`})
										client.save()
								    	let exampleEmbed = new MessageEmbed()
								    		.setThumbnail('https://cdn.discordapp.com/emojis/962769108548587530.png?v=1&size=48&quality=lossless')
											.setColor(0x00ffff)
											.setTitle('• × GIVE WARN × •')
											.setDescription(`<:support:962092843747377262> **Модератор**\n**NAME**: *${message.author.username}*, **ID**: *${message.author.id}*\n\n<:emoji_1:998486143320469505> **Участник**\n**NAME**: *${user.username}*, **ID**: *${user.id}*\n\n<:emoji_17:998504423477223476> **Причина**\n*${reason}*`)

										message.channel.send({ embeds: [exampleEmbed] });												
									};
								} catch {

							    	let exampleEmbed = new MessageEmbed()
										.setColor(0x2f3136)
										.setDescription(`${lock} **Ой! Извините, но, похоже, я не могу забрать варн ${user.username}! Если у ${user.username} есть право администратор то я не смогу его забрать варн! Проверьте всё ли вы сделали правельно. Если да то обратитесь в тех поддержку!**${input}`)

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
module.exports.names = ["?unwarn"];