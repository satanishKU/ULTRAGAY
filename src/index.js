const { Client, Intents, Collection } = require('discord.js');
const fs = require('fs');
const { EmbedBuilder } = require('discord.js');

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
});

require('./events')(client);
// require('./commands/ru')(client);

client.commands = new Collection();

let commandFiles = fs.readdirSync('./src/commands/ru/mod');

for (const fileMod of commandFiles) {
    let comand = require(`./commands/ru/mod/${fileMod}`);
    comand.names.forEach(el => {
        client.commands.set(el, comand);
    });
};

commandFiles = fs.readdirSync('./src/commands/ru/eco');

for (const fileEco of commandFiles) {
    comand = require(`./commands/ru/eco/${fileEco}`);
    comand.names.forEach(el => {
        client.commands.set(el, comand);
    });
};


console.log(client.commands);
client.login('')

client.memory = require('./memory.json');

client.createGuild = () => {
    return {
        lang: 1,
        // id: guild.id,
        members: {},
        premium: 0,
        shop: [],
        work: [],
        mf: {}
    };
    fs.writeFileSync(`./src/memory.json`, JSON.stringify(client.memory, null, '\t'))
};

client.save = () => {
    return fs.writeFileSync(`./src/memory.json`, JSON.stringify(client.memory, null, '\t'))
}

client.createMembers = () => {
    return {
        reg: 0,
        warn: 0,
        warns: [],
        job: "NaN",
        bank: 0,
        nal: 0,
        jc: 0,
        item: [],
        vc: {}
    };
    fs.writeFileSync(`./src/memory.json`, JSON.stringify(client.memory, null, '\t'))
}

client.Timeout = new Collection();

client.random = () => {
    let a = Math.random() * (99999 - 1) + 1;
    a = Math.floor(a/1)
    return a
}

client.addWarns = (warnId, reason) => {
    return {
        id: warnId,
        reason: reason
    }
    fs.writeFileSync(`./src/memory.json`, JSON.stringify(client.memory, null, '\t'))
}

client.reason = (reason) => {
    if (reason == undefined) {
        reason = 'не указана'
    }
    return reason
}

fs.writeFileSync(`./src/memory.json`, JSON.stringify(client.memory, null, '\t'))