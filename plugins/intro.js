

const { smd, Config,smdBuffer,  prefix } = require('../lib')


var surl = 'https://github.com/HyHamza/BYTE-MD' // Source URL
const number = '94765865407'
var name = ' 𝕎𝔸𝕊𝕀 𝕋𝔼ℂℍ'
var body = '𝑇𝛩𝑈𝐶𝛨 𝛨𝛯𝑅𝛯'
var image = 'https://telegra.ph/file/bfb8d7f8dc577f2f3d8cb.jpg'
let text = `Hello This is *Allen Bot V2* 🤖


Allen bot brings a world of excitement and joy to your chats ✨


𝐀𝐛𝐨𝐮𝐭 𝐭𝐡𝐢𝐬 𝐁𝐨𝐭: 

This is a side project by 𝗕𝗲𝗮𝘂𝘁𝘆𝗔𝗶 team. You can type ".menu" to see the full menu of features of this bot. This is a client version of *BYTE* bot.


𝘚𝘱𝘦𝘤𝘪𝘢𝘭 𝘛𝘩𝘢𝘯𝘬𝘴 : *BYTE* inc®
𝘗𝘰𝘸𝘦𝘳𝘦𝘥 𝘉𝘺 𝘽𝙚𝙖𝙪𝙩𝙮𝘼𝙞 ❇️

Click to use BeautyAi Bot ⬇️
https://wa.me/94753362699`





 //---------------------------------------------------------------------------
 smd({
             pattern: "intro",
             alias: ["talkdrove","Hamza"],
             desc: "Show intro of user",
             category: "fun",
             react:"🤩",
             filename: __filename,
             use: '<group link.>',
         },
         async(message) => {
    try{
          let media ;try{ media = await smdBuffer(image) }catch{media = log0}
           const q =await message.bot.fakeMessage("contact",{},name) 
           let contextInfo = {...(await message.bot.contextInfo(name,body,media,1,surl, 2) )}
           await message.send(text, {contextInfo : contextInfo },"suhail",  q )
    }catch(e){ await message.error(`${e}\n\ncommand: intro`,e,false)}


 })
