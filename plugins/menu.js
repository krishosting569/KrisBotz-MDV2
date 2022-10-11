//⫰⫯ 𝑵𝒐𝒕𝒆 : 𝑲𝒂𝒍𝒂𝒖 𝑴𝒂𝒖 𝑫𝒊 𝑯𝒂𝒑𝒖𝒔 𝑴𝒊𝒌𝒊𝒓 𝑫𝒖𝒍𝒖 𝑵𝒈𝒂𝒃 𝑺𝒊𝒂𝒑𝒂 𝒀𝒂𝒏𝒈 𝑩𝒊𝒌𝒊𝒏 𝑺𝒄𝒓𝒊𝒑𝒕 𝑫𝒂𝒏 𝑴𝒆𝒏𝒈𝒆𝒅𝒊𝒕 𝑵𝒚𝒂

//𝐀𝐮𝐭𝐡𝐨𝐫 : 𝑲𝒓𝒊𝒔 𝑯𝒐𝒔𝒕𝒊𝒏𝒈
//𝐖𝐚 : 085786211623 / 0882007324217
//𝐛𝐚𝐬𝐞 : 𝑩𝒐𝒄𝒉𝒊𝒍 𝑮𝒂𝒎𝒊𝒏𝒈
//𝐌𝐲 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 : 10 𝑶𝒌𝒕𝒐𝒃𝒆𝒓 2022

//⫹❰⫺ 𝐵𝐼𝐺 𝑇𝐻𝐴𝑁𝐾𝑆 𝑇𝑂 ⫹❱⫺
//⭝ 𝑨𝒍𝒍𝒂𝒉 𝒀𝒂𝒏𝒈 𝑴𝒂𝒉𝒂 𝑬𝒔𝒂
//⭝ 𝑶𝒓𝒂𝒏𝒈 𝑻𝒖𝒂
//⭝ 𝑻𝒆𝒎𝒆𝒏 𝑮𝒘
//⭝ 𝒀𝒂𝒏𝒈 𝑼𝒅𝒂𝒉 𝑺𝒖𝒑𝒑𝒐𝒓𝒕 𝑮𝒖𝒂

//⫹⫺ 𝑇𝒉𝑒 𝑁𝑎𝑚𝑒 𝑇𝒉𝑎𝑡 𝐻𝑒𝑙𝑝𝑒𝑑 𝑀𝑒 ⫹⫺
//⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔
//⭝ 𝑨𝒅𝒊𝒘𝒂𝒋𝒊𝒔𝒉𝒊𝒏𝒈
//⭝ 𝑹𝒊𝒔𝒎𝒂𝑩𝒐𝒕𝒛 𝑶𝒇𝒇𝒄
//⭝ 𝑱𝒂𝒓𝒐𝒕 𝑶𝒇𝒇𝒄
//⭝ 𝑪𝒉𝒓𝒊𝒔𝒕𝒊𝒂𝒏 𝑰𝒅
//⭝ 𝑨𝒊𝒏𝒆
//⭝ 𝒁𝒆𝒆𝒐𝒏𝒆 𝑶𝒇𝒄
//⭝ 𝑲𝒓𝒊𝒔 𝑯𝒐𝒔𝒕𝒊𝒏𝒈//

