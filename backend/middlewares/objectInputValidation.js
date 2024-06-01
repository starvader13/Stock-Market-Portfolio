const zod = require("zod");

const objectInputSchema = zod.string() || zod.number();

function objectInputValidation(req, res, next){
    const objectId = req.body.objectId;

    if(!objectInputSchema.safeParse(objectId).success){
        return res.status(400).json({
            msg: "Invalid Object Id"
        });
    }

    next();
}

module.exports = objectInputValidation;
