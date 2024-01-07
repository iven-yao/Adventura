import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trip from "./Trip";
import HomePage from "./HomePage";
import NavigationBar from "./common/navbar";
import TestMap from "./TestMap";


export default function Main() {
    return (
        <div className="bg-black">
            <BrowserRouter>
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/trip" element={<Trip />} />
                    <Route path="/map" element={<TestMap />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}