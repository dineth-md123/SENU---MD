const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || '',
ALIVE_IMG: process.env.ALIVE_IMG || "url",
ALIVE_MS: process.env.ALIVE_MSG || "I'm Senu Md whatsapp bot ♥️ I'm Alive Now ♥️",
};
