
import {useEffect, useState} from "react";
import {useSetRecoilState} from "recoil";
import { signDetailsAtom} from "../../store/atom.js";

export default function Input(){

    const [username, setUsername] = useState("");

    const setUsernameDetails = useSetRecoilState(signDetailsAtom);

    useEffect(() => {
        setUsernameDetails({username: username});
    }, [username]);


    return <div className={"input-box"}>
        <input type={"text"} placeholder={"Username"} onChange={e=>setUsername(e.target.value)}/>
    </div>
}
