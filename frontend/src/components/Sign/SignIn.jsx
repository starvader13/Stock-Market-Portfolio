import {RecoilRoot} from "recoil";
import Input from "./Input.jsx";
import("./sign.css");

export default function SignIn(){

    return <div className={"sign-up"}>
        <RecoilRoot>
            <Input />
        </RecoilRoot>
        <div className={"log-in"}>Log In</div>
        <div className={"new-account-button"}>Create New Account</div>
    </div>
}
