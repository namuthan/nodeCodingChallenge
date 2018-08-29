import { isEmpty as _isEmpty } from "validator";
import isEmpty from './../utils/is-empty'


async function messageValidator (ctx, next) {
  let errors = {}
  
  if (_isEmpty(ctx.request.body.from)) {
    errors.from = "from field is required"
  }

  if (_isEmpty(ctx.request.body.to)) {
    errors.to = "to field is required"
  }
  ctx.request.body.message = !isEmpty(ctx.request.body.message) ? ctx.request.body.message : ""
  
  if (isEmpty(errors)) {
    await next();
  } else {
    ctx.status = 400
    ctx.body = errors
  }
}

export default messageValidator;