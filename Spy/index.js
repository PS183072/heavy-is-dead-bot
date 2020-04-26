const Discord = require("discord.js");

const fs = require('fs');

const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
});

client.on("message", async message => {
  setTimeout(() => {
    if (message.member.user.id == 703979369059581953 && message.content == "heh heh heh heh heh heh- Aw shucks!") {
      message.channel.send("bum badum bum badum bum bum")
      setTimeout(() => {
        message.channel.send("Oh! The Heavy is dead!")
      }, 2000);
    }
    else if (message.member.user.id == 703977408629440542 && message.content == "Yes. I am dead!") {
      message.channel.send("Why is the Heavy dead?!")
    }
    else if (message.member.user.id == 703977408629440542 && message.content == "I think it was-") {
      message.channel.send("Shhh, you are dead!")
    }
    else if (message.member.user.id == 703985230385512510 && message.content == "What's up, you wankers?! Who’s up for a- AH! What the- bloody hell just happened?!") {
      message.channel.send("The Heavy is dead!")
    }
    else if (message.member.user.id == 703985230385512510 && message.content == "The Heavy is dead?") {
      message.channel.send("Correct!")
      setTimeout(() => {
        message.channel.send("So, did you see the murderer?")
      }, 2000);
    }
    else if (message.member.user.id == 703985230385512510 && message.content == "Nah, sorry mate.") {
      message.channel.send("*Slams hand on desk* I will find him, I will capture him, and no one will ever die again!")
    }
    else if (message.member.user.id == 703985252191698985 && message.content == "That Heavy is dead!") {
      message.channel.send("We know!")
    }
    else if (message.member.user.id == 703985252191698985 && message.content == "Who killed him?!") {
      message.channel.send("We don’t know!")
    }
    else if (message.member.user.id == 703985252191698985 && message.content == "A weapon?! That thing is why the Heavy is dead!") {
      message.channel.send("The Heavy is dead?!")
    }
    else if (message.member.user.id == 703979508910391337 && message.content == "The Heavy was killed!") {
      message.channel.send("Ahh!")
    }
    else if (message.member.user.id == 703979508910391337 && message.content == "I don’t think it’s anything to worry about.") {
      message.channel.send("Well, now what?")
    }
    else if (message.member.user.id == 703985188153196654 && message.content == "Clipidy clop motherfuckers!") {
      message.channel.send("Oh, come on.")
    }
    else if (message.member.user.id == 703985188153196654 && message.content == "Ahm...") {
      message.channel.send("Yes, yes, Scout.")
    }
    else if (message.member.user.id == 703985188153196654 && message.content == "Yea?") {
      message.channel.send("Go home!")
    }
    else if (message.member.user.id == 703985188153196654 && message.content == "Ah come on! Pffff! Freaking unbelievable seriously, you all suck.") {
      message.channel.send("Ok, let’s get back to the point.")
    }
    else if (message.member.user.id == 703977408629440542 && message.content == "I think Heavy is dead.") {
      message.channel.send("The Heavy is dead?!?!")
    }
    else if (message.member.user.id == 703979369059581953 && message.content == "That’s right! It was me!") {
      message.channel.send("You monster!")
    }
    else if (message.member.user.id == 703979369059581953 && message.content == "*Arguing*") {
      message.channel.send("**IT’S TRADITION**")
    }
    else if (message.member.user.id == 703977408629440542 && message.content == "You are dead! Not big surprise.") {
      message.channel.send("Well that was idiotic.")
      setTimeout(() => {
        message.channel.send("Off to hang myself!")
        setTimeout(() => {
          message.channel.send("Watch and lea- *Choking noises*")
        }, 2000);
      }, 2000);
    }
  }, 2000);
})

client.login(config.token);