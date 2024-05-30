const {Stock} = require("../db/script");

async function checkStockExists(req, res, next){
    const symbol = req.body.symbol;

    const response = await Stock.findOne({symbol: symbol});

    if(response){
       return res.status(409).json({
           msg: "Stock already exists. Please update the existing stock instead of adding a new one."
       })
    }

    next();
}

module.exports = checkStockExists;
