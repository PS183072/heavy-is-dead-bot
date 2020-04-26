const Discord = require("discord.js");

const fs = require('fs');

const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
});

client.on("message", async message => {
  setTimeout(() => {
    if (message.member.user.id == 703985252191698985 && message.content == "Yes, he died!") {
      message.channel.send("Incoming!")
      setTimeout(() => {
        message.channel.send("Raus, raus!")
        setTimeout(() => {
          message.channel.send("Move now!")
          setTimeout(() => {
            message.channel.send("*smooch*")
          }, 2000);
        }, 2000);
      }, 2000);
    }
    else if (message.member.user.id == 703977408629440542 && message.content == "Hohoho, Hea- Explodes Oof.") {
      message.channel.send("In my medical opinion, that Heavy is dead!")
    }
    else if (message.member.user.id == 703985230385512510 && message.content == "Doc, what happened?") {
      message.channel.send("My professional opinion?")
      setTimeout(() => {
        message.channel.send("The Heavy was killed!")
      }, 2000);
    }
    else if (message.member.user.id == 703985230385512510 && message.content == "Ahh!") {
      message.channel.send("I don’t think it’s anything to worry about.")
    }
    else if (message.member.user.id == 703977408629440542 && message.content == "I think Heavy is dead.") {
      message.channel.send("The Heavy is dead?!?!")
      setTimeout(() => {
        message.channel.send("Scout! I will heal you- :boom:")
      }, 2000);
    }
  }, 2000);
})


client.login(config.token);