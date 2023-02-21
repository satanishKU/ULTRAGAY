const { MessageEmbed } = require('discord.js');
const timeout = require('discord-timeout-js');
const fs = require('fs');
const ms = require('ms');

module.exports = async (client,message,args,argsF) => {

	const lock = '<:locked:1001383615625695292>'

	const input = '\n\n\n<:tips:964246401485799514> **?warns <@ping>**\n\n**└ <@ping> - пинг участника**'

	// if (!)


	let msg = ''
	var v = 0;
	for (let w of Object.entries(client.memory.guilds[message.guild.id].shop)) {
		// msg += `id ${w}`
		v += 1
		w = w[1]
		// console.log(w)
		if (w.what == 'no') {
			msg += `<:shop:962773822656872508> **Название:** *${w.name}*\n<:economy:962750236571365438> **Цена:** *${w.cost} <:money:972561293544411216>*ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\n\n`
		} else {
			msg += `<:shop:962773822656872508> **Название:** *${w.name}*\n<:economy:962750236571365438> **Цена:** *${w.cost} <:money:972561293544411216>*\n<:roles:962279242266210314> **Роль:** *<@&${w.role}>*ㅤ\n\n`
		}
		// v = w
	}
	if (v == 0) {
		msg += '<:false:976408069875593227> **В магазине нет предметов!**'
	}

	let exampleEmbed = new MessageEmbed()
		.setColor(0x00ffff)
		.setTitle(`• × SHOP \`${message.guild.name}\` × •`)
		.setDescription(msg)


	// console.log(v)
	// console.log(w)
	message.channel.send({ embeds: [exampleEmbed] });

		


	
};	

module.exports.names = ["?shop"];