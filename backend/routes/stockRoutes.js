const { Router } = require("express");
const {Stock} = require("../db/script");
const checkUserAuthorization = require("../middlewares/checkUserAuthorization");
const stockInputValidation = require("../middlewares/stockInputValidation");
const checkStockExists = require("../middlewares/checkStockExists");
const checkStockDoesNotExists = require("../middlewares/checkStockDoesNotExists");
const stockSymbolInputValidation = require("../middlewares/stockSymbolInputValidation");
const objectInputValidation = require("../middlewares/objectInputValidation");

const stockRoute = Router();

stockRoute.get("/stocks", async (req, res)=>{
    const response = await Stock.find();

    if(!response){
        return res.status(500).json({
            msg: "Server encountered an error related to the Database"
        });
    }

    if(response.length===0){
        return res.status(200).json({
            msg: "The request has succeeded, but there is no content in Database to send"
        });
    }

    return res.status(200).json({
        stocks: response
    });
})

stockRoute.post("/add-stocks", checkUserAuthorization, stockInputValidation, checkStockExists, async (req, res)=>{
    const body = req.body;

    const response = Stock.create(body);
    if(!response){
        return res.status(404).json({
            msg: "Internal Server Error"
        })
    }

    return res.status(201).json({
        msg: "Stock Added Successfully"
    })
})

stockRoute.put("/update-stocks", checkUserAuthorization, stockInputValidation, checkStockDoesNotExists, async (req, res, next)=>{
    const body = req.body;

    const response = await Stock.findOneAndUpdate({symbol: body.symbol}, body);

    if(!response){
        return res.status(404).json({
            msg: "Internal Server Error"
        });
    }

    return res.status(200).json({
        msg: "Stock Updated Successfully",
        stock: response
    })
})

stockRoute.delete("/delete-stocks", checkUserAuthorization, stockSymbolInputValidation , checkStockDoesNotExists, async(req, res, next)=>{
    const {symbol} = req.body;

    const response = await Stock.findOneAndDelete({symbol: symbol})

    if(!response){
        return res.status(404).json({
            msg: "Internal Server Error"
        });
    }

    return res.status(200).json({
        msg: "Stock Deleted Successfully",
        stock: response
    })
})

stockRoute.put("/update-watchlist", checkUserAuthorization, objectInputValidation, async (req, res, next)=>{
    const body = req.body;

    const response = await Stock.findOneAndUpdate({_id: body.objectId},
        [{$set:
                    {watchlist:
                            {$not: "$watchlist"}
                    }
        }],
        {new: true}
    );

    if(!response){
        return res.status(404).json({
            msg: "Internal Server Error"
        });
    }

    return res.status(200).json({
        msg: "Watchlist Updated",
        stock: response
    })
})


module.exports = stockRoute;
