
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


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk12ZlA0cUg0WXNDTUdvNWtoQWx2RUF1MDlnMyt2cHlqZ3R4L1dsSGNYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSTBRd1htaHVoSjJ1aUdHMjU4SzlMT3VWaGpaUG1IUFdoOFZKK3M3WVExND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSWdOb3JYOEgzQzhrRGc2RlRTYWd0WHE3T21FeVR2NGRpSnAwM3BITDNZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5dG5hNlV4c2o2dmcydEM4OHZZa0xMSmNJdGhZKzFORFFjWXpIdVpHL25BPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1ENnJ4QzJzMTJ1enR3NFZVMU91LzBWTzBwR2pjUFJNckttUXN0TWI1bE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlvY1kydFZsOUFkeW8yeGI4amRtR3RYWUdPQXk3ejRJQmI4TW4xb2twRnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0lNUlpiUWF4MEJ1cjBKZDV2QklCcktibnBhMEJ6bGZSQjIyMG95bE9VYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3hYbDJzMDg5RUthczZ3SXdPdFRwQjlGdW8wWkZoejUyWTZRYVR3VVZndz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlwMWt5OUFvekJxTU1nR3lnaEk0Z2pqOE1XZzhkcHMzN1U0V1FpZXUvMCtHZ21ZNGJWalYyWlYrVUxsdkJJRHp3UVgrSm9CT3RTMkpaRnNJeWtucmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA2LCJhZHZTZWNyZXRLZXkiOiJ3dFMyTDlwRWZHdTY3azI1VTRkUUtVVURTaWZRNjlWTXpmY0JIbnRodUw4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzY1ODY1NDA3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkNCRjkwNTY4ODNDMDQwNDg4NjhEQzY5QTNBMzZFQ0NEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjQyNTAxNjh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ing4MF94LWxyUzhxblZsVTF5SHBVRFEiLCJwaG9uZUlkIjoiZjM0NWNkM2UtNjU5Yi00NzIxLTk3Y2ItY2RlOTJmM2ZmNjAyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFWYTc5YWdydmExNCsyeXZXaS9PZGNrUllrST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJabTg1MkRXREJwSFBPOEhWRWlwa1lwVVRVRXM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiR0o1UE1EWFEiLCJtZSI6eyJpZCI6Ijk0NzY1ODY1NDA3OjM0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFsbGVuIEJvdCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT3lteE1zQ0VLZndsN1lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoia2tZNEluWm16UUc1WFdHeUcwTktVdEc5T0ppek1BQzFLbyt4Z2dneTlpaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiM2NXU2VDN0hKak9OV2ZvTGJ6YWhlNmhvQVZ3VzFtUUhINlFjNVd3UjgxOU9QQkZlY1RFQXpHQ2VNSmZsU1gzYXJkSmxCOEZlU2hoY2FBOWpoVFg5Q0E9PSIsImRldmljZVNpZ25hdHVyZSI6IkF1VWFtZ05mTVo5MHdyRWtpVFc1SDlaVWYxandxcmZIbFNIQnhQNURxUzBsMHdtb01ZN0RPSG5OVmdBTTZLUzhmcnVmaEFnTXJNUkk3eW5KRmp2MGl3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjU4NjU0MDc6MzRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWkpHT0NKMlpzMEJ1VjFoc2h0RFNsTFJ2VGlZc3pBQXRTcVBzWUlJTXZZcCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDI1MDE2NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPSkMifQ==" //Make sure session id starts with Byte;;;



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
