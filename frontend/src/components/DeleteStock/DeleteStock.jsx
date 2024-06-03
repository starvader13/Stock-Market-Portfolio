import {Fragment} from "react";
import StockInput from "../StockInput/StockInput.jsx";
import "../StockInput/StockInput.css"

export default function DeleteStock(){
    return <Fragment>
        <div className={"delete-stocks"}>Delete Stocks</div>
        <StockInput symbol={true} buttonType={"delete Stock"} deleteStock={true}/>
    </Fragment>
}
