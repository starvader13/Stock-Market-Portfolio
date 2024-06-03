import axios from "axios";

const updateStocks = async (data)=>{
    try{
        const config = {
            headers: {
                "authorization": localStorage.getItem("authorization") || ""
            }
        };

        data.price = parseInt(data.price);

        const response =  await axios.put("https://stock-market-portfolio-v6p1.onrender.com/api/update-stocks", data, config);
        return (response.data.msg);
    } catch(e){
        return (e.response.data.msg);
    }
}

export default updateStocks;
