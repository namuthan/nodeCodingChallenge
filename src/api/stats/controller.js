import Database from '../../database'
import Stats  from './model'

exports.read = () => {
    const msgs = Database.readMessages()
    return new Stats(msgs.length, msgs[msgs.length - 1])
}