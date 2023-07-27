class CustomError extends Error  {
    constructor(message , code , cause  ) {
        super(message) 
        this.code = code , 
        this.cause =cause
    }
}


export {
    CustomError
}