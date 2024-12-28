const fs = require('node:fs');

const config = {
    owner: ["6285742916900", "6285742916900"],
    name: "Nio Bot",
    sessions: "sessions",
    sticker: {
      packname: "Made by ",
      author: "Nio"
    },
   messages: {
      wait: "> Data sedang memprosess...",
      owner: "> Khusus Owner bot ini mah",
      premium: "> Upgrade ke premium kalo mau akses, murah aja",
      group: "> Fitur khusus group chat",
      botAdmin: "> Lu siapa bukan Admin group",
      grootbotbup: "> Jadiin Nio admin dulu baru bisa akses",
   },
   database: "Nio-db",
   tz: "Asia/Jakarta"
}

module.exports = config

let file = require.resolve(__filename);
fs.watchFile(file, () => {
   fs.unwatchFile(file);
  delete require.cache[file];
});
