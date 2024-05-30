const zod = require("zod");

const stockInputSchema = zod.object({
    name: zod.string().max(100),
    description: zod.string().max(500),
    price: zod.number(),
    symbol: zod.string().max(50)
});

function stockInputValidation(req, res, next){
    const body = req.body;

    if(!stockInputSchema.safeParse(body).success){
        return res.status(400).json({
            msg: "Entered Stock Data does not follow the format",
            error: stockInputSchema.safeParse(body).error.message
        });
    }

    next();
}

module.exports = stockInputValidation;
