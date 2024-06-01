import {RecoilRoot} from "recoil";
import Input from "./Input.jsx";
import UsernameInput from "./UsernameInput.jsx"
import './sign.css'

export default function SignUp(){

    return <div className={"sign-up"}>
        <RecoilRoot>
            <UsernameInput />
            <Input />
        </RecoilRoot>
        <div className={"log-in"}>Log In</div>
        <div className={"new-account-button"}>Create New Account</div>
    </div>
}
