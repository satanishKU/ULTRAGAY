const fs = require('fs')

module.exports = async (client, message) => {
    if(message.author.bot) return;
    const {content, author, guild} = message;
    
    if (!client.memory.guilds[message.guild.id]) {
        // console.log(message.guilld.name)
        client.memory.guilds[message.guild.id] = client.createGuild()
        fs.writeFileSync(`./src/memory.json`, JSON.stringify(client.memory, null, '\t'))        
    };

    if (!client.memory.guilds[message.guild.id].members[message.author.id]) {
        // var guilds = `${}`
        // console.log(message.guild.name)
        client.memory.guilds[message.guild.id].members[message.author.id] = client.createMembers()
        fs.writeFileSync(`./src/memory.json`, JSON.stringify(client.memory, null, '\t'))
    };


    const 
        messageArray = content.split(' '), 
        command = messageArray[0],
        args = messageArray.slice(1), 
        messageArrayFull = content.split(' '), 
        argsF = messageArrayFull.slice(1),
        commandRun = client.commands.get(command);

    if(commandRun) {
        commandRun(client,message,args,argsF)
        .catch(err => console.error(err));
        //.then(any => console.log(any))
    }; 
};