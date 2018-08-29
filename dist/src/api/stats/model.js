"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stats = function Stats(numberOfCalls, lastMessage) {
    _classCallCheck(this, Stats);

    this.numberOfCalls = numberOfCalls;
    this.lastMessage = lastMessage;
};

exports.default = Stats;