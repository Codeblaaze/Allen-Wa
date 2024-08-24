
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


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT01kV0d4SWhLeituUGVVQ1hHSm9HRDlVekNSWjltZGsyMWVGSnVqOXhrcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYnVLMzlrdC8rZC9WYkJoYWNoRmx5MnJERGVBMjBQT2FXbUF3K0lzcGFsND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3SUxreUdLMk95UDNrWHBLZWp2ZWMrOE5DMGRZTFZGTy9vY3JZRDBJaFhjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiYmdpSWs2U2l2bDhIYVM4Sy9jcUt2a3g2b1JkOXZPVmd4bUY5eDgvOGxNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNCTHFNVHVKNHF5UXdLU3NFMzM1c3VTSmwrQVliS3o4bWFtN3RtdlNlVXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFEMWZ3UkVramM5SGo2RmhCRE8wRVIwamZ4czh2UEFxeDkyTTNuZENjeDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUhaY1o4SDNlV3pmcGRCWXgvK0JWbHRrOFJvSXNRQmdMZllkbHNFcEluUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmFkWXlDaWI4NEJuMlJEanU2b0E3Z2ptQk8zQ0ZueU1CU01XWEkvYS8xYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1hd091RlhzSFBFL1B6eXBpMkhKSitXOXlTMnZDMmFqTUpvelN1b2t4Mm5uRzI2OTVxelFiSDFtL1pkMU43SG5OLzMzSEhhdnJxUjhzV1FyL3BkOGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIxLCJhZHZTZWNyZXRLZXkiOiJ0dnZ1ZEpDUVc5WHZGTGtvS3N4TlJzaXhVZFhwdlFxRlZRdkJ4NW02NTJzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzY1ODY1NDA3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijc0RENFRjUzNkU4RTgxMkJDREQ4OEY0REUyOEM2ODVDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjQ1MjQxODZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IktYdzA3VTZ6UVRPalZkSFpsOVRvRVEiLCJwaG9uZUlkIjoiMGZkZGJkZTgtZWQxYi00NjE1LWFkZTMtOWE4NGM1NGRhNGM3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlIrOWJBanF2cDRnejlOUGZ3U2poTG1ZczJlOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGN2hUMVNSZ28xOWxHVE8rV08zZzBtdVVwVEE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTEFFN1NZUjYiLCJtZSI6eyJpZCI6Ijk0NzY1ODY1NDA3OjU0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFsbGVuIEJvdCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSUNueE1zQ0VJck5xTFlHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoia2tZNEluWm16UUc1WFdHeUcwTktVdEc5T0ppek1BQzFLbyt4Z2dneTlpaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQVloVjRKTDhaczlEUnk2dGIyUmV4WnJLOHA1MnNVRGFQTkZpM2RZZVpXTXhuN09LZEdOanorQkVDaWlSdXBjTnlWQmZHekpHZjB2eU9KWXZTcmkvQVE9PSIsImRldmljZVNpZ25hdHVyZSI6InYwcFdmVmk1VTYvM3E5eUJkeCtMTzRXNzQ1UnExN0pLVWZQZ3k0MURTQWdzQ01sTndtOWplZmhxQ0xmanNhcEVxN3dURnM3Zk44YjlwWnZ6VUF0VmdRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjU4NjU0MDc6NTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWkpHT0NKMlpzMEJ1VjFoc2h0RFNsTFJ2VGlZc3pBQXRTcVBzWUlJTXZZcCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDUyNDE4MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHWXUifQ==" //Make sure session id starts with Byte;;;



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
