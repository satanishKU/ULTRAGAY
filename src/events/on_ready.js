const fs = require('fs');
module.exports = async (client) => {
	console.log('very good')
		// for (let guild of client.guilds.array()) {

	client.guilds.cache.forEach(guild => {
		let count = 0
		guild.members.cache.each(member => {
			count += 1
		});
		if (count > 3) {
			console.log(guild.name)
		}
	})
	// }
}