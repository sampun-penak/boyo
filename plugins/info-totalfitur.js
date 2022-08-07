import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
let gettext = await fetch('https://raw.githubusercontent.com/fawwaz37/random/main/bijak.txt')
  let restext = await gettext.text()
  let katarandom = restext.split('\n')
    let caption = `👋 Hai *${name} @${who.split("@")[0]}*,\n\n${wm}\n${htjava} *F E A T U R E* ${htjava}\nTotal Fitur Bot Saat ini: *${totalf}*\n`
await conn.sendButton(m.chat, caption, wm + '\n\n' + botdate, await(await fetch(logo)).buffer(), [['🎀 Menu', '/menu'],
      ['Ok 🎉\n\n' + katarandom.getRandom() + '\n\n', '...']], m, { mentions: conn.parseMention(caption), 
            fileLength: fsizedoc,
            seconds: fsizedoc,
            jpegThumbnail: Buffer.alloc(0), contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}

handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
export default handler