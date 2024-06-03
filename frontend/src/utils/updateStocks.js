import axios from "axios";

const updateStocks = async (data)=>{
    try{
        const config = {
            headers: {
                "authorization": localStorage.getItem("authorization") || ""
            }
        };

        data.price = parseInt(data.price);

        const response =  await axios.put("http://localhost:4000/api/update-stocks", data, config);
        console.log(response.data.msg);
    } catch(e){
        console.log(e.response.data.msg);
    }
}

export default updateStocks;
