const zod = require("zod");

const signInputSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(4).max(12)
});

function signInputValidation(req, res, next){
    const {email, password} = req.body;

    if(!signInputSchema.safeParse({email, password}).success){
        return res.status(400).json({
            msg: "Invalid Email Or Password"
        });
    }

    next();
}

module.exports = signInputValidation;
