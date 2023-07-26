class CustomError extends Error  {
    constructor(message , code , cause  ) {
        super(message) 
        code = this.code  
        ,cause = this.cause
    }
}


export {
    CustomError
}