let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
┌─「 Donasi • Pulsa 」
│ • *Smartfren:* [${global.ppulsa}]
│ • *Indosat:* [${global.ppulsa2}]
❏────

┌─「 Donasi • Non Pulsa 」
│ • *Dana:* [${global.pdana}]
│ • *Gopay:* [${global.pgopay}]
│ • *Ovo:* [${global.povo}]
│ • *Link Aja:* [${global.plinkaja}]
❏────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
Footer
© 2022 𝐊𝐫𝐢𝐬𝐁𝐨𝐭𝐳-𝐌𝐝, Inc.
Footer navigation
Terms
Privacy
Security
