const jwt = require("jsonwebtoken")
require('dotenv').config();

const jwtSecret = process.env.JWT_SECRET_STRING;

function checkUserAuthorization(req, res, next){
    const token = req.headers.authorization;
    const signature = token.split(" ")[1];

    try{
        const response = jwt.verify(signature, jwtSecret);
        next();
    }catch(e){
        return res.status(403).json({
            msg: "User Authorization Failed. Please SignIn"
        })
    }
}

module.exports = checkUserAuthorization;
