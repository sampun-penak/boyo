import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `*• SEWA BOT & UP TO PREMIUM •*
        
1. Grup / 30 Hari
Rp. 15.000 Dana
Rp. 15.000 Pulsa
2. Premium / 30 Hari
Rp. 10.000 Dana
Rp. 10.000 Pulsa
3. Premium + Grup / 30 Hari
Rp. 20.000 Dana
Rp. 20.000 Pulsa

*BELI?  CHAT OWNER*
wa.me/6283816446896`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
/*const message = {
            document: { url: thumb },
            jpegThumbnail: await (await fetch(thumb)).buffer(), fileName: global.wm, mimetype: td, fileLength: '9999999', pageCount: '999',
            caption: info,
            footer: wm,
            templateButtons: [
                {
                    urlButton: {
                        displayText: '🌎 OFFICIAL GROUP',
                        url: sgc
                    }
                },
                {
                    callButton: {
                        displayText: '📞 Add me',
                        phoneNumber: nomorown
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'MENU',
                        id: '.menu'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'PING',
                        id: '.ping'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'DONASI',
                        id: '.donasi'
                    }
                },
            ]
        }
        return await conn.sendMessage(m.chat, message)*/
await conn.reply(m.chat, info, m, { quoted: fgif, contextInfo: { externalAdReply: { showAdAttribution: true, title: botdate, body: bottime, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})

}
handler.customPrefix = /^(sewa|sewabot|.sewa|.sewabot)$/i
handler.command = new RegExp

export default handler
