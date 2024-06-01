import {atom, selector} from "recoil";
import axios from "axios";

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

export const allStocksAtom = selector({
    key: "allStocksAtom",
    get: async ()=>{
        try{
            const response = await axios.get("http://localhost:4000/api/stocks");
            return response.data.stocks;
        }catch(err){
            return [];
        }
    }
})

export const updatedWatchlistAtom = atom({
    key: "updatedWatchlistAtom",
    default: ""
})
