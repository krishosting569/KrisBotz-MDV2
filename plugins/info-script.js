import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `𝐒𝐜𝐫𝐢𝐩𝐭 𝐈𝐧𝐢 𝐃𝐢 𝐉𝐮𝐚𝐥 𝐊𝐚𝐤 𝐇𝐚𝐫𝐠𝐚 𝐌𝐮𝐫𝐚𝐡 𝐀𝐧𝐭𝐢 𝐄𝐫𝐨𝐫`

𝐂𝐨𝐧𝐭𝐚𝐤 𝐎𝐰𝐧𝐞𝐫
wa.me/6285786211623

let wibu = `https://telegra.ph/file/95f389477150f7ac12311.png` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Thankyou','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/_ctzhid",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/p/CevoCg5hG-p/?utm_source=ig_web_copy_link", 
    title: ' ${namebot} ',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
