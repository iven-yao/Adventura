import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trip from "./Trip";
import HomePage from "./HomePage";
import Navbar from "./common/Navbar";

export default function Main() {
    return (
        <div className="bg-black">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/trip" element={<Trip />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}