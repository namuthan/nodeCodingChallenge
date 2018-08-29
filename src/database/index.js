import conf from '../configuration'
import Stats from '../api/stats/model'
import fs from 'fs'

let msgs = []

exports.appendMessage = (msg) => {
    msgs.push(msg)
}

exports.readMessages = () => {
    return msgs
}

exports.saveMessages = () => {
    // save message to the file
    const json = JSON.stringify(msgs)
    fs.writeFile(conf.get("JSON_FILE_NAME"), json, 'utf8', (err) => {
        if (err) throw err;
    });
}

exports.loadMessages = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(conf.get("JSON_FILE_NAME"), 'utf8', function readFileCallback(err, data){
            if (err){
                reject(err)
            } else {
                msgs = JSON.parse(data)
                resolve(msgs)
            }
        });
    })
}

exports.getStats = () => {
    let numberOfCalls = msgs.length
    let lastMessage = msgs[msgs.length - 1]
    return Stats(numberOfCalls, lastMessage)
}