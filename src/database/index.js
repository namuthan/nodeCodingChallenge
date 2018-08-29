import conf from '../configuration'
import Stats from '../api/stats/model'
import fs from 'fs'

exports.connect = () => {
    console.log('Database Connected!')
    console.log(conf.get("JSON_FILE_NAME"))
}

var msgs = []

exports.appendMessage = (msg) => {
    msgs.push(msg)
}

exports.readMessages = () => {
    return msgs
}

exports.saveMessages = () => {
    if (msgs.length < 0) return 
    
    // save message to the file 
    console.log('Saving msgs to the json file')
    const json = JSON.stringify(msgs)
    var fs = require('fs');
    fs.writeFile('myjsonfile.json', json, 'utf8', (err) => {
        if (err) throw err;
        console.log('complete');
    });
}

exports.loadMessages = () => {
    fs.readFile('myjsonfile.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
            throw err;
        } else {
            try {
                msgs = JSON.parse(data)
            } catch (err) {
                
            }
        }
    });
}

exports.getStats = () => {
    let numberOfCalls = msgs.length
    let lastMessage = msgs[msgs.length - 1]
    return Stats(numberOfCalls, lastMessage)
}