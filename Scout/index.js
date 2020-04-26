const Discord = require("discord.js");

const fs = require('fs');

const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
});

client.on("message", async message => {
  setTimeout(() => {
    if (message.member.user.id == 703985274992066691 && message.content == "Well, now what?") {
      message.channel.send("Clipidy clop motherfuckers!")
    }
    else if (message.member.user.id == 703985274992066691 && message.content == "Oh, come on.") {
      message.channel.send("Boom!")
      setTimeout(() => {
        message.channel.send("Look at this! The freaking Heavy is dead!")
        setTimeout(() => {
          message.channel.send("What do you think of that?")
          setTimeout(() => {
            message.channel.send("Ahm...")
          }, 2000);
        }, 2000);
      }, 2000);
    }
    else if (message.member.user.id == 703985274992066691 && message.content == "Yes, yes, Scout.") {
      message.channel.send("Yea?")
    }
    else if (message.member.user.id == 703985274992066691 && message.content == "Go home!") {
      message.channel.send("Ah come on! Pffff! Freaking unbelievable seriously, you all suck.")
    }
  }, 2000);
})


client.login(config.token);