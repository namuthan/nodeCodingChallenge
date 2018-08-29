'use strict';

var _configuration = require('../configuration');

var _configuration2 = _interopRequireDefault(_configuration);

var _model = require('../api/stats/model');

var _model2 = _interopRequireDefault(_model);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.connect = function () {
    console.log('Database Connected!');
    console.log(_configuration2.default.get("JSON_FILE_NAME"));
};

var msgs = [];

exports.appendMessage = function (msg) {
    msgs.push(msg);
};

exports.readMessages = function () {
    return msgs;
};

exports.saveMessages = function () {
    if (msgs.length < 0) return;

    // save message to the file 
    var json = JSON.stringify(msgs);
    var fs = require('fs');
    fs.writeFile('myjsonfile.json', json, 'utf8', function (err) {
        if (err) throw err;
    });
};

exports.loadMessages = function () {
    _fs2.default.readFile('myjsonfile.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
            throw err;
        } else {
            try {
                msgs = JSON.parse(data);
            } catch (err) {}
        }
    });
};

exports.getStats = function () {
    var numberOfCalls = msgs.length;
    var lastMessage = msgs[msgs.length - 1];
    return (0, _model2.default)(numberOfCalls, lastMessage);
};