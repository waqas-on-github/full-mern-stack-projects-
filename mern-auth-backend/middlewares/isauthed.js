import jwt from "jsonwebtoken";

function isauthed (req, res , next ) {
    const token = req.cookies.token;
if(token){
    const varified = jwt.verify(token , process.env.SECRET)
    console.log(varified);

}




}

export{
    isauthed
}