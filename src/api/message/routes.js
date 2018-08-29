import Router from 'koa-router'
import controller from './controller'

let routes = new Router()

routes.get('/', async ctx => {
    const msgs = controller.read()
    ctx.body = msgs
})

routes.post('/', async ctx => {
    const data = ctx.request.body
    console.log(data)
    const msg = controller.create(data)
    ctx.body = msg
})

export default routes.routes();