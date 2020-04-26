const Discord = require("discord.js");

const fs = require('fs');

const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
});

client.on("message", async message => {
  setTimeout(() => {
    if (message.member.user.id == 703979369059581953 && message.content == "I am damn proud right now.") {
      message.channel.send("Atteeeeeeeeention!")
      setTimeout(() => {
        message.channel.send("That Heavy is dead!")
      }, 2000);
    }
    else if (message.member.user.id == 703985274992066691 && message.content == "We know!") {
      message.channel.send("Who killed him?!")
    }
    else if (message.member.user.id == 703985274992066691 && message.content == "We don’t know!") {
      message.channel.send("I will find clues!")
      setTimeout(() => {
        setTimeout(() => {
          message.channel.send("*sniff sniff sniff*")
          setTimeout(() => {
            message.channel.send("What's that?")
            setTimeout(() => {
              message.channel.send("A weapon?! That thing is why the Heavy is dead!")
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    }
    else if (message.member.user.id == 703985274992066691 && message.content == "The Heavy is dead?!") {
      message.channel.send("Yes, he died!")
    }
  }, 2000);
})


client.login(config.token);