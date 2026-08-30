module.exports.config = {
  name: "owner",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "🔰MSK🔰",
  description: "Show Owner Info with styled box",
  commandCategory: "Information",
  usages: "owner",
  cooldowns: 2
};

module.exports.run = async function ({ api, event }) {

  const info = `
╔═══════════════✿
║ ✨ 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 ✨
╠═══════════════✿
║ 👑 𝗡𝗮𝗺𝗲 : SHAHARIYAR
║ 🧸 𝗡𝗶𝗰𝗸 𝗡𝗮𝗺𝗲 : MSK
║ 🎂 𝗔𝗴𝗲 : 18
║ 💘 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻 : 𝗦𝗶𝗻𝗴𝗹𝗲
║ 🎓 𝗣𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻 : 𝗦𝘁𝘂𝗱𝗲𝗻𝘁
║ 🏡 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : DHAKA
╠═══════════════✿
║ 🔗 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦
╠═══════════════✿
║ 📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 :
║ https://www.facebook.com/M.S.K.14k
╚═══════════════✿
`;

  return api.sendMessage(info, event.threadID, event.messageID);
};
