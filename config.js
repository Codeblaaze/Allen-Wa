
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/bfb8d7f8dc577f2f3d8cb.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "94765865407";
global.owner = process.env.OWNER_NUMBER || "94753362699";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEtsRXdXSlUxKzhNc3dpL1B1N0NLcmhPTTBrYW5EWFN4dGxpcER6Z25XTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSTFualdvUjUzTW5PZmw0ZEVTdTFaZVB6OVVVNzlVSGFIT2ZHNkFRWkptOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQjJyY3l1dklqbUU3QXpEUmlpa01GbGdldUFJU1QzOFg3U3BaK29VYW1FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiU0dzZHdxaVV2cE1rRGExUFdIU0xaQ2taRE9LU1hRODZ1bkd4UXR4T2dZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNOSzZpUTk4R2dobkFVZmE1bW54ZTlaTjM3WVZxaEtJM1RzK1JqSjlobjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im4wUm1Kd2J4RWYyL2dhclg5TFFWZkZBMWllaVFHUERQbmlxakhQVGdOMzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUNYUWx5ZmVSNjliVU4zbUZnTTZaOFVqVHlhQU8rSkxpNHBUMDhrRHFHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMHJ3czdzVWpyMXczU1pTaUQwNFVnd3p2cmxRTnlPblZnVGhBNGlWeVZDST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVIUTJzYlFPNVlRSk9ZVWRXZXNsdDZieWJQTFFmUWZySGwwMHVFV0llNllqcHRoTkJsU3pLcSt1Zkw2cHQyZDRHRkZWTVRFZkdNd25KMTcrYlo5SWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk0LCJhZHZTZWNyZXRLZXkiOiJ1YS9BL1l6ays2alZCNll0aCtoTEc1ZVJRWWllbmprVEY1S1pxaVAxemlFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzY1ODY1NDA3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjBFRjcyNkQxNEMyOUI1MUMwNzlCNzE0RjI0QzRCQjI3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjQ1MTIzMzV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImM0WjBSdFRTUzVlN2VTOWVqTDNwSGciLCJwaG9uZUlkIjoiYWYxMWM5MWEtOTVlOC00ZjJmLThkODYtNzUxMjY2MDhhNWQ4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndjK1A2cjVScVBucXpWcnZZUWhpdVk0YjFkdz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlOG1jdVFsMDIxVWgzd0pWZjBRbXVSUGdrNlE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQUQ1UThITkMiLCJtZSI6eyJpZCI6Ijk0NzY1ODY1NDA3OjUyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFsbGVuIEJvdCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUDZteE1zQ0VNRHdwN1lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoia2tZNEluWm16UUc1WFdHeUcwTktVdEc5T0ppek1BQzFLbyt4Z2dneTlpaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaDRucVordkpIeG9JZTJxc2xLMkhXRVN5UE8renRGMFJRR1Jod0QzZ1hpdkpIampaVE9nTEV2SkZxTkh6UG1tZW5nZ2N2Zlh5b3FxQ2F6TFpZTkpxQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IjR5SCs2QlowWHgyUU1EenViSGdQMVIzd3dFT21ORHVESG9uTjJtcUNWM1V1RVdlLzF0UHBrSFFrUTNUK1Q1RjIrQzZjZlJhWTBiTS8vOGFHUWxOeWl3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjU4NjU0MDc6NTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWkpHT0NKMlpzMEJ1VjFoc2h0RFNsTFJ2VGlZc3pBQXRTcVBzWUlJTXZZcCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDUxMjMzMywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHWXQifQ==" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By 𝗕𝗲𝗮𝘂𝘁𝘆 𝗔𝗶 ✳️*",
  author: process.env.PACK_AUTHER || "Allen Bot V2",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "Allen Bot V2",
  ownername: process.env.OWNER_NAME || "© 𝗕𝗲𝗮𝘂𝘁𝘆 𝗔𝗶 ✳️",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "sk_fee556f0abfeb354543a5f3251df5215640ac01d4081e21a",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
