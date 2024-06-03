import axios from "axios";

const deleteStocks = async (data)=>{
    console.log(data)
    try{
        const config = {
            headers: {
                "authorization": localStorage.getItem("authorization") || "",
                symbol: data.symbol
            }
        };

        data.price = parseInt(data.price);

        const response =  await axios.delete("http://localhost:4000/api/delete-stocks", config);
        console.log(response.data.msg);
    } catch(e){
        console.log(e.response.data.msg);
    }
}

export default deleteStocks;
