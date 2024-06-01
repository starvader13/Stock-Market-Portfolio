import {Fragment} from "react";
import {useNavigate} from "react-router-dom";

export default function Logout({setUserSignedIn}){
    const navigate=useNavigate();

    const logout = ()=>{
        localStorage.removeItem("authorization");
        localStorage.removeItem("userEmail");
        setUserSignedIn(false);
        navigate("/");
    }

    return <Fragment>
        <div className={"logout"} onClick={logout}>Logout</div>
    </Fragment>
}
