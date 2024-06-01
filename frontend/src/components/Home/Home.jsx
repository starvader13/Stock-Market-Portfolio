import StockComponent from "./StockComponent.jsx";
import Header from "../Header/Header.jsx";
import ("./home.css")

export default function Home(){

    return <div>
        <div className={"home"}>
            <div>Stock Portfolio Website</div>
        </div>
        <Header/>
        <StockComponent index={1} name={"nhi pata"} price={"bahut mehenga"} symbol={"apple"}/>
    </div>
}
