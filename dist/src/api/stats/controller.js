'use strict';

var _database = require('../../database');

var _database2 = _interopRequireDefault(_database);

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.read = function () {
    var msgs = _database2.default.readMessages();
    return {
        "numberOfCalls": msgs.length,
        "lastMessage": msgs[msgs.length - 1]
    };
};