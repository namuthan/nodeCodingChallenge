'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _routing = require('./../routing');

var _routing2 = _interopRequireDefault(_routing);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _koaMorgan = require('koa-morgan');

var _koaMorgan2 = _interopRequireDefault(_koaMorgan);

var _koaResponseTime = require('koa-response-time');

var _koaResponseTime2 = _interopRequireDefault(_koaResponseTime);

var _database = require('./../database');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();
app.use((0, _koaResponseTime2.default)());
app.use((0, _koaMorgan2.default)('combined'));
app.use((0, _koaBodyparser2.default)());
app.use(_routing2.default.routes());
app.use(function (ctx) {
    ctx.type = 'json';
});

exports.start = async function () {
    console.log("Started");
    _database2.default.connect();
    _database2.default.loadMessages();
    app.listen(3000);
    console.log("connected");
};

setInterval(function () {
    _database2.default.saveMessages();
}, 1000);