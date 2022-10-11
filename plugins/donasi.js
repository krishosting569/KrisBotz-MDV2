let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send2ButtonLoc(m.chat, await (await fetch(fla + teks)).buffer(), `
*Allo mypren bantu donasi yuk supaya bot aktif selalu👋*
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
╰═══════════════════
`.trim(), footer, 'Owner', '.owner', 'Menu', '.menu')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
