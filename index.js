const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Initialize the client
const client = new Client({
    puppeteer: { headless: true } // Removed executablePath
});

// Generate QR code in the Render logs
client.on('qr', (qr) => {
    console.log('QR RECEIVED');
    qrcode.generate(qr, { small: true });
});

// Ready event
client.on('ready', () => {
    console.log('Bot is ready!');
});

// Listen to incoming messages (example)
client.on('message', message => {
    console.log(`Message from ${message.from}: ${message.body}`);
});

// Start the client
client.initialize();
