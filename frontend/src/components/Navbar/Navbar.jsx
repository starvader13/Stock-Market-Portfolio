import './Navbar.css'
import {useNavigate} from "react-router-dom";
import {Fragment} from "react";
import Logout from "../Sign/Logout.jsx";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {userSignedInAtom} from "../../store/atom.js";

export default function Navbar(){
    const navigate = useNavigate();
    const userSignedIn = useRecoilValue(userSignedInAtom);
    const setUserSignedIn = useSetRecoilState(userSignedInAtom);

    return <div className={"navbar"}>
        <div className={"navbar-left"}>
            <div className={"home"} onClick={()=>navigate("/")}>Home</div >
            <div className={"watchlist"} onClick={()=>navigate("/watchlist")}>Watchlist</div>
            <div className={"add-stock"} onClick={()=>navigate("/add-stock")}> Add Stocks</div>
            <div className={"update-stock"} onClick={()=>navigate("/update-stock")}>Update Stocks</div>
            <div className={"delete-stock"} onClick={()=>navigate("/delete-stock")}>Delete Stocks</div>
        </div>
        <div className={"navbar-right"}>
            {
                localStorage.getItem("userEmail") || userSignedIn ?
                    <Fragment >
                        <div>{localStorage.getItem("userEmail")}</div>
                        <Logout setUserSignedIn={setUserSignedIn} />
                    </Fragment>
                    :
                    <Fragment>
                        <div className={"signin"} onClick={()=>navigate("/signin")}>SignIn</div >
                        <div className={"signup"} onClick={()=>navigate("/signup")}>SignUp</div >
                    </Fragment>
            }
        </div>
    </div>
}
