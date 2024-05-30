const zod = require("zod");

const stockSymbolInputSchema = zod.object({
    symbol: zod.string().max(50)
})

function stockSymbolInputValidation(req, res, next){
    const body = req.body;

    if(!stockSymbolInputSchema.safeParse(body).success){
        return res.status(400).json({
            msg: "Invalid Symbol",
            error: stockSymbolInputSchema.safeParse(body).error.message
        });
    }

    next()
}

module.exports = stockSymbolInputValidation;
