const asynchandler  = (fn) => async function (req, res, next) {
    try {
        await fn(req , res , next )
    } catch (error) {
        res.status( error.code  || error.statusCode || 500).json({
            sucess : false , 
            message : error.message
        })
    }
} 


export default  asynchandler
