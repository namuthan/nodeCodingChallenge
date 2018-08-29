import config from '../config'

exports.get = key => {
    console.log("key " + key)
    return process.env[key] || config[key]
}