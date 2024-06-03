import axios from "axios";

const addStocks = async (data)=>{
    try{
        const config = {
            headers: {
                "authorization": localStorage.getItem("authorization") || ""
            }
        };

        data.price = parseInt(data.price);

        const response =  await axios.post("https://stock-market-portfolio-v6p1.onrender.com/api/add-stocks", data, config);
        return (response.data.msg);
    } catch(e){
        return (e.response.data.msg);
    }
}

export default addStocks;
