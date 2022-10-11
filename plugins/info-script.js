//Credits Jangan Dihapus
//Thanks To Papah-Chan
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*𝑺𝒄𝒓𝒊𝒑𝒕 𝑰𝒏𝒊 𝑫𝒊 𝑱𝒖𝒂𝒍 𝑵𝒈𝒂𝒃 𝑴𝒂𝒖 𝑩𝒆𝒍𝒊?*
            wa.me/6285786211623`
let wibu = `https://hadi-api.herokuapp.com/api/loli` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'ᴏᴋ','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://chat.whatsapp.com/LnYJ7NyXL4O8p2tEsdcuwI",
    title: '𝐊𝐫𝐢𝐬𝐁𝐨𝐭𝐳-𝐌𝐝',
    body: 'want source code?',
    thumbnail: thumb,
    sourceUrl: sig
  }
  } }) 
          }
handler.help = ['sc', 'script']
handler.tags = ['info', 'main']
handler.command =  /^(script|sc)$/i

export default handler
