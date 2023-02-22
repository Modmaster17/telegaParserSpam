const api = require('./src/api');
const auth = require('./src/auth');
const idHash = require('./IdHash.json');


SendMessage = async () => {
    await auth()

    for(let i = 0; i < 5; i++){
        const inputUsers = {
            _: 'inputPeerUser',
            user_id: `${idHash[i].id_user}`,
            access_hash: `${idHash[i].hash_user}`
        }
        const spam = await api.call('messages.sendMessage', {
            peer: inputUsers,
            message: 'Message',
            random_id: Math.round(Math.random() * 1000)

        })

    }
}
SendMessage()
