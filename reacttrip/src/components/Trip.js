import React, { useState } from "react";
import MapSection from "./trip/map-section";
import SearchBox from "./trip/search-box";
import Plan from "./trip/plan-section";
import { useJsApiLoader } from "@react-google-maps/api"; 

const libraries = ['places'];
const MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_KEY || '';

export default function Trip() {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: MAP_API_KEY,
        libraries: libraries
    });

    const [directionsResponse, setDirectionsResponse] = useState(null);

    const setRoute = (newRoute) => {
        setDirectionsResponse(newRoute);
    }

    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="flex-grow flex-col md:overflow-y-auto">
                {isLoaded ? <MapSection route={directionsResponse}/> : <p>Map is Loading</p>}
            </div>
            <div className="w-full flex-col flex md:w-96">
                <SearchBox/>
                <Plan setRoute={setRoute}/>
            </div>
        </div>
    );
}