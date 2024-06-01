import {useEffect, useState} from "react";
import {useSetRecoilState} from "recoil";
import { signDetailsAtom} from "../../store/atom.js";

export default function Input(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const setSignDetails = useSetRecoilState(signDetailsAtom);

    useEffect(() => {
        setSignDetails({email: email, password: password});
    }, [email, password]);


    return <div className={"input-box"}>
        <input type={"text"} placeholder={"Email"} onChange={e=>setEmail(e.target.value)}/>
        <input type={"password"} placeholder={"Password"} onChange={e=>setPassword(e.target.value)}/>
    </div>
}
