jeconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan." 


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_58_12_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDgsXG4gICAgICAgIDgzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA4MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzNixcbiAgICAgICAgMTUwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNixcbiAgICAgICAgNTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNixcbiAgICAgICAgMTMxLFxuICAgICAgICA2NixcbiAgICAgICAgMTc2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjM5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDY1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICA2NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDYwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5LFxuICAgICAgICA1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgODUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDUsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0LFxuICAgICAgICA3LFxuICAgICAgICAxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDgzLFxuICAgICAgICA3OSxcbiAgICAgICAgNjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAzMixcbiAgICAgICAgOTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUwLFxuICAgICAgICA4NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTksXG4gICAgICAgIDI3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQwLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA4LFxuICAgICAgICA5NixcbiAgICAgICAgMjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTksXG4gICAgICAgIDY0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3MixcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIsXG4gICAgICAgIDIzLFxuICAgICAgICAzOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDEsXG4gICAgICAgIDI3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODgsXG4gICAgICAgIDEwLFxuICAgICAgICA3MixcbiAgICAgICAgODQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY5LFxuICAgICAgICA4NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxODUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDksXG4gICAgICAgIDY5LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWjBIZ3JkTjk3MUFKdVI3VWQvdnhmQ0QvZ2JCenRFZkVTNitwUFNldjhPZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzc2NTc3MzIyODdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU0M0U2OTBDNjIyRDM5QkJEMEZEMjUzRTRGRTkxOEEwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzIxNjI5NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1dGJQRVcwZFMwcXBFX1ZfRWtyNmF3XCIsXG4gIFwicGhvbmVJZFwiOiBcImI2NzdjMmQ1LWRjMDEtNGVlYS1iYWJlLTdiNzY0NWIzYTJjNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOCxcbiAgICAgIDEwNSxcbiAgICAgIDIzMCxcbiAgICAgIDYwLFxuICAgICAgMjM5LFxuICAgICAgMTkzLFxuICAgICAgMjA5LFxuICAgICAgMTI5LFxuICAgICAgODUsXG4gICAgICAxMDIsXG4gICAgICAyNDAsXG4gICAgICA3OCxcbiAgICAgIDE0OCxcbiAgICAgIDQ5LFxuICAgICAgOTksXG4gICAgICA3OSxcbiAgICAgIDE0NixcbiAgICAgIDIxMSxcbiAgICAgIDIxOSxcbiAgICAgIDE0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzIsXG4gICAgICAyNDAsXG4gICAgICAyMixcbiAgICAgIDE0NixcbiAgICAgIDE2OCxcbiAgICAgIDQyLFxuICAgICAgOTEsXG4gICAgICAxNjUsXG4gICAgICAyNDAsXG4gICAgICAxNTIsXG4gICAgICAyNTUsXG4gICAgICAyMTcsXG4gICAgICA2OCxcbiAgICAgIDI0MixcbiAgICAgIDEyNCxcbiAgICAgIDE0MixcbiAgICAgIDEwOSxcbiAgICAgIDg0LFxuICAgICAgMTkyLFxuICAgICAgMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTjJIR0dXS1FcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY1NzczMjI4NzoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc0MzE5NjExNTg0NjUxOjIxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkwnZW5mZXIgQydlc3QgTW9pIOKdpO+4j/CfkpTwn6m48J+UpfCflqTwn5mCXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTyt6MCtNR0VLQ1F1N29HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxZXlCWi9sZ0NDVmFkRlRuOXRkcjFmTnY4bDFlejRadWRpNmtXcm4xREFNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjFCRHBOVUd2WkdLMFBYK0dRTXVQWVVxeFNNMlFIaWFscDhHS01pWGl0Rldub3JsbkN3L1liaExzY09qdVB4eG5IZUFwMi9wdkc1WG0zclFqaFJqZURRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlU5cWJTNGJjOUdYUSt5Mjk1MnRWYzlGazNsY3NlbndPempMOW9TK2lBZmRHUSsxSTFldkQyY0k0QnVmRGR3RW9mSzYvUFRBdEhNb3g5N1RXeHlLa0J3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY1NzczMjI4NzoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzMjE2MjkyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSDluXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIOW4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJFQ2xBLyt1bGZvUXF3ZUlTOEhQRkJ3NWxXeGpkRkk2bC9BRkoreVRlb0RNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4MTk1OTcyOTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
