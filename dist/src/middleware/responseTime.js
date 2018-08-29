'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

async function responseTime(ctx, next) {
  console.log('Started tracking response time');
  var started = Date.now();
  await next();
  var ellapsed = Date.now() - started + 'ms';
  console.log('Response time is:', ellapsed);
  ctx.set('X-ResponseTime', ellapsed);
}

exports.default = responseTime;