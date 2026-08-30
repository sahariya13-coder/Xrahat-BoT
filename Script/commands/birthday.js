module.exports.config = {
  name: "birthday",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "🔰MSK🔰",
  description: "Shows birthday countdown or wishes",
  usePrefix: true,
  commandCategory: "info",
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
  const fs = global.nodemodule["fs-extra"];
  const request = global.nodemodule["request"];

  const now = new Date();

  // 🎂 Birth Date: 6 February 2009
  let targetYear = now.getFullYear();
  const birthMonth = 1; // February (0 = January)
  const birthDate = 6;

  let birthday = new Date(targetYear, birthMonth, birthDate, 0, 0, 0);

  if (now > birthday) {
    targetYear++;
    birthday = new Date(targetYear, birthMonth, birthDate, 0, 0, 0);
  }

  const t = birthday - now;

  const seconds = Math.floor((t / 1000) % 60);
  const minutes = Math.floor((t / (1000 * 60)) % 60);
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  const days = Math.floor(t / (1000 * 60 * 60 * 24));

  const imageURL = "https://i.imgur.com/38Fai5X.jpeg";
  const link = "\n\n🔗 m.me/61582708907708";

  const send = (msg) => {
    const callback = () =>
      api.sendMessage(
        {
          body: msg,
          attachment: fs.createReadStream(__dirname + "/cache/birthday.jpg")
        },
        event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/birthday.jpg"),
        event.messageID
      );

    request(encodeURI(imageURL))
      .pipe(fs.createWriteStream(__dirname + "/cache/birthday.jpg"))
      .on("close", () => callback());
  };

  // 🎉 Birthday wish
  if (days === 0 && hours === 0 && minutes === 0 && seconds <= 59) {
    return send(
      `🎉 আজ SHAHARIYAR এর জন্মদিন!\n\n🥳 সবাই উইশ করো 💙\n🎂 22 May 2008${link}`
    );
  }

  // ⏳ Countdown
  return send(
    `📅 SHAHARIYAR এর জন্মদিন আসতে বাকি:\n\n` +
    `⏳ ${days} দিন\n` +
    `🕒 ${hours} ঘণ্টা\n` +
    `🕑 ${minutes} মিনিট\n` +
    `⏱️ ${seconds} সেকেন্ড${link}`
  );
};
