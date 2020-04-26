const Discord = require("discord.js");

const fs = require('fs');

const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
});

client.on("message", async message => {
  setTimeout(() => {
    if (message.member.user.id == 703977408629440542 && message.content == "Oh, Seriously?! Who killed Heavy?!") {
      message.channel.send("It was me!")
      setTimeout(() => {
        message.channel.send("Yes! I did it like this!")
        setTimeout(() => {
          message.channel.send("Woop dee doo!")
          setTimeout(() => {
            message.channel.send("That’s a joke, lads.")
            setTimeout(() => {
              message.channel.send("It was… yo-... Him!")
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    }
    else if (message.member.user.id == 703979369059581953 && message.content == "How did you know?!") {
      message.channel.send("I didn’t. That was a joke too.")
      setTimeout(() => {
        message.channel.send("Oh, I’m dead.")
      }, 2000);
    }
  }, 2000);
})


client.login(config.token);