import {Fragment} from "react";
import {useSetRecoilState} from "recoil";
import {userSignedInAtom} from "../../store/atom.js";

export default function Logout(){

    const setUserSignedIn = useSetRecoilState(userSignedInAtom)

    const logout = ()=>{
        localStorage.removeItem("authorization");
        localStorage.removeItem("userEmail");
        setUserSignedIn(false);
    }

    return <Fragment>
        <div className={"logout"} onClick={logout}>Logout</div>
    </Fragment>
}
