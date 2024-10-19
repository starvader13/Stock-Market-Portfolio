import { useEffect, useState } from "react";
import { signDetailsAtom } from "../../store/atom.js";
import { useRecoilState, useSetRecoilState } from "recoil";
import { validateEmail } from '../../utils/RegexValidation.js';

export default function Input() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const setSignDetails = useSetRecoilState(signDetailsAtom);
    // create the sign details is valid or not
    useEffect(() => {
        if (email && !validateEmail(email)) {
            setEmailError("Invalid email address");
        } else {
            setEmailError("");
        }
        if (password && password.length < 6) {
            setPasswordError("Password must be at least 6 characters");
        } else {
            setPasswordError("");
        }
        setSignDetails({ email: email, password: password });
    }, [email, password, setSignDetails]);
    return (
        <div className="input-box">
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            {emailError && <span className="error">{emailError}</span>}
            <input
                type="password"
                placeholder="Password"
                value={password}  
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            {passwordError && <span className="error">{passwordError}</span>}
        </div>
    );
}