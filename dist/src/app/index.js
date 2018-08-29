'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _routing = require('./../routing');

var _routing2 = _interopRequireDefault(_routing);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _koaMorgan = require('koa-morgan');

var _koaMorgan2 = _interopRequireDefault(_koaMorgan);

var _database = require('./../database');

var _database2 = _interopRequireDefault(_database);

var _errorHandler = require('./../middleware/errorHandler');

var _errorHandler2 = _interopRequireDefault(_errorHandler);

var _configuration = require('./../configuration');

var _configuration2 = _interopRequireDefault(_configuration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = _configuration2.default.get("PORT");

var app = new _koa2.default();

app.use((0, _koaMorgan2.default)(':method :url :status :res[content-length] - :response-time ms'));
app.use(_errorHandler2.default);
app.use((0, _koaBodyparser2.default)());
app.use(_routing2.default.routes());
app.use(function (ctx) {
    ctx.type = 'json';
});

exports.start = async function () {
    _database2.default.loadMessages().then(function (msg) {
        app.listen(port);
        console.log('listening on port ' + port);
    }).catch(function (err) {
        console.log('failed to load messages ' + err);
        app.listen(port);
        console.log('listening on port ' + port);
    });
};

setInterval(function () {
    _database2.default.saveMessages();
}, 30000);