import {useCallback} from "react";
import axios from "axios";

import("./home.css")

export default function StockComponent({updateId, index, name, price, symbol }){
    const addToWatchlist = useCallback(async (id)=>{
        try{
            const response = await axios.put("http://localhost:4000/api/update-watchlist", {objectId: id}, {
                "authorization": localStorage.getItem("authorization")
            });
            console.log(response.data.msg);
        }catch(err){
            console.log(err.response.data.msg)
        }
    }, [])

    return <div className={"stock-component"}>
        <div className={"index-symbol"}>
            <div className={"index"}>{index}.</div>
            <div className={"symbol"}>{symbol}</div>
        </div>
        <div className={"name-price"}>
            <div className={"name"}>{name}</div>
            <div className={"price"}>{price}</div>
        </div>
        <div className={"add-to-watchlist"} onClick={()=>addToWatchlist(updateId)}>Add To Watchlist</div>
    </div>
}
