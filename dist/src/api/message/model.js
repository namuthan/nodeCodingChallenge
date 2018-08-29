"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Message = function Message(body) {
    _classCallCheck(this, Message);

    this.from = body.from;
    this.to = body.to;
    this.message = body.message;
    this.timestamp = Date();
};

exports.default = Message;