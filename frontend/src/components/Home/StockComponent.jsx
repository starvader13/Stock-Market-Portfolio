import {useCallback} from "react";
import axios from "axios";
import {useSetRecoilState} from "recoil";
import {updatedWatchlistAtom, updateAllStockStateAtom} from "../../store/atom.js";

import("./home.css")

export default function StockComponent({updateId, index, name, price, symbol, watchlist}){

    const setUpdatedWatchlist = useSetRecoilState(updatedWatchlistAtom);
    const setUpdateAllStockState= useSetRecoilState(updateAllStockStateAtom);

    const addToWatchlist = useCallback(async (id)=>{
        try{
            const response = await axios.put("https://stock-market-portfolio-v6p1.onrender.com/api/update-watchlist", {objectId: id},{
                headers: {
                    "authorization": localStorage.getItem("authorization") || ""
                }
            });
            setUpdatedWatchlist(response.data.msg);
        }catch(err){
            setUpdatedWatchlist(err.response.data.msg);
        }
        setUpdateAllStockState(updatedWatchlistState => !updatedWatchlistState);
    }, [setUpdateAllStockState, setUpdatedWatchlist])

    return <div className={"stock-component"}>
        <div className={"index-symbol"}>
            <div className={"index"}>{index}.</div>
            <div className={"symbol"}>{symbol}</div>
        </div>
        <div className={"name-price"}>
            <div className={"name"}>{name}</div>
            <div className={"price"}>{price}</div>
        </div>
        <div className={"add-to-watchlist"} onClick={()=>addToWatchlist(updateId)}>{ watchlist? "Remove From Watchlist" : "Add To Watchlist"}</div>
    </div>
}
