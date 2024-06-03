import Header from "../Header/Header.jsx";
import StockComponent from "../Home/StockComponent.jsx";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {allStocksAtom, updateAllStockStateAtom, userSignedInAtom} from "../../store/atom.js";
import {useEffect, useState} from "react";
import fetchAllStocks from "../../utils/fetch.js";
import("./watchlist.css")

export default function Watchlist(){

    const allStocks = useRecoilValue(allStocksAtom);
    const setAllStocks = useSetRecoilState(allStocksAtom);
    const updateAllStockState = useRecoilValue(updateAllStockStateAtom);
    const signedIn = useRecoilValue(userSignedInAtom);

    const [watchlistDescriptionId, setWatchlistDescriptionId] = useState(null);

    const selectDescription = (id) =>{
        watchlistDescriptionId === id ? setWatchlistDescriptionId(null) : setWatchlistDescriptionId(id);
    }

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
                return stock.watchlist ? <StockComponent
                    key={stock._id}
                    id={stock._id}
                    index={index}
                    name={stock.name}
                    price={stock.price}
                    symbol={stock.symbol}
                    watchlist={stock.watchlist}
                    description={stock.description}
                    selectDescription={selectDescription}
                    descriptionId={watchlistDescriptionId}
                /> : null
            }) : null
        }
    </div>
}
