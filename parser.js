const api = require('./src/api');
const auth = require('./src/auth');
const fs = require('fs');
(async () => {
    
    await auth()
    
    const chatsResp = await api.call('messages.getAllChats', {
        except_ids: 10
    })
    const chat = chatsResp.chats.filter(c => c.title == 'titleChat')
    console.log(chat);
    
const inputPeerC = {
    _:'inputPeerChannel',
    channel_id: '',
    access_hash: ''
}
const LIMIT = 1000
const allUsers = []

const historyF =  await api.call('messages.getHistory', {
    peer: inputPeerC,
    limit: LIMIT
})
const historyFcount = historyF.count;
console.log(historyFcount)

for(let offset = 0; offset < historyFcount; offset += LIMIT){
    const history =  await api.call('messages.getHistory', {
        peer: inputPeerC,
        limit: LIMIT,
        add_offset: offset
    })
    console.log('offset', offset)
    allUsers.push(...history.users)
    fs.writeFileSync('users.json', JSON.stringify(allUsers) )
}
})()
