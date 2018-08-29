import config from '../config'

exports.get = key => {
    return process.env[key] || config[key]
}