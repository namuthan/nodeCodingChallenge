"use strict";

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.get = function (key) {
    console.log("key " + key);
    return process.env[key] || _config2.default[key];
};