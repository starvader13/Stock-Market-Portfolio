import Header from "../Header/Header.jsx";
import StockComponent from "../Home/StockComponent.jsx";
import("./watchlist.css")

export default function Watchlist(){

    return <div>
        <div className={"watchlist"}>
            <div>Watchlist</div>
        </div>
        <Header />
        <StockComponent index={1} name={"nhi pata"} price={"bahut mehenga"} symbol={"apple"}/>
    </div>
}
