const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254757331461";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_06_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTksXG4gICAgICAgIDUyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDgzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzksXG4gICAgICAgIDQxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTkxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTExLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDY1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDExMixcbiAgICAgICAgNDIsXG4gICAgICAgIDQxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOCxcbiAgICAgICAgODYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODUsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDU0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDc5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODIsXG4gICAgICAgIDgsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDk5LFxuICAgICAgICAxODksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPU2R1anNCeXJEbHhMYnJGcXNPdXBsMGJURDBzbHR1eTl4bDZ0Y3EvVWJBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyWG50dkJvWVFBdUlmWVYxa2lleFBRXCIsXG4gIFwicGhvbmVJZFwiOiBcImYyODQ3MzUxLTUyNTQtNDg1Ni1iZTdlLWFiYTNmNDRkNzY1Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODIsXG4gICAgICAxMDksXG4gICAgICA4NyxcbiAgICAgIDE5NyxcbiAgICAgIDEyMixcbiAgICAgIDIwNSxcbiAgICAgIDE4OSxcbiAgICAgIDc3LFxuICAgICAgNzAsXG4gICAgICAzNixcbiAgICAgIDM1LFxuICAgICAgMjQ2LFxuICAgICAgMjM2LFxuICAgICAgMjM4LFxuICAgICAgMTksXG4gICAgICAyMjEsXG4gICAgICA4LFxuICAgICAgNTEsXG4gICAgICA1MCxcbiAgICAgIDIyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjcsXG4gICAgICAzMSxcbiAgICAgIDUzLFxuICAgICAgMTM2LFxuICAgICAgMzIsXG4gICAgICAxMzMsXG4gICAgICAxNTEsXG4gICAgICAxOTEsXG4gICAgICAyOCxcbiAgICAgIDEwOSxcbiAgICAgIDI0NyxcbiAgICAgIDU3LFxuICAgICAgMTQ5LFxuICAgICAgMTEzLFxuICAgICAgNjYsXG4gICAgICA4MSxcbiAgICAgIDEzOSxcbiAgICAgIDE0MyxcbiAgICAgIDE5MCxcbiAgICAgIDUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlMyQTlNWkhNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NTczMzE0NjE6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTY2MTc1MzA1MDc0NjU6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLdUdxOFlGRU5QazRMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkdOejZTdGxFSUFpSTRoUGlaNHZTeFVIdEQwRWVVMGJFTFEyeXExMmpHeXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicjB6QXFvTDhmcWxKc0FGZkVuZG1temF3MTA5QVNmWkk0WlVoL3Vlc1lEem1SWTZoWFUzOXR3ZjZlaDgxYlRMcE1EK1dGeEY4MEx2OU9aSVduMTlyQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidWdPbG5HQTZtTmEyWWJLMDlJUko3dWU4cytNQmFvdlVBc3BpOFhvVGE1cEZJM3BqWkFaODFxdEQvZGl0TXBJSXhJWGcxbUsxWERKWElCcGJQN2dFQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzU3MzMxNDYxOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQ0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyNTAzOTFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
