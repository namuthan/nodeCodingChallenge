import koa from 'koa'
import router from './../routing'
import bodyparser from 'koa-bodyparser'
import morgan from 'koa-morgan'
import database from './../database'
import errorHandler from './../middleware/errorHandler'
import configuration from './../configuration'

const port = configuration.get("PORT")

const app = new koa()

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(errorHandler)
app.use(bodyparser())
app.use(router.routes())
app.use(ctx => { ctx.type = 'json'})

exports.start = async () => {
    database.loadMessages()
        .then(msg => {
            app.listen(port)
            console.log(`listening on port ${port}`)
        })
        .catch(err => {
            console.log(`failed to load messages ${err}`)
            app.listen(port)
            console.log(`listening on port ${port}`)
        })
}

setInterval( () => {
    database.saveMessages()
}, 30000);
