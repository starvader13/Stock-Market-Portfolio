import {Fragment} from "react";
import StockInput from "../StockInput/StockInput.jsx";
import "../StockInput/StockInput.css"

export default function AddStock(){
    return <Fragment>
        <div className={"add-stocks"}>Add Stocks</div>
        <StockInput symbol={true} name={true} description={true} price={true} buttonType={"Add Stock"} addStock={true}/>
    </Fragment>
}
