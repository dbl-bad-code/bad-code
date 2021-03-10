const Discord = require('discord.js');
const moment = require("moment");
 
module.exports = {
    name: 'userinfo',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}userinfo',
};
 
const status = {
    online: "Online",
    idle: "Idle",
    dnd: "Do Not Disturb",
    offline: "Offline/Invisible",
};
exports.name = 'userinfo';
exports.execute = (client, message, args) =>{
    var permissions = [];
    var acknowledgements = 'None';
    var permissions = [];
    var acknowledgements = 'None';
 
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
 
    if(message.member.hasPermission("KICK_MEMBERS")){
        permissions.push("Kick Members");
    }
 
    if(message.member.hasPermission("BAN_MEMBERS")){
        permissions.push("Ban Members");
    }
 
    if(message.member.hasPermission("ADMINISTRATOR")){
        permissions.push("Administrator");
    }
 
    if(message.member.hasPermission("MANAGE_MESSAGES")){
        permissions.push("Manage Messages");
    }
 
    if(message.member.hasPermission("MANAGE_CHANNELS")){
        permissions.push("Manage Channels");
    }
 
    if(message.member.hasPermission("MENTION_EVERYONE")){
        permissions.push("Mention Everyone");
    }
 
    if(message.member.hasPermission("MANAGE_NICKNAMES")){
        permissions.push("Manage Nicknames");
    }
 
    if(message.member.hasPermission("MANAGE_ROLES")){
        permissions.push("Manage Roles");
    }
 
    if(message.member.hasPermission("MANAGE_WEBHOOKS")){
        permissions.push("Manage Webhooks");
    }
 
    if(message.member.hasPermission("MANAGE_EMOJIS")){
        permissions.push("Manage Emojis");
    }
 
    if(permissions.length == 0){
        permissions.push("No Key Permissions Found");
    }
 
    if(member.user.id == message.guild.ownerID){
        acknowledgements = 'Server Owner';
    }
 
    const embed = new Discord.MessageEmbed()
        .setDescription(`<@${member.user.id}>`)
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL({ dynamic: true, format: 'png', size: 2048 }))
        .setColor('RANDOM')
        .setFooter(`ID: ${message.author.id}`)
        .setThumbnail(member.user.displayAvatarURL())
        .setTimestamp()
        .addField("Full Username", `${member.user.tag}`, true)
        .addField("ID", member.user.id, true)
        .addField("Status",`${status[member.user.presence.status]}`, true)
        .addField("Nickname", `${member.nickname !== null ? `${client.emotes.success} Nickname: ${member.nickname}` : "<:TS_Uncheck:818939970650636318> None"}`, true)
        .addField('Joined at: ',`${moment(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
        .addField("Created at: ",`${moment(message.author.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
        .addField("Permissions: ", `${permissions.join(', ')}`, true)
        .addField(`Roles [${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).length}]`,`${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id }>`).join(" **|** ") || "No Roles"}`, true)
        .addField("Acknowledgements: ", `${acknowledgements}`, true);
 
    message.channel.send({embed});
}
