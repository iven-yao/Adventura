import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trip from "./Trip";
import HomePage from "./HomePage";
import NavBar from "./common/navbar";


export default function Main() {
    return (
        <div className="bg-black">
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/trip" element={<Trip/>}/>
            </Routes>
        </BrowserRouter>
        </div>
    );
}