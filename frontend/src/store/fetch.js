import axios from "axios";

const fetchAllStocks = async (setAllStocks)=>{
    try{
        const response = await axios.get("/api/stocks");
        setAllStocks(response.data.stocks);
    }catch(err){
        setAllStocks([]);
    }
};

export default fetchAllStocks;
