const db = require("quick.db");
const discord = require("discord.js");
const client = new discord.Client({ disableEveryone: true });
client.login("");
const fetch = require("node-fetch");
const fs = require("fs");
require("express")().listen(1343);

client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == "o.token") {
    var link = spl[1];
    message.channel.send('**Lan SG Token İsteme**');
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == "sa") {
    var link = spl[1];
    message.channel.send('**Aleyküm Selam Kardeşim.**');
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == "as") {
    var link = spl[1];
    message.channel.send('**Aleyküm Selam Kardeşim.**');
  }
});

//UPTİME

const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log("Pinglenmedi.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

//OYNUYOR KISMI

client.on("ready", () => {
  console.log("Bot Aktif");
  let playing = client.voice.connections.size;

  client.user.setPresence({
    activity: {
      name: "www.bowbot.cf",
      type: "WATCHING",
      url: "https://ping405.glitch.me/"
    }
  });
});

setInterval(() => {
  var links = db.get("linkler");
  if (!links) return;
  var linkA = links.map(c => c.url);
  linkA.forEach(link => {
    try {
      fetch(link);
    } catch (e) {
      console.log("" + e);
    }
  });
  console.log("Pinglendi.");
}, 60000);

client.on("ready", () => {
  if (!Array.isArray(db.get("linkler"))) {
    db.set("linkler", []);
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == "o.") {
    var link = spl[1];
    fetch(link)
      .then(() => {
        if (
          db
            .get("linkler")
            .map(z => z.url)
            .includes(link)
        )
             return message.channel.send(new discord.MessageEmbed().setFooter("JET").setColor("RED").setDescription("Projeniz Sistemimizde Zaten Var"));
        message.channel.send(new discord.MessageEmbed().setFooter("JET").setColor("RED").setDescription("Projeniz Sistemimize Başarıyla Eklendi."));
        db.push("linkler", { url: link, owner: message.author.id });
      })
      .catch(e => {
        return message.channel.send(new discord.MessageEmbed().setFooter("JET").setColor("RED").setDescription("Lütfen Bir Link Giriniz"));
      });
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == "j.göster") {
    var link = spl[1];
    message.channel.send(new discord.MessageEmbed().setFooter("JET").setColor("RED").setDescription(`${db.get("linkler").length} Proje Aktif Tutuluyor!`));
  }
});

const help = new discord.MessageEmbed()
.setFooter("FLY")
.setColor("PURPLE")
.setThumbnail('https://i.imgur.com/4M7IWwP.gif')
.addField('**Yardım Komutları**',`
\n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
**\n c.koruma : Koruma Komutlarını Gösterir.**
**\n c.eğlence : Eğlence Komutlarını Gösterir.**
**\n c.kullanıcı : Kullanıcı Komutlarını Gösterir.**
**\n c.moderasyon : Moderasyon Komutlarını Gösterir.**
**\n c.ping : Botun Pingini Gösterir.**
**\n c.istatistik : Botun İstatistik lerini Gösterir.**
\n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

`)
.setImage("https://cdn.discordapp.com/attachments/805723376438083585/811340359899676690/standard_3.gif")
.addField("**➥ Linkler**", "[:ballot_box_with_check: Davet Linkim](https://discord.com/api/oauth2/authorize?client_id=811336218926776331&permissions=8&scope=bot)\n\n[:white_check_mark: Destek Sunucum](https://discord.gg/KSCJ7RQfbR)")


client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == "o.help") {
    var link = spl[1];
    message.channel.send(help);
    }
});

const partner = new discord.MessageEmbed()
.setFooter("FLY")
.setColor("YELLOW")
.setThumbnail('https://media.discordapp.net/attachments/785821149580754954/786124655085748264/766653460988428308.gif')
.setDescription(`**Partner Olmak İçin** - **<@801068869506433034> Arkadaş Ekleyin Detayları Konuşun**`)

const yapımcım = new discord.MessageEmbed()
.setFooter("FLY")
.setColor("CYAN")
.setThumbnail('https://media.discordapp.net/attachments/785821149580754954/786124655085748264/766653460988428308.gif')
.setDescription(`**🔥 Yapımcım = <@801068869506433034>**`)


client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == "o.partner") {
    var link = spl[1];
    message.channel.send(partner);
    }
});

client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == "o.yapımcım") {
    var link = spl[1];
    message.channel.send(yapımcım);
    }
});

