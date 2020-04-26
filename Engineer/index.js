const Discord = require("discord.js");

const fs = require('fs');

const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
});

client.on("message", async message => {
  setTimeout(() => {
    if (message.member.user.id == 703977408629440542 && message.content == "Ya-da-da-da-da-da- It is good day to be not dead!") {
      message.channel.send("POW! You are dead!")
    }
    else if (message.member.user.id == 703977408629440542 && message.content == "I am dead!") {
      message.channel.send("heh heh heh heh heh heh- Aw shucks!")
    }
    else if (message.member.user.id == 703985274992066691 && message.content == "Why is the Heavy dead?!") {
      message.channel.send("I dunno.")
    }
    else if (message.member.user.id == 703977408629440542 && message.content == "I think it was-") {
      message.channel.send("Shhh, you are dead!")
    }
    else if (message.member.user.id == 703985230385512510 && message.content == "What's up, you wankers?! Who’s up for a- AH! What the- bloody hell just happened?!") {
      message.channel.send("The Heavy is dead!")
    }
    else if (message.member.user.id == 703985274992066691 && message.content == "So, did you see the murderer?") {
      message.channel.send("Nah, sorry mate.")
    }
    else if (message.member.user.id == 703985230385512510 && message.content == "Ah, well that's nice.") {
      message.channel.send("I am damn proud right now.")
    }
    else if (message.member.user.id == 703985252191698985 && message.content == "A weapon?! That thing is why the Heavy is dead!") {
      message.channel.send("The Heavy is dead?!")
    }
    else if (message.member.user.id == 703979508910391337 && message.content == "The Heavy was killed!") {
      message.channel.send("Ahh!")
    }
    else if (message.member.user.id == 703977408629440542 && message.content == "I think Heavy is dead.") {
      message.channel.send("The Heavy is dead?!?!")
    }
    else if (message.member.user.id == 703979243410817136 && message.content == "It was… yo-... Him!") {
        message.channel.send("How did you know?!")
    }
    else if (message.member.user.id == 703979243410817136 && message.content == "Oh, I’m dead.") {
      message.channel.send("*Maniacal laughter*")
      setTimeout(() => {
        message.channel.send("That’s right! It was me!")
      }, 2000);
    }
    else if (message.member.user.id == 703977408629440542 && message.content == "But whyyyyy?") {
      message.channel.send("Cause you’re fat, boy.")
      setTimeout(() => {
        message.channel.send("And another thing, you’re ugly.")
      }, 2000);
    }
    else if (message.member.user.id == 703977408629440542 && message.content == "Engineer, stop!") {
      message.channel.send("*Arguing*")
    }
    else if (message.member.user.id == 703985274992066691 && message.content == "**IT’S TRADITION**") {
      message.channel.send("Ah dammit Heavy fuck off! You are dead.")
    }
  }, 2000);
})

client.login(config.token);