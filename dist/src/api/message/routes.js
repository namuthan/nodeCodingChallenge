'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _controller = require('./controller');

var _controller2 = _interopRequireDefault(_controller);

var _messageValidator = require('./../../middleware/messageValidator');

var _messageValidator2 = _interopRequireDefault(_messageValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = new _koaRouter2.default();

routes.get('/', async function (ctx) {
    var msgs = _controller2.default.read();
    ctx.body = msgs;
});

routes.post('/', _messageValidator2.default, async function (ctx) {
    var data = ctx.request.body;
    console.log(data);
    var msg = _controller2.default.create(data);
    ctx.body = msg;
});

exports.default = routes.routes();