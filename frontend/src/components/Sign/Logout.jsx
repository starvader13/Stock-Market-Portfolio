import {Fragment} from "react";
import {useNavigate} from "react-router-dom";
import { useRecoilState } from "recoil";

export default function Logout({setUserSignedIn}){
    const navigate=useNavigate();
    // use recoilstate for user

    const logout = ()=>{
        localStorage.removeItem("authorization");
        localStorage.removeItem("userEmail");
        //remove user from local storage + set the user null
        setUserSignedIn(false);
        navigate("/");
    }

    return <Fragment>
        <div className={"logout"} onClick={logout}>Logout</div>
    </Fragment>
}
