const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const { route } = require("./routes/route");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 7000;

app.use(bodyParser.json());
app.use(cors({
    origin: "http://localhost:5173/"
}))

app.use('/api', route);

app.use((err, req, res, next)=>{
    res.status(500).json({
        msg: "Internal Server, error",
        error: err
    });
});

app.listen(port, ()=>{
    console.log(`Server is Listening at PORT ${port}`);
});
