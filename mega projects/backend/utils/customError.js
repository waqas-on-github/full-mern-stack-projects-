class CustomError extends Error {
    constructor (message , code  , cause   ){ ;
    super(message , cause ) ;
    this.code =code 
 } 

}


export default CustomError



