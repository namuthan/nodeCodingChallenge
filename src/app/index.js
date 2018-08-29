import koa from 'koa'
import router from './../routing'
import bodyparser from 'koa-bodyparser'
import logger from 'koa-morgan'
import database from './../database'
import responseTime from './../middleware/responseTime'
import errorHandler from './../middleware/errorHandler'


const app = new koa()

app.use(responseTime)
app.use(errorHandler)
app.use(logger('combined'))
app.use(bodyparser())
app.use(router.routes())
app.use(ctx => { ctx.type = 'json'})

exports.start = async () => {
    console.log("Started")
    database.connect()
    database.loadMessages()
    app.listen(3000)
    console.log("connected")
}

setInterval( () => {
    database.saveMessages()
}, 30000);
