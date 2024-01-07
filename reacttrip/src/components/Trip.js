import React from "react";
import MapSection from "./trip/map-section";
import SearchBox from "./trip/search-box";
import Plan from "./trip/plan-section";
export default function Trip() {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="flex-grow flex-col md:overflow-y-auto">
                <MapSection/>
            </div>
            <div className="w-full flex-col flex md:w-96">
                <SearchBox/>
                <Plan/>
            </div>
        </div>
    );
}