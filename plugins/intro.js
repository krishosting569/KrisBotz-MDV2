/*let handler = async m => {

let krtu = `Kartu Intro`
m.reply(`
0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 Kartu Intro 」*
│ *Nama     :* 
│ *Gender   :* 
│ *Umur      :* 
│ *Hobby    :* 
│ *Kelas      :* 
│ *Asal         :* 
│ *Agama    :* 
|  *Status     :* 
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
`.trim()) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

export default handler */

import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let krtu = `0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 𝐊𝐚𝐫𝐭𝐮 𝐈𝐧𝐭𝐫𝐨 」*
│ *𝐍𝐚𝐦𝐚     :* 
│ *𝐆𝐞𝐧𝐝𝐞𝐫   :* 
│ *𝐔𝐦𝐮𝐫      :* 
│ *𝐇𝐨𝐛𝐛𝐲    :* 
│ *𝐊𝐞𝐥𝐚𝐬      :* 
│ *𝐀𝐬𝐚𝐥         :* 
│ *𝐀𝐠𝐚𝐦𝐚     :* 
|  *𝐒𝐭𝐚𝐭𝐮𝐬     :* 
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
`
  }
  } }) 
}
handler.command = /^(intro)$/i

export default handler

