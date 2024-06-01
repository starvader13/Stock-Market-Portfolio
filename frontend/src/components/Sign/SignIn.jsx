import {useRecoilValue, useSetRecoilState} from "recoil";
import Input from "./Input.jsx";
import {signDetailsAtom, userSignedInAtom} from "../../store/atom.js";
import axios from "axios";
import {useCallback, useState} from "react";
import PopupComponent from "../PopupComponent/PopupComponent.jsx";
import {useNavigate} from "react-router-dom";
import("./sign.css");

export default function SignIn(){
    const navigate = useNavigate();

    const signInDetails = useRecoilValue(signDetailsAtom);
    const setUserSignedIn = useSetRecoilState(userSignedInAtom);

    const [signInData, setSignInData] = useState("");

    const signin = useCallback(async () => {
            try {
                const response = await axios.post("/api/signin", {
                    email: signInDetails.email,
                    password: signInDetails.password
                });
                setSignInData(response.data.msg);
                localStorage.setItem("authorization", response.data.token);
                localStorage.setItem("userEmail", signInDetails.email);
                setUserSignedIn(true)
            } catch (err) {
                setSignInData(err.response.data.msg);
            }
    }, [signInDetails]);

    return <div className={"sign-up"}>
        {signInData ? <PopupComponent message={signInData} /> : null }
        <Input />
        <div className={"log-in"} onClick={signin}>Log In</div>
        <div className={"new-account-button"} onClick={()=> navigate("/signup")}>Create New Account</div>
    </div>
}
