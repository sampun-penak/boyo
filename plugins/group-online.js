let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
  let users = participants.map(u => u.presences.id).filter(v => v !== conn.user.jid)
    m.reply(`*Teks:*\n${text ? `${text}\n` : ''}\n⛊──⛾「 ONLINE 」⛾──⛊\n` + users.map(v => '│♪ @' + v.replace(/@.+/, '')).join`\n` + '\n⛊──⛾「 ONLINE 」⛾──⛊', null, {
        mentions: users
    })
}
handler.help = ['online']
handler.tags = ['group']
handler.command = /^(here|(list)?online)$/i

export default handler