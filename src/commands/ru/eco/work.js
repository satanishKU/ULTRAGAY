const { MessageEmbed } = require('discord.js');
const timeout = require('discord-timeout-js');
const fs = require('fs');
const ms = require('ms');

module.exports = async (client,message,args,argsF) => {

	const lock = '<:locked:1001383615625695292>'
	var works = client.memory.guilds[message.guild.id].work
	var dbus = client.memory.guilds[message.guild.id].members[message.author.id]
	var Timeout = client.Timeout

	const input = '\n\n\n<:tips:964246401485799514> **?warns <@ping>**\n\n**└ <@ping> - пинг участника**'

	// if (!)



    if(Timeout.has(`${message.author.id}`)) {
    	var times = ms(Timeout.get(`${message.author.id}`) - Date.now())
    	console.log(times)
    	if (times.endsWith('m')) {
    		times = times.slice(0,-1)
    		times = `*${times} минуту (ы/ут)*`
    		console.log(times)
    	
    	} else if (times.endsWith('s')) {
    		times = times.slice(0,-1)
    		times = `*${times} секунд (а/ы)*`
    		console.log(times)
    	}
    	let exampleEmbed = new MessageEmbed()
			.setColor(0x2f3136)
			.setDescription(`<:time:992737969045782549> **Отдохните ещё ${times}**`)

    	message.channel.send({ embeds: [exampleEmbed] })
    } else {





           // the user can type the command ... your command code goes here :)

        // Adds the user to the set so that they can't talk for a minute



		if (String(dbus.job) == 'NaN') {
	    	let exampleEmbed = new MessageEmbed()
				.setColor(0x2f3136)
				.setDescription('<:locked:1001383615625695292> **Ой! Извините, но, похоже, вы безработный!**')

			message.channel.send({ embeds: [exampleEmbed] });
		} else {


			dbus.nal += dbus.job.cost
			client.save()
	    	let exampleEmbed = new MessageEmbed()
				.setColor(0x00ffff)
				.setDescription(`<:partner:1003977319192473680> **Вы успешно заработали ${dbus.job.cost} <:money:972561293544411216>!**`)

			message.channel.send({ embeds: [exampleEmbed] });
		

	        // command.execute(client, message, args)
	        Timeout.set(`${message.author.id}`, Date.now() + 1800000)
	        setTimeout(() => {
	            Timeout.delete(`${message.author.id}`)
	        }, 1800000)
		
		}

	

			
	}	


	
};	

module.exports.names = ["?work"];
// ?job <name>