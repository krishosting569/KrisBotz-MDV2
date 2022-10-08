*Selamat ${ucapan()} ${conn.getName(m.sender)}*

╭─────═[ BOT INFO ]═─────⋆
│╭───────────────·
│  *• Nama Bot:* ${namebot}
│  *• Prefix:*  [ ${_p} ]
│  *• Aktif selama:*  ${mpt}
│  *• Owner:* ${nameown}
│╰────────────────···
┠─────═[ USER INFO ]═─────⋆
│╭────────────────···
│  *• Name:* ɴᴀᴍᴇ:* ${usrs.registered ? usrs.name : conn.getName(m.sender)}
│  *• Tags:* @${m.sender.split`@`[0]}
│  *• Status:* ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
│  *• Limit:*  ${usrs.limit} │╰────────────────···
┠──────────────────
