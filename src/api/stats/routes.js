import Router from 'koa-router'
import controller from './controller'

let routes = new Router()

routes.get('/', async ctx => {
    const msgs = controller.read()
    ctx.body = msgs
})

export default routes.routes();