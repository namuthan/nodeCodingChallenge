"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validator = require("validator");

var _isEmpty2 = require("./../utils/is-empty");

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function messageValidator(ctx, next) {
  var errors = {};

  if ((0, _validator.isEmpty)(ctx.request.body.from)) {
    errors.from = "from field is required";
  }

  if ((0, _validator.isEmpty)(ctx.request.body.to)) {
    errors.to = "to field is required";
  }
  ctx.request.body.message = !(0, _isEmpty3.default)(ctx.request.body.message) ? ctx.request.body.message : "";

  if ((0, _isEmpty3.default)(errors)) {
    await next();
  } else {
    ctx.status = 400;
    ctx.body = errors;
  }
}

exports.default = messageValidator;