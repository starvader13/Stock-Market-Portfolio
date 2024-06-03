import axios from "axios";

const deleteStocks = async (data)=>{
    try{
        const config = {
            headers: {
                "authorization": localStorage.getItem("authorization") || "",
                symbol: data.symbol
            }
        };

        data.price = parseInt(data.price);

        const response =  await axios.delete("https://stock-market-portfolio-v6p1.onrender.com/api/delete-stocks", config);
        return (response.data.msg);
    } catch(e){
        return (e.response.data.msg);
    }
}

export default deleteStocks;
