let Discord = require("discord.js");
let auth = require("./auth");
let roll = require("./roll");
let constants = require("./constants");
let client = new Discord.Client();

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", (message) => {
    if (message.content.startsWith("/r")) {
        message.channel.send(roll(message.content).toString());
    } else if (message.content.startsWith("/help")) {
        message.channel.send(constants.help);
    } else if (message.content.startsWith("ping")) {
        message.channel.send("pong");
    }
});

client.login(auth.token);