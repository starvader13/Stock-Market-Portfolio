const mongoose = require("mongoose");
require("dotenv").config();

const connectionString = process.env.DATABASE_URL;
const databaseName = "stock-market-portfolio";

mongoose.connect(`${connectionString}/${databaseName}`).then(()=>{
    console.log("Database Connected Successfully");
}).catch((err)=>{
    console.log("Database Connection Failed",err);
});

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

const stockSchema = new mongoose.Schema({
    symbol: String,
    name: String,
    description: String,
    price: Number,
    watchlist: {
        type: Boolean,
        default: false
    }
});

const User = mongoose.model('User', userSchema);
const Stock = mongoose.model('Stock', stockSchema);

module.exports = {
    User,
    Stock
}
