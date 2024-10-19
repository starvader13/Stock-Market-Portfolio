import './App.css';
import React, { Suspense } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
const SignIn = React.lazy(() => import("./components/Sign/SignIn.jsx"));
const SignUp = React.lazy(() => import("./components/Sign/SignUp.jsx"));
const Home = React.lazy(() => import("./components/Home/Home.jsx"));
const Watchlist = React.lazy(() => import("./components/Watchlist/Watchlist.jsx"));
const AddStock = React.lazy(() => import("./components/AddStock/AddStock.jsx"));
const UpdateStock = React.lazy(() => import("./components/UpdateStock/UpdateStock.jsx"));
const DeleteStock = React.lazy(() => import("./components/DeleteStock/DeleteStock.jsx"));

function App() {
    //will check if there is usergmail in local storage
    
    const user = localStorage.getItem("userEmail") || null ;
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
                {/* used user atom to check if user is logged in or not  */}
                <Route path="/signin" element={user ? <Navigate to="/" /> : <Suspense fallback={<div>Loading...</div>}><SignIn /></Suspense>} />
                <Route path="/signup" element={user ? <Navigate to="/" /> : <Suspense fallback={<div>Loading...</div>}><SignUp /></Suspense>} />
                <Route path="/watchlist" element={<Suspense fallback={<div>Loading...</div>}><Watchlist /></Suspense>} />
                <Route path="/add-stock" element={<Suspense fallback={<div>Loading...</div>}><AddStock /></Suspense>} />
                <Route path="/update-stock" element={<Suspense fallback={<div>Loading...</div>}><UpdateStock /></Suspense>} />
                <Route path="/delete-stock" element={<Suspense fallback={<div>Loading...</div>}><DeleteStock /></Suspense>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
