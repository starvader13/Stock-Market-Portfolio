import './App.css'
import React, {Suspense} from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {RecoilRoot} from "recoil";
const SignIn = React.lazy(()=>import("./components/Sign/SignIn.jsx"));
const SignUp = React.lazy(()=>import("./components/Sign/SignUp.jsx"));
const Home = React.lazy(()=>import("./components/Home/Home.jsx"));
const Watchlist = React.lazy(()=>import("./components/Watchlist/Watchlist.jsx"));
const AddStock = React.lazy(()=>import("./components/AddStock/AddStock.jsx"));
const UpdateStock = React.lazy(()=>import("./components/UpdateStock/UpdateStock.jsx"));
const DeleteStock = React.lazy(()=>import("./components/DeleteStock/DeleteStock.jsx"));

function App() {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path={"/"} element={<Suspense fallback={"loading..."}> <Home /> </Suspense>} />
                    <Route path={"/signin"} element={<Suspense fallback={"loading..."}> <SignIn /> </Suspense>} />
                    <Route path={"/signup"} element={<Suspense fallback={"loading..."}> <SignUp /> </Suspense>} />
                    <Route path={"/watchlist"} element={<Suspense fallback={"loading..."}> <Watchlist /> </Suspense>} />
                    <Route path={"/add-stock"} element={<Suspense fallback={"loading..."}> <AddStock /> </Suspense>} />
                    <Route path={"/update-stock"} element={<Suspense fallback={"loading..."}> <UpdateStock /> </Suspense>} />
                    <Route path={"/delete-stock"} element={<Suspense fallback={"loading..."}> <DeleteStock /> </Suspense>} />
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    )
}

export default App
