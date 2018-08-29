import Message from './model'
import Database from '../../database'

exports.create = (body) => {
    console.log('saving message to the json file')
    let msg = new Message(body)
    Database.appendMessage(msg)
    return msg
}


exports.read = () => {
    return Database.readMessages()
}