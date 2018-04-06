const Discord = require("discord.js");
const auth = require("./Config/auth");
let roll = require("./roll");
const constants = require("./Config/constants");
let client = new Discord.Client();

client.on("ready", () => {
    console.log("I am ready!");
    client.user.setUsername("Dice Bot");
});

client.on("message", (message) => {
    if (message.content.startsWith("/r")) {
        message.channel.send(roll(message.content).toString());
    } else if (message.content.startsWith("/help")) {
        message.channel.send(constants.help);
    } else if (message.content.startsWith("ping")) {
        message.channel.send("pong");
    } else if (message.content.startsWith("ding")) {
        message.channel.send("dong");
    }
});

client.login(auth.token);