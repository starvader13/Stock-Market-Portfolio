import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {useSetRecoilState} from "recoil";
import {updatedWatchlistAtom, updateAllStockStateAtom} from "../../store/atom.js";

import("./home.css")

export default function StockComponent({id, index, name, price, symbol, watchlist, description, selectDescription, descriptionId}){

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

    return <div>
        <div className={"stock-component"}>
            <div className={"index-symbol"}>
                <div className={"index"}>{index}.</div>
                <div className={"symbol"}>{symbol}</div>
            </div>
            <div className={"name-price"}>
                <div className={"name"}>{name}</div>
                <div className={"price"}>{price}</div>
            </div>
            <div className={"add-to-watchlist"} onClick={()=>addToWatchlist(id)}>{ watchlist? "Remove From Watchlist" : "Add To Watchlist"}</div>
            <button className={"description"} onClick={()=>selectDescription(id)}> {descriptionId === id ? "-" : "+"} </button>
        </div>
        <div>{descriptionId === id ? description : null}</div>
    </div>
}
