import Router from 'koa-router'
import controller from './controller'
import messageValidator from './../../middleware/messageValidator'

let routes = new Router()

routes.post('/', messageValidator, async ctx => {
    const data = ctx.request.body
    const msg = controller.create(data)
    ctx.body = msg
    ctx.status = 201
})

export default routes.routes();