import axios from "axios";

const fetchAllStocks = async (setAllStocks)=>{
    try{
        const response = await axios.get("http://localhost:4000/api/stocks");
        setAllStocks(response.data.stocks);
    }catch(err){
        setAllStocks([]);
    }
};

export default fetchAllStocks;
