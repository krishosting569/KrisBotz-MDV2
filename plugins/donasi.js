import fetch from 'node-fetch'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
//let handler = async(m, { conn, text, usedPrefix, command }) => {
//let pp = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image')

let str = `${global.wm}

╔═══════════════════
║ _*DONASI UNTUK*_  ${nameown,} ×͜×
╠═══════════════════
║╭──❉ 〔 *𝗗𝗢𝗡𝗔𝗦𝗜* 〕 ❉──────
║│ • *Smartfren:* [${global.ppulsa}]
║│ • *Indosat:* [${global.ppulsa2}]
║│ • *Dana:* [${global.pdana}]
║│ • *Gopay:* [${global.pgopay}]
║│ • *Ovo:* [${global.povo}]
║│ • *Link Aja:* [${global.plinkaja}]
║╰──────────────────
╰═══════════════════`
let wibu = `https://telegra.ph/file/1a0f9117d37f4dcf63d8c.jpg` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Sewa Bot','.sewa', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "htpp://krishosnd/_ctzhid",
    mediaType: "VIDEO",
    description: "htpps://boncelhoninsjsjsjsks-//6hwhs", 
    title: '𝑲𝒓𝒊𝒔𝑩𝒐𝒕𝒛-𝑴𝒅',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sig
  }
  } }) 
          }
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
