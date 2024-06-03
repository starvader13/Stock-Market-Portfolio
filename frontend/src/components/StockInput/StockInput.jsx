
import './StockInput.css'
import {useForm} from "react-hook-form";
import addStocks from "../../utils/addStocks.js";
import updateStocks from "../../utils/updateStocks.js";
import deleteStocks from "../../utils/deleteStock.js";
import {useSetRecoilState, useRecoilValue} from "recoil";
import {onSubmitResponseAtom} from "../../store/atom.js";
import PopupComponent from "../PopupComponent/PopupComponent.jsx";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const StockInput= ({symbol=false, name=false, description=false, price=false, buttonType="", addStock=false, updateStock=false, deleteStock=false})=>{

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const setOnSubmitResponse = useSetRecoilState(onSubmitResponseAtom);
    const onSubmitResponse = useRecoilValue(onSubmitResponseAtom);

    const formAction = async (data)=>{
        const response = addStock ? await addStocks(data) : updateStock ? await updateStocks(data) : deleteStock ? await deleteStocks(data) : null;
        setOnSubmitResponse({
            msg: response,
            response: true
        })
    }

    useEffect(() => {
        if(onSubmitResponse.response===true){
            setTimeout(()=>{
                navigate("/");
                setOnSubmitResponse({response: false});
            }, [2000])
        }
    }, [setOnSubmitResponse, onSubmitResponse, navigate]);

    return <div className={"stock-input"}>
        <form onSubmit={handleSubmit(formAction)} className={"form"}>
            { onSubmitResponse.response && onSubmitResponse.msg ? <PopupComponent message={onSubmitResponse.msg} /> : null }
            {symbol ? <input type={"text"} placeholder={"Symbol"} {...register("symbol")}/> : null}
            {name ? <input type={"text"} placeholder={"Name"} {...register("name")}/> : null}
            {description ? <input type={"text"} placeholder={"Description"} {...register("description")}/> : null}
            {price ? <input type={"text"} placeholder={"Price"} {...register("price")}/> : null}
            <button type={"submit"}>{buttonType}</button>
        </form>
    </div>
}

export default StockInput;
