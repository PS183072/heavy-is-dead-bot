const Discord = require("discord.js");

const fs = require('fs');

const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
});

client.on("message", async message => {
  setTimeout(() => {
    if (message.member.user.id == 703977408629440542 && message.content == "Ok.") {
      message.channel.send("What's up, you wankers?! Who’s up for a- AH! What the- bloody hell just happened?!")
    }
    else if (message.member.user.id == 703979369059581953 && message.content == "The Heavy is dead!") {
      message.channel.send("The Heavy is dead?")
    }
    else if (message.member.user.id == 703985274992066691 && message.content == "So, did you see the murderer?") {
      message.channel.send("Nah, sorry mate.")
    }
    else if (message.member.user.id == 703985274992066691 && message.content == "*Slams hand on desk* I will find him, I will capture him, and no one will ever die again!") {
      message.channel.send("Ah, well that's nice.")
    }
    else if (message.member.user.id == 703985252191698985 && message.content == "A weapon?! That thing is why the Heavy is dead!") {
      message.channel.send("The Heavy is dead?!")
    }
    else if (message.member.user.id == 703979508910391337 && message.content == "In my medical opinion, that Heavy is dead!") {
      message.channel.send("Doc, what happened?")
    }
    else if (message.member.user.id == 703979508910391337 && message.content == "The Heavy was killed!") {
      message.channel.send("Ahh!")
    }
    else if (message.member.user.id == 703977408629440542 && message.content == "I think Heavy is dead.") {
      message.channel.send("The Heavy is dead?!?!")
    }
  }, 2000);
})


client.login(config.token);