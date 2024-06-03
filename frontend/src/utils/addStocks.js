import axios from "axios";

const addStocks = async (data)=>{
    try{
        const config = {
            headers: {
                "authorization": localStorage.getItem("authorization") || ""
            }
        };

        data.price = parseInt(data.price);

        const response =  await axios.post("http://localhost:4000/api/add-stocks", data, config);
        console.log(response.data.msg);
    } catch(e){
        console.log(e.response.data.msg);
    }
}

export default addStocks;
