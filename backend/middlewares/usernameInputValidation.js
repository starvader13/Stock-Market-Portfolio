const zod = require("zod");

const usernameInputSchema= zod.object({
    username: zod.string()
});

function usernameInputValidation(req, res, next){
    const {username} = req.body;

    if(!usernameInputSchema.safeParse({username}.success)){
        return res.status(400).json({
            msg: "Invalid Username"
        });
    }

    next();
}

module.exports = usernameInputValidation;
