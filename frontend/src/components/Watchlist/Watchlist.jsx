import Header from "../Header/Header.jsx";
import StockComponent from "../Home/StockComponent.jsx";
import {useRecoilValue} from "recoil";
import {allStocksAtom} from "../../store/atom.js";
import("./watchlist.css")

export default function Watchlist(){

    const allStocks = useRecoilValue(allStocksAtom);

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
