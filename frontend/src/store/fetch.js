import axios from "axios";

const fetchAllStocks = async (setAllStocks)=>{
    try{
        const response = await axios.get("https://stock-market-portfolio-v6p1.onrender.com/api/stocks");
        setAllStocks(response.data.stocks);
    }catch(err){
        setAllStocks([]);
    }
};

export default fetchAllStocks;
