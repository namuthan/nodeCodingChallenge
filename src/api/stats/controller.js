import Database from '../../database'
import Stats  from './model'

exports.read = () => {
    const msgs = Database.readMessages()
    return {
        "numberOfCalls": msgs.length, 
        "lastMessage": msgs[msgs.length - 1]
    }
}