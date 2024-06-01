import './Navbar.css'
import {useNavigate} from "react-router-dom";

export default function Navbar(){
    const navigate = useNavigate();

    return <div className={"navbar"}>
        <div className={"navbar-left"}>
            <div className={"home"} onClick={()=>navigate("/")}>Home</div >
            <div className={"watchlist"} onClick={()=>navigate("/watchlist")}>Watchlist</div >
        </div>
        <div className={"navbar-right"}>
            <div className={"signin"} onClick={()=>navigate("/signin")}>SignIn</div >
            <div className={"signup"} onClick={()=>navigate("/signup")}>SignUp</div >
        </div>
    </div>
}
