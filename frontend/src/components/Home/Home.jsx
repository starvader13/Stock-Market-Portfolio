import StockComponent from "./StockComponent.jsx";
import Header from "../Header/Header.jsx";
import {useRecoilValue} from "recoil";
import {allStocksAtom} from "../../store/atom.js";
import ("./home.css")

export default function Home(){

    const allStocks = useRecoilValue(allStocksAtom);

    return <div>
        <div className={"home"}>
            <div>Stock Portfolio Website</div>
        </div>
        <Header/>
        {
            allStocks.map((stock, index)=>{
                index+=1;
                return <StockComponent key={stock._id} updateId={stock._id} index={index} name={stock.name} price={stock.price} symbol={stock.symbol}/>
            })
        }
    </div>
}
