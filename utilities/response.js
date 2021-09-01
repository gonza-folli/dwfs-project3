class Response {
    constructor(error,status,msj,response) {
        this.error=error,
        this.status=status,
        this.msj=msj,
        this.response=response
    }
}

module.exports = Response