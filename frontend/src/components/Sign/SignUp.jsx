import {useRecoilValue} from "recoil";
import Input from "./Input.jsx";
import UsernameInput from "./UsernameInput.jsx"
import './sign.css'
import {signDetailsAtom, usernameDetailsAtom} from "../../store/atom.js";
import axios from "axios";
import {useCallback, useState} from "react";
import PopupComponent from "../PopupComponent/PopupComponent.jsx";

export default function SignUp(){

    const signUpDetails = useRecoilValue(signDetailsAtom);
    const usernameDetails = useRecoilValue(usernameDetailsAtom);

    const [signUpData, setSignUpData] = useState("");

    const signup = useCallback(async ()=>{
        try {
            const response = await axios.post("/api/signup", {
                username: usernameDetails,
                email: signUpDetails.email,
                password: signUpDetails.password
            });
            setSignUpData(response.data.msg);
        } catch(err) {
            setSignUpData(err.response.data.msg);
        }
    },[signUpDetails, usernameDetails]);

    return <div className={"sign-up"}>
        {signUpData ? <PopupComponent message={signUpData} /> : null }
        <UsernameInput />
        <Input />
        <div className={"log-in"} onClick={signup}>Sign Up</div>
    </div>
}
