import {Fragment} from "react";

export default function Logout({setUserSignedIn}){

    const logout = ()=>{
        localStorage.removeItem("authorization");
        localStorage.removeItem("userEmail");
        setUserSignedIn(false);
    }

    return <Fragment>
        <div className={"logout"} onClick={logout}>Logout</div>
    </Fragment>
}
