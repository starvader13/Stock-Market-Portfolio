import StockComponent from "./StockComponent.jsx";
import Header from "../Header/Header.jsx";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {allStocksAtom, updatedWatchlistAtom} from "../../store/atom.js";
import PopupComponent from "../PopupComponent/PopupComponent.jsx";
import ("./home.css")

export default function Home(){

    const allStocks = useRecoilValue(allStocksAtom);
    const updatedWatchlist = useRecoilValue(updatedWatchlistAtom)
    const setUpdatedWatchlist = useSetRecoilState(updatedWatchlistAtom);

    if(updatedWatchlist){
        setTimeout(()=>{
            setUpdatedWatchlist(false);
        }, 1000)
    }

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
                return <StockComponent key={stock._id} updateId={stock._id} index={index} name={stock.name} price={stock.price} symbol={stock.symbol} watchlist={stock.watchlist}/>
            })
        }
    </div>
}
