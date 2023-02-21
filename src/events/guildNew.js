module.exports = (client, guild) => {
	if (!client.memory.guilds[guild.id]) {
		client.memory.guilds[guild.id] = client.createGuild(guild)
		for (let member of guild.members.cache) {
			if (!client.memory.guilds[guild.id].members[member.id]) {
				client.memory.guilds[guild.id].members[member.id] = client.createMembers(member)
			}
		};		
	}
};