import Router from 'koa-router'
import messages from './../api/message/routes'
import stats from './../api/stats/routes'

let router = Router()

router.use('/messages', messages)
router.use('/stats', stats)

export default router;