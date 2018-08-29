import Router from 'koa-router'
import controller from './controller'
import messageValidator from './../../middleware/messageValidator'

let routes = new Router()

routes.get('/', async ctx => {
    const msgs = controller.read()
    ctx.body = msgs
})

routes.post('/', messageValidator, async ctx => {
    const data = ctx.request.body
    console.log(data)
    const msg = controller.create(data)
    ctx.body = msg
})

export default routes.routes();