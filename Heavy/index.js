const Discord = require("discord.js");

const fs = require('fs');

const client = new Discord.Client();

var bPlaying = []

const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
});

client.on("message", async message => {
  if (message.content.toLowerCase() == "heavy is dead" && bPlaying[message.guild] == false || bPlaying[message.guild] == undefined) {
    bPlaying[message.guild] = true;
    setTimeout(() => {
      message.channel.send("Ya-da-da-da-da-da- It is good day to be not dead!")
    }, 2000);
  }
    
  setTimeout(() => {
    if (message.member.user.id == 703979369059581953 && message.content == "POW! You are dead!") {
      message.channel.send("I am dead!")
    }
    else if (message.member.user.id == 703985274992066691 && message.content == "Oh! The Heavy is dead!") {
      message.channel.send("Yes. I am dead!")
    }
    else if (message.member.user.id == 703979369059581953 && message.content == "I dunno.") {
      message.channel.send("I think it was-")
    }
    else if (message.member.user.id == 703979369059581953 && message.content == "Shhh, you are dead!") {
      message.channel.send("Ok.")
    }
    else if (message.member.user.id == 703979508910391337 && message.content == "*smooch*") {
      message.channel.send("Hohoho, Hea- Explodes Oof.")
    }
    else if (message.member.user.id == 703985274992066691 && message.content == "Ok, let’s get back to the point.") {
      message.channel.send("I think Heavy is dead.")
    }
    else if (message.member.user.id == 703979508910391337 && message.content == "Scout! I will heal you- :boom:") {
      message.channel.send("Oh, Seriously?! Who killed Heavy?!")
    }
    else if (message.member.user.id == 703985274992066691 && message.content == "You monster!") {
      message.channel.send("But whyyyyy?")
    }
    else if (message.member.user.id == 703979369059581953 && message.content == "And another thing, you’re ugly.") {
      message.channel.send("Engineer, stop!")
      setTimeout(() => {
        message.channel.send("*Arguing*")
      }, 2000);
    }
    else if (message.member.user.id == 703979369059581953 && message.content == "Ah dammit Heavy fuck off! You are dead.") {
      message.channel.send("No u, POW! Haha.")
      setTimeout(() => {
        message.channel.send("You are dead! Not big surprise.")
      }, 2000);
    }
    else if (message.member.user.id == 703985274992066691 && message.content == "Watch and lea- *Choking noises*") {
      message.channel.send("I am alive!")
      setTimeout(() => {
        message.channel.send("Is nice.")
        setTimeout(() => {
          message.channel.send("Yes, this is stupid.")
          bPlaying[message.guild] = false;
        }, 2000);
      }, 2000);
    }
  }, 2000);
})

client.login(config.token);