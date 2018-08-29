
export default class Message {
    constructor(body) {
        this.from = body.from
        this.to = body.to
        this.message = body.message
        this.timestamp = Date()
    }
  }