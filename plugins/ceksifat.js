import fetch from 'node-fetch'

let handler = async (m, { conn, command, text }) => {
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
    if (!text) return conn.reply(m.chat, 'Masukan Namamu Udin!', m)
    let nm = 100
    let a = nm.getRandom()
    let b = nm.getRandom()
    let e = nm.getRandom()
    let f = nm.getRandom()
    let g = nm.getRandom()
    let h = nm.getRandom()
    let c = ['Baik Hati','Sombong','Pelit','Dermawan','Rendah Hati','Rendah Diri','Pemalu','Penakut','Pengusil','Cengeng'].getRandom()
    let d = ['Rajin','Malas','Membantu','Ngegosip','Jail','Gak jelas','Shoping','Chattan sama Doi','Chattan di WA karna Jomblo','Sedih','Kesepian','Bahagia'].getRandom()

let caption = `
┏──°❀❬ *Sifat ${text}* ❭❀°──⎔
│
│• Nama : *${text}*
│• Ahlak Baik : *${a}%*
│• Ahlak Buruk : *${b}%*
│• Orang yang : *${c}*
│• Selalu : *${d}*
│• Kecerdasan : *${e}%*
│• Kenakalan : *${f}%*
│• Keberanian : *${g}%*
│• Ketakutan : *${h}%*
┗────────────────⎔
`
conn.reply(m.chat, caption, m, { contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
handler.help = ['ceksifat'].map(v => v + ' <nama>')
handler.tags = ['kerang', 'fun']
handler.command = /^ceksifat/i

export default handler
