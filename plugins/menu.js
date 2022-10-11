let levelling = require('../lib/levelling')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
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
`
.trimStart(),
  header: '╭─֍ 〔 %category 〕 ֍─',
  body: '┃⬡ %cmd %islimit %isPremium',
  footer: '╰────────֍\n',
  footerText:'𝑲𝒓𝒊𝒔𝑯𝒐𝒔𝒕𝒊𝒏𝒗 ×͜×', 
  after: `${namebot}
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
	let bzz = fs.readFileSync('./vn/kri.mp3')
	let bzz2 = fs.readFileSync('./vn/itskri.mp3')
    let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]

    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'game', 'edukasi', 'news', 'nsfw', 'xp', 'stiker', 'image', 'anime', 'kerangajaib', 'quotes', 'admin', 'rpg', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'quran', 'audio', 'jadibot', 'info', 'vote', 'tanpakategori', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': '𝙐𝙏𝘼𝙈𝘼',
    'game': '𝙂𝘼𝙈𝙀',
    'xp': '𝙀𝙓𝙋 & 𝙇𝙄𝙈𝙄𝙏',
    'nsfw': `𝙉𝙎𝙁𝙒 ${global.opts['nsfw'] ? '' : '(Dinonaktifkan)'}`,
    'sticker': '𝙎𝙏𝙄𝙆𝙀𝙍',
    'edukasi': '𝙀𝘿𝙄𝙆𝙐𝙎𝙄',
    'news': '𝙉𝙀𝙒𝙎',
    'kerang': '𝙆𝙀𝙍𝘼𝙉𝙂 𝘼𝙅𝘼𝙄𝘽',
    'quotes': '𝙌𝙐𝙊𝙏𝙀𝙎',
    'admin': `𝘼𝘿𝙈𝙄𝙉 ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'rpg': '𝙀𝙋𝙄𝘾 𝙍𝙋𝙂',
    'group': '𝙂𝙍𝙐𝘽',
    'anime': '𝘼𝙉𝙄𝙈𝙀',
    'premium': '𝙋𝙍𝙀𝙈𝙄𝙐𝙈',
    'internet': '𝙄𝙉𝙏𝙀𝙍𝙉𝙀𝙏',
    'image': '𝙍𝘼𝙉𝘿𝙊𝙈 𝙄𝙈𝘼𝙂𝙀',
    'anonymous': '𝘼𝙉𝙊𝙉𝙔𝙈𝙊𝙐𝙎 𝘾𝙃𝘼𝙏',
    'nulis': '𝙈𝘼𝙂𝙀𝙍𝙉𝙉𝙐𝙇𝙄𝙎 & 𝙇𝙊𝙂𝙊',
    'downloader': '𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍',
    'logo': '𝐋𝐎𝐆𝐎 𝐌𝐄𝐍𝐔',
    'tools': '𝙏𝙊𝙊𝙇𝙎',
    'fun': '𝙁𝙐𝙉',
    'database': '𝘿𝘼𝙏𝘼𝘽𝘼𝙎𝙀',
    'vote': '𝙑𝙊𝙏𝙄𝙉𝙂',
    'absen': '𝘼𝘽𝙎𝙀𝙉',
    'quran': '𝙄𝙎𝙇𝘼𝙈',
    'audio': '𝙋𝙀𝙉𝙂𝙐𝘽𝘼𝙃 𝙎𝙐𝘼𝙍𝘼',
    'jadibot': '𝙅𝘼𝘿𝙄 𝘽𝙊𝙏',
    'info': '𝙄𝙉𝙁𝙊',
    '': '𝙏𝘼𝙉𝙋𝘼 𝙆𝘼𝙏𝙀𝙂𝙊𝙍𝙄',
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'news') tags = {
    'news': 'News'
  }
  if (teks == 'edukasi') tags = {
    'edukasi': 'Edukasi'
  }
  if (teks == 'nsfw') tags = {
    'hentai': 'Hentai',
    'bokep': 'Bokep'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Epic Rpg'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`
  }
  if (teks == 'grup') tags = {
    'group': 'Grup'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'image') tags = {
    'image': 'Random Image'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }

  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
 if (teks == 'logo') tags = {
    'logo': 'Logo Menu',
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
    if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'quran') tags = {
    'quran': 'Islam'
  }
  if (teks == 'audio') tags = {
    'audio': 'Pengubah Suara'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'tanpakategori') tags = {
    '': 'Tanpa Kategori'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }



  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
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
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
			return conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": `let tek = `𝑯𝒂𝒊 *${ucapan()} ${conn.getName(m.sender)}*

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
│ ➪ 𝑵𝒂𝒎𝒆 𝑩𝒐𝒕𝒛 : ${nameown}
│ ➪ 𝑶𝒘𝒏𝒆𝒓 𝑩𝒐𝒕𝒛 : ${namebot}
╰──────────═┅═──────⬣`.trim(),
                        "footerText": "𝘑𝘪𝘬𝘢 𝘮𝘦𝘯𝘦𝘮𝘶𝘬𝘢𝘯 𝘣𝘶𝘨 𝘥𝘢𝘭𝘢𝘮 𝘱𝘦𝘯𝘨𝘨𝘶𝘯𝘢𝘢𝘯\n𝘚𝘪𝘭𝘢𝘩𝘬𝘢𝘯 𝘭𝘢𝘱𝘰𝘳𝘬𝘢𝘯 𝘰𝘳 𝘵𝘢𝘯𝘺𝘢𝘬𝘢𝘯 𝘬𝘦𝘱𝘢𝘥𝘢 𝙊𝙬𝙣𝙚𝙧",
                        "buttonText": "𝐌𝐞𝐧𝐮 ${namebot}",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                
                                "rows": [{
                                    "title": `[ ☇ ] ꜱ ᴇ ᴍ ᴜ ᴀ  ᴘ ᴇ ʀ ɪ ɴ ᴛ ᴀ ʜༀ`,
									"description": "✓ 𝙈𝙚𝙢𝙗𝙚𝙧𝙞𝙠𝙖𝙣 𝙎𝙚𝙢𝙪𝙖 𝙁𝙞𝙩𝙪𝙧 ${namebot} ×፝֟͜×",
									"rowId": ".? all"
								}, {
									"title": "[ ☇ ] ɪ ꜱ ʟ ᴀ ᴍༀ",
									"description": "✓ 𝙈𝙚𝙣𝙪 𝙏𝙚𝙣𝙩𝙖𝙣𝙜 𝙄𝙨𝙡𝙖𝙢 𝘿𝙞 ${namebot} ×፝֟͜×",
									"rowId": ".? quran"
								}, {
									"title": "[ ☇ ] ᴇ ᴅ ᴜ ᴋ ᴀ ꜱ ɪༀ",
									"description": "✓ 𝙈𝙚𝙣𝙪 𝙀𝙙𝙪𝙠𝙖𝙨𝙞 𝘿𝙞 ${namebot} ×፝֟͜×",
									"rowId": ".? edukasi"
								}, {
									"title": "[ ☇ ] ɴ ᴇ ᴡ ꜱༀ",
									"description": "✓ 𝙈𝙚𝙣𝙪 𝘽𝙚𝙧𝙞𝙩𝙖 𝘿𝙞 ${namebot} ×፝֟͜×",
									"rowId": ".? News"
								},  {
									"title": "[ ☇ ] ɢ ᴀ ᴍ ᴇༀ",
									"description": "✓ 𝙈𝙚𝙣𝙪 𝙂𝙖𝙢𝙚 𝘿𝙞 ${namebot} ×፝֟͜×",
									"rowId": ".? game"
								}, {
									"title": "[ ☇ ] ᴇ ᴘ ɪ ᴄ  ʀ ᴘ ɢༀ",
									"description": "✓ 𝙈𝙚𝙣𝙪 𝙂𝙖𝙢𝙚 𝙍𝙋𝙂 𝘿𝙞 ${namebot} ×፝֟͜×",
									"rowId": ".? rpg"
								}, {
									"title": "[ ☇ ] x ᴘༀ",
									"description": "✓ 𝙈𝙚𝙣𝙪 𝙓𝙋 𝘿𝙖𝙣 𝙇𝙚𝙫𝙚𝙡 𝘿𝙞 ${namebot} ×፝֟͜×",
									"rowId": ".? xp"
								},  {
									"title": "[ ☇ ] ɴ ꜱ ꜰ ᴡༀ",
									"description": "✓ 𝙈𝙚𝙣𝙪 𝘼𝙨𝙪𝙥𝙖𝙣 𝘿𝙞 ${namebot} ×፝֟͜×",
									"rowId": ".? nsfw"
								}, {
									"title": "[ ☇ ] ʀ ᴀ ɴ ᴅ ᴏ ᴍ  ɪ ᴍ ᴀ ɢ ᴇༀ",
									"description": "✓ 𝙈𝙚𝙣𝙪 𝙁𝙤𝙩𝙤 𝙍𝙖𝙣𝙙𝙤𝙢 𝘿𝙞 ${namebot} ×፝֟͜×",
									"rowId": ".? image"
							}, {
									"title": "[ ☇ ] ꜱ ᴛ ɪ ᴋ ᴇ ʀༀ",
									"description": "✓ 𝙈𝙚𝙣𝙪 𝘽𝙪𝙖𝙩 𝙎𝙩𝙞𝙠𝙚𝙧 𝘿𝙞 ${namebot} ×፝֟͜×",
									"rowId": ".? stiker"
								}, {
									"title": "[ ☇ ] ᴋ ᴇ ʀ ᴀ ɴ ɢ  ᴀ ᴊ ᴀ ɪ ʙༀ",
									"description": "✓ 𝙈𝙚𝙣𝙪 𝙈𝙚𝙣𝙪𝙧𝙪𝙩 𝙆𝙚𝙧𝙖𝙣𝙜 𝙖𝙟𝙖𝙞𝙗 𝘿𝙞 ${namebot} ×፝֟͜×",
									"rowId": ".? kerangajaib"
								}, {
									"title": "[ ☇ ] Q ᴜ ᴏ ᴛ ᴇ ꜱༀ",
									"description": "✓ 𝙈𝙚𝙣𝙪 𝙌𝙪𝙤𝙩𝙚𝙨 𝘿𝙞 ${namebot} ×፝֟͜×",
									"rowId": ".? quotes"
								}, {
									"title": "[ ☇ ] ᴀ ᴅ ᴍ ɪ ɴༀ",
									"description": "✓ 𝙈𝙚𝙣𝙪 𝘼𝙙𝙢𝙞𝙣 𝙂𝙧𝙤𝙪𝙥 𝘿𝙞 ${namebot} ×፝֟͜×",
									"rowId": ".? admin"
								}, {
									"title": "[ ☇ ] ɢ ʀ ᴜ ᴘༀ",
									"description": "✓ 𝙈𝙚𝙣𝙪 𝙂𝙧𝙤𝙪𝙥 𝘿𝙞 ${namebot} ×፝֟͜×",
									"rowId": ".? grup"
								}, {
									"title": "[ ☇ ] ᴘ ʀ ᴇ ᴍ ɪ ᴜ ᴍༀ",
									"description": "✓ 𝙈𝙚𝙣𝙪 𝙐𝙣𝙩𝙪𝙠 𝙋𝙧𝙚𝙢𝙞𝙪𝙢 𝘿𝙞 ${namebot} ×፝֟͜×",
									"rowId": ".? premium"
								}, {
									"title": "[ ☇ ] ɪ ɴ ᴛ ᴇ ʀ ɴ ᴇ ᴛༀ",
									"description": "✓ 𝙈𝙚𝙣𝙪 𝘾𝙖𝙧𝙞 𝙎𝙚𝙨𝙪𝙖𝙩𝙪 𝘿𝙞 ${namebot} ×፝֟͜×",
									"rowId": ".? internet"
								}, {
									"title": "[ ☇ ] ᴀ ɴ ᴏ ɴ ʏ ᴍ ᴏ ᴜ ꜱༀ",
									"description": "✓ 𝙈𝙚𝙣𝙪 𝙈𝙖𝙞𝙣𝙠𝙖𝙣 𝘼𝙣𝙤𝙣𝙮𝙢𝙤𝙪𝙨 𝘾𝙝𝙖𝙩 𝘿𝙞 ${namebot} ×፝֟͜×",
									"rowId": ".? anonymous"
								}, {
									"title": "[ ☇ ] ɴ ᴜ ʟ ɪ ꜱ  &  ʟ ᴏ ɢ ᴏༀ",
									"description": "✓ 𝙈𝙚𝙣𝙪 𝙉𝙪𝙡𝙞𝙨 & 𝙇𝙤𝙜𝙤 𝘿𝙞 𝘽𝙤𝙩ᴹᴿ𝙄𝙩𝙨𝙠𝙧𝙞 ×፝֟͜×",
									"rowId": ".? nulis"
								}, {
									"title": "[ ☇ ] ᴅ ᴏ ᴡ ɴ ʟ ᴏ ᴀ ᴅ ᴇ ʀༀ",
									"description": "✓ 𝙈𝙚𝙣𝙪 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙎𝙚𝙨𝙪𝙖𝙩𝙪 𝘿𝙞 ${namebot} ×፝֟͜×",
									"rowId": ".? downloader"
								}, {
									"title": "[ ☇ ] ᴛ ᴏ ᴏ ʟ ꜱༀ",
									"description": "✓ 𝙈𝙚𝙣𝙪 𝙏𝙤𝙤𝙡𝙨 𝙔𝙖𝙣𝙜 𝘽𝙞𝙨𝙖 𝙙𝙞 𝙂𝙪𝙣𝙖𝙠𝙖𝙣 𝘿𝙞 ${namebot} ×፝֟͜×",
									"rowId": ".? tools"
								}, {
									"title": "[ ☇ ] ꜰ ᴜ ɴༀ",
									"description": "✓ 𝙈𝙚𝙣𝙪 𝘾𝙚𝙧𝙞𝙖 𝘿𝙞 ${namebot} ×፝֟͜×",
									"rowId": ".? fun"
								}, {
									"title": "[ ☇ ] ᴅ ᴀ ᴛ ᴀ ʙ ᴀ ꜱ ᴇༀ",
									"description": "✓ 𝙈𝙚𝙣𝙪 𝙎𝙞𝙢𝙥𝙖𝙣 𝙎𝙚𝙨𝙪𝙖𝙩𝙪 𝘿𝙞 ${namebot} ×፝֟͜×",
									"rowId": ".? database"
								}, {
									"title": "[ ☇ ] ᴠ ᴏ ᴛ ᴇ  &  ᴀ ʙ ꜱ ᴇ ɴༀ",
									"description": "✓ 𝙈𝙚𝙣𝙪 𝙑𝙤𝙩𝙚 & 𝘼𝙗𝙨𝙚𝙣 𝘿𝙞 ${namebot} ×፝֟͜×",
									"rowId": ".? vote"
								}, {
									"title": "[ ☇ ] ᴘ ᴇ ɴ ɢ ᴜ ʙ ᴀ ʜ  ꜱ ᴜ ᴀ ʀ ᴀༀ",
									"description": "✓ 𝙈𝙚𝙣𝙪 𝙐𝙗𝙖𝙝 𝙎𝙪𝙖𝙧𝙖 𝘿𝙞 ${namebot} ×፝֟͜×",
									"rowId": ".? audio"
								}, {
									"title": "[ ☇ ] ᴊ ᴀ ᴅ ɪ  ʙ ᴏ ᴛༀ",
									"description": "✓ 𝙈𝙚𝙣𝙪 𝙅𝙖𝙙𝙞 𝘽𝙤𝙩 𝘿𝙞 ${namebot} ×፝֟͜×",
									"rowId": ".? jadibot"
								}, {
									"title": "[ ☇ ] ᴀ ɴ ɪ ᴍ ᴇༀ",
									"description": "✓ 𝙈𝙚𝙣𝙪 𝘾𝙖𝙧𝙞 𝘼𝙣𝙞𝙢𝙚 𝘿𝙞 ${namebot} ×፝֟͜×",
									"rowId": ".? anime"
								}, {
									"title": "[ ☇ ] ɪ ɴ ꜰ ᴏༀ",
									"description": "✓ 𝙄𝙣𝙛𝙤 𝙏𝙚𝙣𝙩𝙖𝙣𝙜 ${namebot} ×፝֟͜×",
									"rowId": ".? info"
								}, {
									"title": "[ ☇ ] ᴛ ᴀ ɴ ᴘ ᴀ  ᴋ ᴀ ᴛ ᴇ ɢ ᴏ ʀ ɪༀ",
									"description": "✓ 𝙈𝙚𝙣𝙪 𝙠𝙤𝙨𝙤𝙣𝙜 𝘿𝙞 ${namebot} ×፝֟͜×",
									"rowId": ".? tanpakategori"
								}, {
									"title": "[ ☇ ] ᴏ ᴡ ɴ ᴇ ʀༀ",
									"description": "✓ 𝙈𝙚𝙣𝙪 𝙆𝙝𝙪𝙨𝙪𝙨 ${namebot} ×፝֟͜×",
									"rowId": ".? owner"
                                }],
                                "title": "──────────────❲  ᗩᒪᒪ ᗰEᑎᑌ  ❳──────────────"
                            }, {
								"rows": [{
                                    "title": "[ ☇ ] ꜱ ᴛ ᴀ ᴛ ᴜ ꜱ  ʙ ᴏ ᴛ",
                                    "description": "✓ 𝙎𝙩𝙖𝙩𝙪𝙨 𝙙𝙖𝙣 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙨𝙞 𝘽𝙤𝙩ᴹᴿ𝙄𝙩𝙨𝙠𝙧𝙞 ×፝֟͜×",
                                    "rowId": ".botstatus"
                                }, {
                                    "title": "[ ☇ ] ʀ ᴜ ʟ ᴇ ꜱ",
                                    "description": "✓ 𝙐𝙨𝙚𝙧 𝙮𝙖𝙣𝙜 𝙗𝙞𝙟𝙖𝙠 𝙨𝙚𝙡𝙖𝙡𝙪 𝙢𝙚𝙢𝙖𝙩𝙪𝙝𝙞 𝙍𝙪𝙡𝙚𝙨 ${namebot} ×፝֟͜×",
                                    "rowId": ".rules"
                                }, {
                                    "title": "[ ☇ ] ꜱᴇᴡᴀ  ʙᴏᴛ  ᴏʀ  ᴘʀᴇᴍɪᴜᴍ",
                                    "description": "✓ 𝙐𝙣𝙩𝙪𝙠 𝙮𝙖𝙣𝙜 𝙞𝙣𝙜𝙞𝙣 𝙢𝙚𝙡𝙞𝙝𝙖𝙩 𝙝𝙖𝙧𝙜𝙖 𝙨𝙚𝙬𝙖 𝙙𝙖𝙣 𝙥𝙧𝙚𝙢𝙞𝙪𝙢 ${namebot} ×፝֟͜×",
                                    "rowId": ".sewabot"
								}, {	
                                    "title": "[ ☇ ] ᴏ ᴡ ɴ ᴇ ʀ  ʙ ᴏ ᴛ",
                                    "description": "✓ 𝙋𝙚𝙢𝙞𝙡𝙞𝙠 ${namebot} ×፝֟͜×",
                                    "rowId": ".owner"
                                }, {
                                    "title": "[ ☇ ] ᴅ ᴏ ɴ ᴀ ꜱ ɪ",
                                    "description": "✓ 𝘿𝙤𝙣𝙖𝙨𝙞 𝙪𝙣𝙩𝙪𝙠 𝙢𝙚𝙣𝙙𝙪𝙠𝙪𝙣𝙜 𝙗𝙤𝙩 𝙖𝙜𝙖𝙧 𝙖𝙠𝙩𝙞𝙛 𝙨𝙚𝙡𝙖𝙡𝙪",
                                    "rowId": ".donasi"
                                }, {
                                    "title": "ᴋ ᴀ ᴛ ᴀ  ᴘ ᴇ ɴ ᴜ ᴛ ᴜ ᴘ",
                                    "description": "✓ 𝙏𝙚𝙧𝙞𝙢𝙖𝙠𝙖𝙨𝙞𝙝 𝙪𝙣𝙩𝙪𝙠 𝙪𝙨𝙚𝙧 𝙮𝙖𝙣𝙜 𝙩𝙚𝙡𝙖𝙝 𝙢𝙚𝙣𝙜𝙜𝙪𝙣𝙖𝙠𝙖𝙣 𝙗𝙤𝙩, 𝙟𝙞𝙠𝙖 𝙖𝙙𝙖 𝙠𝙚𝙨𝙖𝙡𝙖𝙝𝙖𝙣 𝙖𝙩𝙖𝙪 𝙥𝙚𝙧𝙢𝙞𝙣𝙩𝙖𝙖𝙣 𝙗𝙞𝙨𝙖 𝙘𝙝𝙖𝙩 𝙠𝙚 𝙣𝙤𝙢𝙤𝙧 𝙤𝙬𝙣𝙚𝙧",
                                    "rowId": ".owner"
                                }, {
                                    "title": "ᴛ ʜ ᴀ ɴ ᴋ ꜱ  ɢ ᴇ ɴ ɢ",
                                    "description": "✓ 𝙏𝙚𝙧𝙞𝙢𝙖 𝙠𝙖𝙨𝙞𝙝 𝙗𝙖𝙣𝙮𝙖𝙠 𝙪𝙣𝙩𝙪𝙠 𝙪𝙨𝙚𝙧 𝙮𝙖𝙣𝙜 𝙩𝙚𝙡𝙖𝙝 𝙗𝙚𝙧𝙥𝙖𝙧𝙩𝙞𝙨𝙞𝙥𝙖𝙨𝙞 𝙙𝙖𝙡𝙖𝙢 𝙗𝙤𝙩",
                                    "rowId": ".tqto"
                                }],
                                "title": "──────────────❲ ᑭEᑎᑌTᑌᑭ ❳──────────────"
                            }
                        ], "contextInfo": 
						{ "stanzaId": m.key.id,
                        "participant": "0@s.whatsapp.net",
                        "remoteJid": "6283136505591-1614953337@g.us",
                        "quotedMessage": m.message
						}
                    }
                 }, {}), {waitForAck: true})
    }
    // gunakan ini jika kamu menggunakan whatsapp bisnis
    //   throw `
    // ┌〔 DAFTAR MENU 〕
    // ├ ${_p + command} all
    // ├ ${_p + command} game
    // ├ ${_p + command} xp
    // ├ ${_p + command} stiker
    // ├ ${_p + command} kerang
    // ├ ${_p + command} quotes
    // ├ ${_p + command} admin
    // ├ ${_p + command} group
    // ├ ${_p + command} premium
    // ├ ${_p + command} internet
    // ├ ${_p + command} anonymous
    // ├ ${_p + command} nulis
    // ├ ${_p + command} downloader
    // ├ ${_p + command} tools
    // ├ ${_p + command} fun
    // ├ ${_p + command} database
    // ├ ${_p + command} vote
    // ├ ${_p + command} quran
    // ├ ${_p + command} audio
    // ├ ${_p + command} jadibot
    // ├ ${_p + command} info
    // ├ ${_p + command} tanpa kategori
    // ├ ${_p + command} owner
    // └────  
    //     `.trim()
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.send3ButtonLoc(m.chat, await (await fetch(fla + teks)).buffer(), text.trim(), `Creator by by ᴹᴿ𝙄𝙩𝙨𝙠𝙧𝙞 ×፝֟͜×\nRuntime: ${uptime}\nHari: ${week}, ${date}\nJangan Call or Spam Bot!!! `, 'Pemilik Bot', `${_p}owner`, 'Sewa Bot', `${_p}sewabot`, 'Rules', `${_p}rules`, m)
   // await conn.send3ButtonLoc(m.chat, await (await fetch(`https://i.ibb.co/fH0hppT/mikey.jpg`)).buffer(), text.trim(), 'Recoded By Dawnfrosty', 'Pemilik Bot', '.owner', 'Donasi', '.donasi', 'Rules', '.rules', m)
    await conn.sendFile(m.chat, bzz, 'bzz.opus', null, m, true)
    await conn.sendFile(m.chat, bzz2, 'bzz2.opus', null, m, true)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['kri', 'menu', 'help']
handler.tags = ['main']
handler.command = /^(\?|menu|help)$/i

handler.register = false

module.exports = handler

const more = String.fromCharCode(1)
const readMore = more.repeat(1)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "*Dinihari Ngab*👻"
  if (time >= 4) {
    res = "*𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑷𝒂𝒈𝒊*🌤"
  }
  if (time > 10) {
    res = "*𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑺𝒊𝒂𝒏𝒈*🌞"
  }
  if (time >= 15) {
    res = "*𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑺𝒐𝒓𝒆*🌝"
  }
  if (time >= 18) {
    res = "*𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑴𝒂𝒍𝒂𝒎*🌚"
  }
  return res
}
