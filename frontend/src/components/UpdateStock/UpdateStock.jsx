import {Fragment} from "react";
import StockInput from "../StockInput/StockInput.jsx";
import "../StockInput/StockInput.css"

export default function UpdateStock(){
    return <Fragment>
        <div className={"update-stocks"}>Update Stocks</div>
        <StockInput symbol={true} name={true} description={true} price={true} buttonType={"Update Stock"} updateStock={true}/>
    </Fragment>
}
