import Header from "../Header/Header.jsx";
import StockComponent from "../Home/StockComponent.jsx";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {allStocksAtom, updatedWatchlistStateAtom} from "../../store/atom.js";
import {useEffect} from "react";
import fetchAllStocks from "../../store/fetch.js";
import("./watchlist.css")

export default function Watchlist(){

    const allStocks = useRecoilValue(allStocksAtom);
    const setAllStocks = useSetRecoilState(allStocksAtom);
    const updatedWatchlistState = useRecoilValue(updatedWatchlistStateAtom);

    useEffect(() => {
        fetchAllStocks(setAllStocks);
    }, [updatedWatchlistState]);

    return <div>
        <div className={"watchlist"}>
            <div>Watchlist</div>
        </div>
        <Header />
        {
            allStocks.map((stock, index)=>{
                index+=1;
                return stock.watchlist ? <StockComponent key={stock._id} updateId={stock._id} index={index} name={stock.name} price={stock.price} symbol={stock.symbol} watchlist={stock.watchlist}/> : null
            })
        }
    </div>
}
