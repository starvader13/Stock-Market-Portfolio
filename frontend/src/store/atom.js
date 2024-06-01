import {atom} from "recoil";

export const signDetailsAtom = atom({
    key: "signDetailsAtom",
    default: {
        email: "",
        password: ""
    }
})

export const usernameDetailsAtom = atom({
    key: "usernameDetailsAtom",
    default: ""
})

export const userSignedInAtom = atom({
    key: "userSignedInAtom",
    default: false
})
