const { Router } = require('express');
const signInputValidation = require("../middlewares/signInputValidation");
const usernameInputValidation = require("../middlewares/usernameInputValidation");
const userExists = require("../middlewares/userExists");
const {User} = require("../db/script");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signRoute = Router();
const jwtSecret = process.env.JWT_SECRET_STRING;

signRoute.post("/signup", signInputValidation, usernameInputValidation, userExists, async (req, res)=>{
    if(req.exists){
        return res.status(409).json({
            msg: "User Already Exists. Please SignIn"
        })
    }

    const body = req.body

    const salt =  bcrypt.genSaltSync(10);
    body.password = bcrypt.hashSync(body.password, salt);

    const response = await User.create(body);

    if(!response){
        return res.status(500).json({
            msg: "Failed To Create A User. Internal Server Error"
        })
    }

    return res.status(201).json({
        msg: "User Created Successfully"
    })
})

signRoute.post("/signin", signInputValidation, userExists, async(req, res)=>{
    if(!req.exists){
        return res.status(409).json({
            msg: "User Does Not Exists. Please SignUp"
        })
    }

    const body = req.body;
    const userData = await User.findOne({email: body.email});
    const response = bcrypt.compareSync(body.password, userData.password);

    if(!response){
        return res.status(401).json({
            msg: "Either The Email Or The Password Is Incorrect"
        });
    }

    const signature = jwt.sign({email: body.email}, jwtSecret);
    const token = "Bearer " + signature;

    return res.status(200).json({
        msg: "User SignedIn Successfully",
        token: token
    });
})


module.exports = signRoute;
