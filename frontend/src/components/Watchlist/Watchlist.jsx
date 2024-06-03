import Header from "../Header/Header.jsx";
import StockComponent from "../Home/StockComponent.jsx";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {allStocksAtom, updateAllStockStateAtom, userSignedInAtom} from "../../store/atom.js";
import {useEffect} from "react";
import fetchAllStocks from "../../utils/fetch.js";
import("./watchlist.css")

export default function Watchlist(){

    const allStocks = useRecoilValue(allStocksAtom);
    const setAllStocks = useSetRecoilState(allStocksAtom);
    const updateAllStockState = useRecoilValue(updateAllStockStateAtom);
    const signedIn = useRecoilValue(userSignedInAtom);

    useEffect(() => {
        fetchAllStocks(setAllStocks);
    }, [updateAllStockState]);

    return <div>
        <div className={"watchlist"}>
            <div>Watchlist</div>
        </div>
        <Header />
        {
            signedIn ?
            allStocks.map((stock, index)=>{
                index+=1;
                return stock.watchlist ? <StockComponent key={stock._id} updateId={stock._id} index={index} name={stock.name} price={stock.price} symbol={stock.symbol} watchlist={stock.watchlist}/> : null
            }) : null
        }
    </div>
}
