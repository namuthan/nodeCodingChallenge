'use strict';

var _configuration = require('../configuration');

var _configuration2 = _interopRequireDefault(_configuration);

var _model = require('../api/stats/model');

var _model2 = _interopRequireDefault(_model);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var msgs = [];

exports.appendMessage = function (msg) {
    msgs.push(msg);
};

exports.readMessages = function () {
    return msgs;
};

exports.saveMessages = function () {
    // save message to the file
    var json = JSON.stringify(msgs);
    _fs2.default.writeFile(_configuration2.default.get("JSON_FILE_NAME"), json, 'utf8', function (err) {
        if (err) throw err;
    });
};

exports.loadMessages = function () {
    return new Promise(function (resolve, reject) {
        _fs2.default.readFile(_configuration2.default.get("JSON_FILE_NAME"), 'utf8', function readFileCallback(err, data) {
            if (err) {
                reject(err);
            } else {
                msgs = JSON.parse(data);
                resolve(msgs);
            }
        });
    });
};

exports.getStats = function () {
    var numberOfCalls = msgs.length;
    var lastMessage = msgs[msgs.length - 1];
    return (0, _model2.default)(numberOfCalls, lastMessage);
};