import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
const { makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = (await import('@adiwajshing/baileys')).default

const defaultMenu = {
  before: `

╭─────═[ 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 ]═─────⋆
│╭────────────────···
│  ⬡ 𝐍𝐚𝐦𝐚 𝐁𝐨𝐭:* %me
│  ⬡ 𝐌𝐨𝐝𝐞:* %mode
│  ⬡ 𝐏𝐫𝐞𝐟𝐢𝐱:* [ *%_p* ]
│  ⬡ 𝐁𝐚𝐢𝐥𝐲𝐞𝐬:* Multi Device
│  ⬡ 𝐁𝐚𝐭𝐭𝐞𝐫𝐲:* ${conn.battery != undefined ? `$             {conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
│  ⬡ 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦: %platform
│  ⬡ 𝐓𝐲𝐩𝐞: Node.Js
│  ⬡ 𝐔𝐩𝐭𝐢𝐦𝐞: %muptime
│  ⬡ 𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞: %rtotalreg dari %totalreg
│╰────────────────···
┠──────═[ 𝐈𝐍𝐅𝐎 𝐔𝐒𝐄𝐑 ]═─────⋆
│╭────────────────···
│  ⬡ 𝐍𝐚𝐦𝐞: %name
│  ⬡ 𝐓𝐚𝐠𝐬: %tag
│  ⬡ 𝐏𝐫𝐞𝐦𝐢𝐮𝐦: %prems
│  ⬡ 𝐋𝐢𝐦𝐢𝐭: %limit
│  ⬡ 𝐌𝐨𝐧𝐞𝐲: %money   
│  ⬡ 𝐑𝐨𝐥𝐞: %role
│  ⬡ 𝐋𝐞𝐯𝐞𝐥: %level [ %xp4levelup Xp For Levelup] 
│  ⬡ 𝐗𝐩: %exp / %maxexp 
│  ⬡ 𝐓𝐨𝐭𝐚𝐥 𝐗𝐩: %totalexp
│ ╰────────────────···
╰──────────═┅═──────⬣
%readmore
`.trimStart(),
  header: '⃝▣──「 %category 」───⬣',
  body: '│○ %cmd %isPremium %islimit',
  footer: '▣───────────⬣\n',
  after: `%c4 %me`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args, command}) => {
	let tags
	let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'anime', 'update', 'maker', 'berita', 'edukasi', 'news', 'random', 'logo', 'menbalas', 'game', 'xp', 'islamic', 'stiker', 'rpg', 'kerangajaib', 'quotes', 'admin', 'group', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database','quran', 'vote', 'nsfw', 'audio', 'jadibot', 'info', 'owner', 'nocategory']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
  'main': 'Main', 
  'game': 'Game',
  'rpg': 'RPG Games',
  'xp': 'Exp & Limit',
  'sticker': 'Sticker',
  'kerang': 'Kerang Ajaib',
  'quotes': 'Quotes',
  'fun': 'Fun',
  'anime': 'Anime',
  'admin': 'Admin',
  'group': 'Group',
  'vote': 'Voting',
  'absen': 'Absen',
  'premium': 'Premium',
  'anonymous': 'Anonymous Chat',
  'internet': 'Internet',
  'downloader': 'Downloader',
  'tools': 'Tools',
  'nulis': 'MagerNulis & Logo',
  'audio': 'Audio',
  'logo': 'Logo Menu',
  'maker': 'Maker',
  'berita': 'Berita',
  'database': 'Database',
  'quran': 'Al Qur\'an',
  'owner': 'Owner',
  'host': 'Host',
  'advanced': 'Advanced',
  'info': 'Info',
  '': 'No Category',
}
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Rpg'
  }
  if (teks == 'edukasi') tags = {
    'edukasi': 'Edukasi'
  }
  if (teks == 'news') tags = {
    'news': 'News'
  }
  if (teks == 'random') tags = {
    'random': 'Random'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'berita') tags = {
    'berita': 'Berita'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'group': 'Grup'
  }
  if (teks == 'group') tags = {
    'group': 'Group'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'Nulis',
    'maker': 'Maker'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
if (teks == 'menbalas') tags = {
    'menbalas': 'Menfess'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
  }
  if (teks == 'logo') tags = {
    'logo': 'Logo Menu',
  }
  if (teks == 'absen') tags = {
    'absen': 'Absen'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al-Qur\'an',
    'islamic': 'Islamic'
  }
  if (teks == 'audio') tags = {
    'audio': 'Audio'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }
 if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'nocategory') tags = {
    '': 'No Category'
  }
  try {
  	// DEFAULT MENU
      let dash = global.dashmenu
  	let m1 = global.dmenut
      let m2 = global.dmenub
      let m3 = global.dmenuf
      let m4 = global.dmenub2
      
      // COMMAND MENU
      let cc = global.cmenut
      let c1 = global.cmenuh
      let c2 = global.cmenub
      let c3 = global.cmenuf
      let c4 = global.cmenua
      
      // LOGO L P
      let lprem = global.lopr
      let llim = global.lolm
      let tag = `@${m.sender.split('@')[0]}`
    
    //-----------TIME---------
    let ucpn = `${ucapan()}`
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)
    let usrs = db.data.users[m.sender]
   
   const sections = [
   {
	title: `${htki} MAIN ${htka}`,
    rows: [
        {title: `⚡ ${pmenus}〚 SPEED BOT 』`, rowId: ".speed", description: "Menampilkan kecepatan respon BOT"},
        {title: `💌 ${pmenus} 『 OWNER BOT 』`, rowId: ".owner", description: "Menampilkan List owner BOT"},
        {title: `📑 ${pmenus} 『 OWNER 』`, rowId: ".owner", description: "✧ Ini Room Developer ku ^~^"},
        {title: `⏰ ${pmenus} 『 RUNTIME BOT 』`, rowId: ".runtime", description: "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 Waktu Bot Berjalan"}, 
        {title: `📔 ${pmenus} 『 SCRIPT BOT 』`, rowId: ".sc", description: `Source Code ${namebot}`},
    ]
      },{
        title: `${htki} SUPPORT ${htka}`,
        rows: [
            {title: `🔖 ${pmenus} 『 SEWA 』`, rowId: ".sewa", description: "Menampilkan list harga sewa BOT"},
            {title: `🌟 ${pmenus}『  BUY PREMIUM 』`, rowId: ".premium", description: "Menampilkan list harga premium"},
            {title: `💹 ${pmenus}『  DONASI 』`, rowId: ".donasi", description: 'Support BOT agar lebih fast respon'},
        ]
        },{
          title: `${htki}『 MENU MENFESS ${htka} 』`,
          rows: [
            {title: `💬 ${pmenus} Menfess Balas`, rowId: ".? menbalas", description: "Menampilkan Menu Manfess BOT"},
          ]},{
        title: `${htki} MENU ${htka}`,
        rows: [
            {title: `💬 ${pmenus} 『 All 』`, rowId: ".? all", description: "Menampilkan Semua command BOT"},
            {title: `🌱 ${pmenus} 『 Rpg 』`, rowId: ".? rpg", description: "Game Epic Rpg!"},
        {title: `✨ ${pmenus} 『 Exp 』`, rowId: ".? xp", description: "Ayo tingkatkan pangkat mu!"},
        {title: `🎮 ${pmenus} 『 Game 』`, rowId: ".? game", description: "Gamenya seru seru lho >-<"},
        {title: `🧩 ${pmenus} 『 Fun 』`, rowId: ".? fun", description: "Fitur yang aman untuk keluarga"},
        {title: `🐚 ${pmenus} 『 Kerang 』`, rowId: ".? kerangajaib", description: "Tanyakan pada ketua club"},
        {title: `📑 ${pmenus} 『 Quotes 』`, rowId: ".? quotes", description: "Random Inspirasi"},
        {title: `⛩️ ${pmenus} 『 Anime 』`, rowId: ".? anime", description: "Kamu wibu ya bang?"},
        {title: `🔞 ${pmenus} 『 Nsfw 』`, rowId: ".? nsfw", description: "Tch, dasar sagne"},
        {title: `🌟 ${pmenus} 『 Premium 』`, rowId: ".? premium", description: "Only premium Users"},
        {title: `🎭 ${pmenus} 『 Anonymous Chats 』`, rowId: ".? anonymous", description: "Bicara dengan orang tidak dikenal"},
        {title: `📖 ${pmenus} 『 Al-Quran 』`, rowId: ".? quran", description: "Tobat yuk kak"},
        {title: `🌎 ${pmenus} 『 Internet 』`, rowId: ".? internet", description: "Cari sesuatu diBOT"},
        {title: `🌎 ${pmenus} 『 Berita 』`, rowId: ".? berita", description: "Cari berita terupdate"},
        {title: `📩 ${pmenus} 『 Downloaders 』`, rowId: ".? downloader", description: "Download sesuatu diBOT"},
        {title: `🎨 ${pmenus} 『 Stikers 』`, rowId: ".? stiker", description: "Buat Sticker diBOT"},
        {title: `🎨 ${pmenus} 『 Logo 』`, rowId: ".? logo", description: "Buat Logo Kamu diBOT"},
        {title: `✏️ ${pmenus} 『 Nulis 』`, rowId: ".? nulis", description: "Nulis kok males kak?"},
        {title: `🎧 ${pmenus} 『 Audio 』`, rowId: ".? audio", description: "Ubah Audio dengan Filter"},
        {title: `🎧 ${pmenus} 『 Sound Menu 』`, rowId: ".soundmenu", description: "Kumpulan 120 Sound"},
        {title: `📑 ${pmenus} 〚 Store 〛-𐑂`, rowId: ".? store", description: "╰► Anak jebeh ya kamu kak?"},
        {title: `📑 ${pmenus}  『 Get Hadiah 』`, rowId: ".daily", description: '✧ Mau hadiah nggak kak?... >.<'},
        {title: `🎧 ${pmenus} 『 Sound Kane Menu 』`, rowId: ".soundkanemenu", description: "Kumpulan 24 Sound"},
        {title: `🏢 ${pmenus} 『 Group 』`, rowId: ".? group", description: "Only Groups"},
        {title: `👑 ${pmenus} 『Admin 』`, rowId: ".? admin", description: "Only Admin Group"},
        {title: `🗂️ ${pmenus} 『 Database 』`, rowId: ".? database", description: "Simpan sesuatu diBOT"},
        {title: `🛠️ ${pmenus} 『 Tools 』`, rowId: ".? tools", description: "Mungkin tools ini bisa membantu?"},
        {title: `ℹ️ ${pmenus} 『 Info 』`, rowId: ".? info", description: "Info info BOT"},
        {title: `👩‍💻 ${pmenus} 『 Owner 』`, rowId: ".? owner", description: "Owner Only!"},
        {title: `❓ ${pmenus} 『 No Category 』`, rowId: ".? nocategory", description: "Fitur tanpa kategory!"},
        ]
        },
]

let tek = `𝑯𝒂𝒊 *${ucapan()} ${conn.getName(m.sender)}*

╭─────═[ 𝑼𝑺𝑬𝑹 𝑰𝑵𝑭𝑶 ]═─────⋆
│╭────────────────···
│  *• 𝑵𝒂𝒎𝒆:* ${usrs.registered ? usrs.name : conn.getName(m.sender)}
│  *• 𝑻𝒂𝒈𝒔:* @${m.sender.split`@`[0]}
│  *• 𝑺𝒕𝒂𝒕𝒖𝒔:* ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
│  *• 𝑳𝒊𝒎𝒊𝒕:*  ${usrs.limit} │╰────────────────···
┠───────𝑳𝑰𝑺𝑻 𝑴𝑬𝑵𝑼──────
│ シ︎✔︎ 𝑮𝒂𝒎𝒆 𝑴𝒆𝒏𝒖
│ シ︎✔︎ 𝑳𝒐𝒈𝒐 𝑴𝒆𝒏𝒖
│ シ︎✔︎ 𝑴𝒂𝒏𝒇𝒆𝒔 𝑴𝒆𝒏𝒖
│ シ︎✔︎ 𝑹𝒑𝒈 𝑴𝒆𝒏𝒖
│ シ︎✔︎ 𝑨𝒏𝒊𝒎𝒆 𝑴𝒆𝒏𝒖
│ シ︎✔︎ 𝑺𝒐𝒖𝒏𝒅 𝑴𝒆𝒏𝒖
│ シ︎✔︎ 𝑺𝒐𝒖𝒏𝒅 𝑲𝒂𝒏𝒆 𝑴𝒆𝒏𝒖,
│ シ︎✔︎ 𝑺𝒕𝒊𝒄𝒌𝒆𝒓 𝑴𝒆𝒏𝒖
│ シ︎✔︎ 𝑰𝒏𝒕𝒆𝒓𝒏𝒆𝒕 𝑴𝒆𝒏𝒖
│ シ︎✔︎ 𝑫𝒐𝒘𝒏𝒍𝒐𝒂𝒅 𝑴𝒆𝒏𝒖
│ シ︎✔︎ 𝑩𝒆𝒓𝒊𝒕𝒂 𝑴𝒆𝒏𝒖
│ シ︎✔︎ 𝑮𝒓𝒐𝒖𝒑 𝑴𝒆𝒏𝒖
│ 
│ ➪ 𝑵𝒐𝒕𝒆 : 𝑲𝒍𝒊𝒌 𝑩𝒖𝒕𝒕𝒐𝒏 𝑫𝒊 𝑩𝒂𝒘𝒂𝒉 𝑼𝒏𝒕𝒖𝒌 𝑴𝒆𝒏𝒂𝒏𝒑𝒊𝒍𝒌𝒂𝒏 𝑴𝒆𝒏𝒖
│ ➪ 𝑵𝒂𝒎𝒆 𝑩𝒐𝒕𝒛 : ${namebot}
│ ➪ 𝑶𝒘𝒏𝒆𝒓 𝑩𝒐𝒕𝒛 : ${nameown}
╰──────────═┅═──────⬣`
const listMessage = {
  text: tek,
  footer: wm2,
  mentions: await conn.parseMention(tek),
  title: ``,
  buttonText: `𝐌𝐄𝐍𝐔 𝐊𝐑𝐈𝐒 ⎙`, 
  sections
}
  if (teks == '404') {
  	return conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(tek), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
    }

 /**************************** TIME *********************/
 let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
 let mode = global.opts['self'] ? 'Private' : 'Publik'
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Premium': 'Free'}`
    let platform = os.platform()
    
    //---------------------
    
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
          }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
                .replace(/%islimit/g, menu.limit ? llim : '')
                .replace(/%isPremium/g, menu.premium ? lprem : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
      ucpn,platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
    //----------------- FAKE
 let fvn = {quoted: { key: {participant : '0@s.whatsapp.net'},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "2022","ptt": "true"} } }}
 let floc = {quoted: { key: { participant : '0@s.whatsapp.net'}, message: { "liveLocationMessage": { "caption": `Menu`,"h": `${name}`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}} }}
 let fdocs = {quoted: { key : { participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `Hai Kak ${name}!`,  jpegThumbnail: fs.readFileSync('./thumbnail.jpg') }}}}
 let fgclink = {quoted: {key: {participant : '0@s.whatsapp.net'},message: {groupInviteMessage: {groupJid: "17608914335-1625305606@g.us",inviteCode: null,groupName: `Hai ${name}!`,  caption: wm,  jpegThumbnail: fs.readFileSync('./thumbnail.jpg') }} }}
 let fgif = {quoted: {key: { participant : '0@s.whatsapp.net'}, message: {  "videoMessage": {  "title": `Hai Kak ${name}!`, "h": `Hmm`, 'seconds': '999999999',  'gifPlayback': 'true',  'caption': wm, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg') } } } }
 let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
 
    let ftoko = {
    key: {
    fromMe: false,
    participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net',
    remoteJid: 'status@broadcast',
  },
  message: {
  "productMessage": {
  "product": {
  "productImage":{
  "mimetype": "image/jpeg",
  "jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
    },
  "title": `${ucapan()}`,
  "description": '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
  "currencyCode": "US",
  "priceAmount1000": "100",
  "retailerId": wm,
  "productImageCount": 999
        },
  "businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net`
  }
  }
  }
  
    let urls = pickRandom(['https://telegra.ph/file/035e524939ab0294ba91f.jpg', 'https://telegra.ph/file/96b2275d3b14d071290bc.jpg', 'https://telegra.ph/file/2c6b7660bc6126404a9bb.jpg', 'https://telegra.ph/file/c635bf577bb9d59a3e00b.jpg', 'https://telegra.ph/file/be8dd52f6363f9e9f5a60.jpg', 'https://telegra.ph/file/02e53361b9dc946f63c8d.jpg', 'https://telegra.ph/file/298ed2f1bba17aeb64ca8.jpg', 'https://telegra.ph/file/be2a18221974147f66ea0.jpg'])
 
    const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    
    //FAKE TROLI

    const ftrol = {

    key : {

    remoteJid: 'status@broadcast',

    participant : '0@s.whatsapp.net'

    },

    message: {

    orderMessage: {

    itemCount : 2022,

    status: 1,

    surface : 1,

    message: `Hai Kak ${name}!`, 

    orderTitle: `▮Menu ▸`,

    thumbnail: await (await fetch(flaaa + 'Menu')).buffer(), //Gambarnye

    sellerJid: '0@s.whatsapp.net' 

    }

    }

    }
    
    const fload = {

    key : {

    remoteJid: 'status@broadcast',

    participant : '0@s.whatsapp.net'

    },

    message: {

    orderMessage: {

    itemCount : 2022,

    status: 1,

    surface : 1,

    message: '[❗] Memuat Menu ' + teks + '...\n Sabar Ya Kak ^ω^', 

    orderTitle: `▮Menu ▸`,

    thumbnail: await (await fetch(flaaa + 'Loading')).buffer(), //Gambarnye

    sellerJid: '0@s.whatsapp.net' 

    }

    }

    }

    conn.reply(m.chat, '*▰▰▰▰▰▰▱ Loading*', ftrol) 

    
    //------------------< MENU >----------------
    
    //------------------ SIMPLE
    /*conn.reply(m.chat, text, fkon, { contextInfo: { mentionedJid: [m.sender],
        externalAdReply: {
            title: `${htjava} ${namebot}`,
            body: titlebot,
            description: titlebot,
            mediaType: 2,
          thumbnail: await(await fetch(thumb2)).buffer(),
         mediaUrl: sig
        }
     }
    })*/
    
    //------------------ DOCUMENT
    let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    let d3  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    let d4 = 'application/pdf'
    let d5 = 'application/vnd.android.package-archive'
    let d6 = 'application/zip'
    let td = `${pickRandom([d1,d2,d3,d4,d5,d6])}`
    
    
    //------- MENU LOCATION
    const pre = generateWAMessageFromContent(m.chat, { liveLocationMessage:{
  degreesLatitude: 34.672314,
  degreesLongitude: 135.484802,
  accuracyInMeters: 100,
  speedInMps: 999,
  degreesClockwiseFromMagneticNorth: 99,
  caption: text.trim(),
  sequenceNumber: 774236889,
  timeOffset: 8600,
  jpegThumbnail: await(await fetch(thumb)).buffer(),
  contextInfo: { mentionedJid: [m.sender] }
}}, { quoted: m
					})

//return conn.relayMessage(m.chat, pre.message, { messageId: pre.key.id })

//-------DOC TEMPLATE
    const message = { 
            document: { url: thumbdoc },
            jpegThumbnail: await (await fetch(urls)).buffer(),
            fileName: wm,
            mimetype: td,
            fileLength: fsizedoc,
            pageCount: fpagedoc,
            caption: text,
            footer: titlebot,
            templateButtons: [
                {
                    urlButton: {
                        displayText: `${namebot}`,
                        url: 'https://github.com/ImYanXiao/kris-MultiDevice'
                    }
                },
                {
                    urlButton: {
                        displayText: 'Instagram',
                        url: sig
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Owner🎐',
                        id: '.owner'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Speed⚡',
                        id: '.ping'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Donasi💵',
                        id: '.donasi'
                    }
                },
            ]
        }
       //await conn.sendMessage(m.chat, message, m, { mentionedJid: [m.sender] })
        
        //MAIN MENU
      /*conn.sendButton(m.chat, `*${ucapan()}, ${name} 👋*`, text.trim(), await genProfile(conn, m), [['Speedtest', _p + 'speedtest'], ['Owner', _p + 'owner']], false, { quoted: fkon, contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/Xiao_yan_21",
    mediaType: "VIDEO",
    description: "https://Instagram.com/Xiao_yan_21", 
    title: wm,
    body: 'List Menu?',
    thumbnail: thumb,
    sourceUrl: sgc
}
} })*/

    //------------------- 2BUTTON VID
   // conn.sendMessage(m.chat, { video: { url: 'https://telegra.ph/file/c82d5c358495e8ef15916.mp4' }, gifPlayback: true, gifAttribution: ~~(Math.random() * 2), caption: text.trim(), footer: 'ᴍᴀᴅᴇ ᴡɪᴛʜ ❤ ʙʏ ᴋʀɪs-ʜᴏsᴛɪɴɢ', templateButtons: [{ quickReplyButton: { displayText: 'Speedtest⚡', id: `${_p}speedtest` }}, { quickReplyButton: { displayText: 'Owner🎀', id: `${_p}owner` }} ] })
    
    //------------------- Payment MENU
    /*await conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: 50000000,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: text.trim(),
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})*/
      
    //------------------- 2BUTTON LOCATION
    conn.sendButton(m.chat, `${ucapan()}﹗`, text.trim(), `${timeimg()}`, [
      ['シ 𝐌𝐞𝐧𝐮︎ ', `${_p}menu`],
      ['ఌ 𝐒𝐩𝐞𝐞𝐝𝐭𝐞𝐬𝐭︎ ', `${_p}speedtest`]
    ], m, {asLocation: true})
  } catch (e) {
    conn.reply(m.chat, 'Maaf, ᴍᴇɴᴜ ʟᴀɢɪ ᴇʀᴏʀ', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i

handler.register = false
handler.exp = 3

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑷𝒂𝒈𝒊"
  }
  if (time >= 10) {
    res = "𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑺𝒊𝒂𝒏𝒈"
  }
  if (time >= 15) {
    res = "𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑺𝒐𝒓𝒆"
  }
  if (time >= 18) {
    res = "𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑴𝒂𝒍𝒂𝒎"
  }
  return res
}
function timeimg() {
    let imgloc = ''
  const time = moment.tz('Asia/Jakarta').format('HH')
  imgloc = ('./media/kris8.png')
  if (time >= 0) {
    imgloc = ('./media/kris.png')
  }
  if (time >= 4) {
    imgloc = ('./media/kris2.png')
  }
  if (time >= 8) {
    imgloc = ('./media/kris3.png')
  }
  if (time >= 12) {
    imgloc = ('./media/kris4.png')
  }
  if (time >= 16) {
    imgloc = ('./media/kris5.png')
  }
  if (time >= 20) {
    imgloc = ('./media/kris6.png')
  }
  if (time >= 24) {
    imgloc = ('./media/kris7.png')
  }
  return imgloc
}
