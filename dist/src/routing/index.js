'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _routes = require('./../api/message/routes');

var _routes2 = _interopRequireDefault(_routes);

var _routes3 = require('./../api/stats/routes');

var _routes4 = _interopRequireDefault(_routes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _koaRouter2.default)();

router.use('/messages', _routes2.default);
router.use('/stats', _routes4.default);

exports.default = router;