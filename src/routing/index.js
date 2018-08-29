import Router from 'koa-router'
import messages from './../api/message/routes'

let router = Router()

router.use('/messages', messages)

export default router;