const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "Picsart_25-08-25_19-15-02-338.png",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 CHAMO-MD V1 Is Alive Now ❤️‍🩹✨*",
BOT_OWNER: '94740513917',  // Replace with the owner's phone number



};
