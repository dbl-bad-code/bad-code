const Discord = require('discord.js');


const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});
client.on('message', message => {
  if (message.content === `${prefix}ping`) {
    message.channel.send('pong');
  }
});
const { Client, Attachment } = require("discord.js");
client.on('message', message => {
  if (message.content === `${prefix}avatar`) {
    message.reply(message.author.avatarURL);
  }
});
client.on('message', message => {
    if (message.content === `${prefix}rip`) {
        const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
        message.channel.send(attachment);
    }
});
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'member-log')
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});
client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith(`${prefix}kick`)) {
    const user = message.mentions.users.first();

    if (user) {
      const member = message.guild.member(user);
      if (member) {

        member.kick('Optional reason that will display in the audit logs').then(() => {
          message.reply(`Successfully kicked ${user.tag}`);
        }).catch(err => {
          message.reply('I was unable to kick the member');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('You didn\'t mention the user to kick!');
    }
  }
});
client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith(`${prefix}ban`)) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);

      if (member) {
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          message.reply(`Successfully banned ${user.tag}`);
        }).catch(err => {
          message.reply('I was unable to ban the member');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('You didn\'t mention the user to ban!');
    }
  }
});
client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith(`${prefix}latency`)) {
        message.channel.send(`${client.ping}ms`)
    }
},);
client.on('message', message => {
	if (!message.guild) return;
	if (message.content.startsWith(`${prefix}support`)) {
		message.channel.send('https://discord.gg/6jJx4RX')
}});
client.on('message', message => {
  if (!message.guild) return;
if (message.content.startsWith(`${prefix}help`)) {
message.channel.send('Here is my commands! All must be prefixed with y? help ping latency ban kick support rip')  
}});
client.on('message', message => {
if (!message.guild) return;
if (message.content.startsWith(`${prefix}botinfo`)) {
message.channel.send({embed: {
color: 3447003
author: {
name: client.user.username,
icon_url: client.user.avatarURL
},
title: "Bot info",

url: "https://sites.google.com/view/yellow-hat-bot/home",

description: "Yellow Hat bot website",
    
fields: [{
 name: "Yellow Hat Bot, version 1.0.0",
value: "Yellow Hat is a bot created by DV54321#0385"
},
client.login(token);
