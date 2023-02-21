const { MessageEmbed } = require('discord.js');
const timeout = require('discord-timeout-js');
const fs = require('fs');
const ms = require('ms');

module.exports = async (client,message,args,argsF) => {

	let user = message.mentions.users.first();
	let users = message.mentions.members.first();
	// const time = args[1];
	let reason = args.slice(1).join(' ');
	client.reason(reason)
	const lock = '<:locked:1001383615625695292>'
	const botRole = message.guild.members.resolve(client.user).roles.highest.position

	const input = '\n\n\n<:tips:964246401485799514> **?warns <@ping>**\n\n**└ <@ping> - пинг участника**'

	// if (!)


	if (!user) {
		if (!client.memory.guilds[message.guild.id].members[message.author.id]) {
		    // var guilds = `${}`
		    console.log(message.guild.id)
		    client.memory.guilds[message.guild.id].members[message.author.id] = client.createMembers()
		    fs.writeFileSync(`./src/memory.json`, JSON.stringify(client.memory, null, '\t'))
		};
		let msg = ''
		var v = 0;
		for (let w of Object.entries(client.memory.guilds[message.guild.id].members[message.author.id].warns)) {
			// msg += `id ${w}`
			v += 1
			w = w[1]
			// console.log(w)
			if (w.reason == '') {
				w.reason = 'Не указана'
			}
			msg += `<:id:962271995142221845> **Id нарушения:** *${w.id}*\n<:emoji_17:998504423477223476> **Причина:** *${w.reason}*ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\n\n`

			// v = w
		}
		if (v == 0) {
			msg += '<:false:976408069875593227> **У вас нет предупреждений!**'
		}

    	let exampleEmbed = new MessageEmbed()
			.setColor(0x00ffff)
			.setTitle(`• × WARNS ${message.author.username} × •`)
			.setDescription(msg)


		// console.log(v)
		// console.log(w)
		message.channel.send({ embeds: [exampleEmbed] });

	} else {
		if (!client.memory.guilds[message.guild.id].members[user.id]) {
		    // var guilds = `${}`
		    console.log(message.guild.id)
		    client.memory.guilds[message.guild.id].members[user.id] = client.createMembers()
		    fs.writeFileSync(`./src/memory.json`, JSON.stringify(client.memory, null, '\t'))
		};
		let msg = ''
		var v = 0;
		for (let w of Object.entries(client.memory.guilds[message.guild.id].members[user.id].warns)) {
			// msg += `id ${w}`
			v += 1
			w = w[1]
			// console.log(w)
			if (w.reason == '') {
				w.reason = 'Не указана'
			}
			msg += `<:id:962271995142221845> **Id нарушения:** *${w.id}*\n<:emoji_17:998504423477223476> **Причина:** *${w.reason}*ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\n\n`

			// v = w
		}
		if (v == 0) {
			msg += '<:false:976408069875593227> **У пользователя нет предупреждений!**'
		}

    	let exampleEmbed = new MessageEmbed()
			.setColor(0x00ffff)
			.setTitle(`• × WARNS ${user.username} × •`)
			.setDescription(msg)


		// console.log(v)
		// console.log(w)
		message.channel.send({ embeds: [exampleEmbed] });

		

	};
	
};	

module.exports.names = ["?warns"];