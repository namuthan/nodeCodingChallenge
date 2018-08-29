async function errorHandler (ctx, next) {
    try {
        await next()
      } catch (err) {
        ctx.status = 500
        ctx.body = `server error: ${err.message}`
        console.log('Error handler:', err.message)
      }
  }
  
  export default errorHandler