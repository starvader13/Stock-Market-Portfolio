import {useRecoilState, useRecoilValue} from "recoil";
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
    const [loading, setLoading] = useState(false);
    const [signUpData, setSignUpData] = useState("");

    const signup = useCallback(async ()=>{
        setLoading(true);
        try {
            if(!signUpDetails.email || !signUpDetails.password || !usernameDetails) {
                setSignUpData("Please fill all the fields");
                return;
            }
            const response = await axios.post("https://stock-market-portfolio-v6p1.onrender.com/api/signup", {
                username: usernameDetails,
                email: signUpDetails.email,
                password: signUpDetails.password
            });
            localStorage.setItem("userEmail", signUpDetails.email);
            setSignUpData(response.data.msg);
        } catch(err) {
            setSignUpData(err.response.data);
        }
        setLoading(false);
        window.location.reload();
    },[signUpDetails, usernameDetails]);

    return <div className={"sign-up"}>
        {signUpData ? <PopupComponent message={signUpData} /> : null }
        <UsernameInput />
        <Input />
        <button className={"log-in"} isLoading={loading} onClick={signup}>Sign Up</button>
    </div>
}
