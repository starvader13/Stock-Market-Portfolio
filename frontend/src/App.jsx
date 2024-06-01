import './App.css'
import React, {Suspense} from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
const SignIn = React.lazy(()=>import("./components/Sign/SignIn.jsx"));
const SignUp = React.lazy(()=>import("./components/Sign/SignUp.jsx"));
const Home = React.lazy(()=>import("./components/Home/Home.jsx"));
const Watchlist = React.lazy(()=>import("./components/Watchlist/Watchlist.jsx"));

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path={"/"} element={<Suspense fallback={"loading..."}> <Home /> </Suspense>} />
                <Route path={"/signin"} element={<Suspense fallback={"loading..."}> <SignIn /> </Suspense>} />
                <Route path={"/signup"} element={<Suspense fallback={"loading..."}> <SignUp /> </Suspense>} />
                <Route path={"/watchlist"} element={<Suspense fallback={"loading..."}> <Watchlist /> </Suspense>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
