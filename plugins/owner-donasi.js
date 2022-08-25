import fetch from 'node-fetch'
let handler = async (m, { conn, command, usedPrefix }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = ` ${conn.getName(m.sender)} Want Support Bot?

*PAYMENT ↓*
_*Pulsa(XL):*_ ${pulsa}
_*Dana:*_ ${dana}
_*Pulsa(AXIS):*_ ${pulsa2}
_*Gopay:*_ ${gopay}
_*Ovo:*_ {povo}
_*Saweria:*_ ${saweria}
*FOLLOW IG OWNER*
https://instagram.com/sampun_penak_
Setelah melakukan donasi kirim bukti pembayaran ke owner
`
conn.sendHydrated(m.chat, str, wm, pepe, 'https://github.com/sampun-penak', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝙼𝙴𝙽𝚄', '/menu']
], m)

}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
