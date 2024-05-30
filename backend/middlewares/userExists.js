const {User} = require("../db/script");

const userExists = async (req, res, next)=>{
    const jsonData = req.body;

    const response = await User.findOne({email: jsonData.email});

    // The first '!' converts the response to a boolean and then flips the boolean value
    // The second '!' flips the boolean value back to its original boolean value
    req.exists = !!response;

    next();
}

module.exports = userExists;
