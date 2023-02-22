const users = require('./users.json');
const api = require('./src/api');
const auth = require('./src/auth');
const fs = require('fs');

const id = users.filter(u => u.id).map(u => u.id)
const hash = users.filter(u => u.access_hash).map(u => u.access_hash)


let userHash = []
const object = async () => {

    await auth()

    for(let i = 0; i <= 50; i++){
    const obj = {
        id: i,
        id_user:`${id[i]}`,
        hash_user:`${hash[i]}`
    }
    userHash.push(obj)
    if(i == 50){
        console.log('Данные в JSON. Успех!')
        
    }
    }
fs.writeFileSync('IdHash.json', JSON.stringify(userHash))
}
object()
