import Message from './model'
import Database from '../../database'

exports.create = (body) => {
    let msg = new Message(body)
    Database.appendMessage(msg)
    return msg
}

exports.read = () => {
    return Database.readMessages()
}