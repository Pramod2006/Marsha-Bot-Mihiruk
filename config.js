
const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',

}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'a82716863f',
}



// Other
global.owner = ['94761091578' ]
global.ownernomer = "94761091578"
global.premium = ['94761091578']
global.packname = 'Mihiruk'
global.author = 'Mihiruk'
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.namebotmu = 'Masha-Bot Mihiruk Dilshan'
global.tutorial = 'https://www.youtube.com'
global.sp = ''
global.mess = {
    success: 'Done',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa',
    verify: 'Daftar Dulu Kk, Cara Daftar nya Ketik .menu',
    owner: 'Fitur Khusus Owner Bot',
    api: 'Mungkin Api Nya Eror cok?',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Tunggu Sebentar⏳',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}

    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

global.mygit = 'https://github.com/kreyuk'
global.myyt = 'https://youtube.com/@kkreyuk9084'
global.myytv = 'https://youtube.com/@kkreyuk9084'
global.botname = 'Masha-Bot Mihiruk Dilshan'
global.akulaku = 'Mihiruk'
global.ytname = 'Spchathu official'
global.emot = {
role: '🏆',
level: '🎚️',
limit: '📊',
health: '❤️',
exp: '💫',
money: '💵',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🎁',
mythic: '🗳️',
legendary: '🗃️',
pet: '🎁',
trash: '🗑',
armor: '👕',
sword: '⚔️',
wood: '🪵',
batu: '🪨',
string: '🕸️',
horse: '🐎',
cat: '🐈',
dog: '🐕',
fox: '🦊',
petFood: '🍖',
iron: '⛓️',
gold: '👑',
emerald: '💚',
budak: '🏃',
busur: '🏹',
panah: '💘',
kapak: '🪓'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
