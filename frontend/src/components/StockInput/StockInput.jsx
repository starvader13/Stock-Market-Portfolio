
import './StockInput.css'
import {useForm} from "react-hook-form";
import addStocks from "../../utils/addStocks.js";
import updateStocks from "../../utils/updateStocks.js";
import deleteStocks from "../../utils/deleteStock.js";

const StockInput= ({symbol=false, name=false, description=false, price=false, buttonType="", addStock=false, updateStock=false, deleteStock=false})=>{

    const { register, handleSubmit } = useForm();

    const formAction = (data)=>{
        addStock ? addStocks(data) : null ;
        updateStock ? updateStocks(data) : null;
        deleteStock ? deleteStocks(data) : null
    }

    return <div className={"stock-input"}>
        <form onSubmit={handleSubmit(formAction)} className={"form"}>
            {symbol ? <input type={"text"} placeholder={"Symbol"} {...register("symbol")}/> : null}
            {name ? <input type={"text"} placeholder={"Name"} {...register("name")}/> : null}
            {description ? <input type={"text"} placeholder={"Description"} {...register("description")}/> : null}
            {price ? <input type={"text"} placeholder={"Price"} {...register("price")}/> : null}
            <button type={"submit"}>{buttonType}</button>
        </form>
    </div>
}

export default StockInput;
