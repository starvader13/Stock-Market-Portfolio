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

export const signedInAtom = atom({
    key: "signedInAtom",
    default: false
})
