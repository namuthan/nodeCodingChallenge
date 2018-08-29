'use strict';

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

var _database = require('../../database');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.create = function (body) {
    console.log('saving message to the json file');
    var msg = new _model2.default(body);
    _database2.default.appendMessage(msg);
    return msg;
};

exports.read = function () {
    return _database2.default.readMessages();
};