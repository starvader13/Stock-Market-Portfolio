const {Stock} = require("../db/script");

async function checkStockDoesNotExist(req, res, next){
    const symbol = req.body.symbol;

    const response = await Stock.findOne({symbol: symbol});

    if(!response){
        return res.status(409).json({
            msg: "Stock does not exists. Please add a new one instead of updating the existing stock ."
        })
    }

    next();
}

module.exports = checkStockDoesNotExist;
