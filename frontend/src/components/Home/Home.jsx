import StockComponent from "./StockComponent.jsx";
import Header from "../Header/Header.jsx";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {allStocksAtom, updatedWatchlistAtom, updateAllStockStateAtom, userSignedInAtom} from "../../store/atom.js";
import PopupComponent from "../PopupComponent/PopupComponent.jsx";
import {useEffect} from "react";
import fetchAllStocks from "../../utils/fetch.js";
import ("./home.css");

export default function Home(){

    const allStocks = useRecoilValue(allStocksAtom);
    const setAllStocks = useSetRecoilState(allStocksAtom);
    const updatedWatchlist = useRecoilValue(updatedWatchlistAtom)
    const setUpdatedWatchlist = useSetRecoilState(updatedWatchlistAtom);
    const updateAllStockState = useRecoilValue(updateAllStockStateAtom);
    const userSignedIn = useRecoilValue(userSignedInAtom);
    const setUserSignedIn = useSetRecoilState(userSignedInAtom);

    useEffect(() => {
        fetchAllStocks(setAllStocks);
        setUserSignedIn(!!localStorage.getItem("authorization"));
    }, [updateAllStockState]);

   useEffect(()=>{
       setTimeout(()=>{
           setUpdatedWatchlist("");
       }, 1000);
   }, [updateAllStockState])

    return <div>
        <div className={"home"}>
            <div>Stock Portfolio Website</div>
        </div>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            {
                updatedWatchlist ? <PopupComponent message={updatedWatchlist} /> : ""
            }
        </div>
        <Header/>
        {
            allStocks.map((stock, index)=>{
                index+=1;
                return <StockComponent key={stock._id} updateId={stock._id} index={index} name={stock.name} price={stock.price} symbol={stock.symbol} watchlist={userSignedIn ? stock.watchlist : false}/>
            })
        }
    </div>
}
