import { useRef, useState } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
//   Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import getRoute from './mockapi/directionsServices';

const center = {
  lat: 34.048731,
  lng: -118.27718,
};

const libraries = ['places'];

const MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_KEY || '';

function TestMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: MAP_API_KEY,
    libraries: libraries
  });

//   const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);

  const originRef = useRef();
  const destiantionRef = useRef();

  async function calculateRoute() {
    if (originRef.current.value === "" || destiantionRef.current.value === "") {
      return;
    }
    // const directionsService = new window.google.maps.DirectionsService();
    // const results = await directionsService.route({
    //   origin: originRef.current.value,
    //   destination: destiantionRef.current.value,
    //   travelMode: window.google.maps.TravelMode.DRIVING,
    // });

    const results = getRoute();

    console.log(originRef.current.value);
    console.log(destiantionRef.current.value);
    console.log(results);

    

    setDirectionsResponse(results);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    originRef.current.value = "";
    destiantionRef.current.value = "";
  }

  return isLoaded ? (
    <div className="h-full flex flex-col">
      <div className="searchbox">
        <div className="row">
          <div className="col-lg-4">
            {/* <Autocomplete > */}
              <input
                type="text"
                name="Origin"
                className="form-control"
                placeholder="Origin"
                ref={originRef}
              />
            {/* </Autocomplete> */}
          </div>
          <div className="col-lg-4">
            {/* <Autocomplete> */}
              <input
                type="text"
                name="Destication"
                className="form-control"
                placeholder="Destication"
                ref={destiantionRef}
              />
            {/* </Autocomplete> */}
          </div>
          <div className="col-lg-2">
            <button
              type="submit"
              name="submit"
              className="btn btn-primary"
              onClick={calculateRoute}
            >
              Search
            </button>
          </div>
          <div className="col-lg-2">
            <button
              type="submit"
              name="clear"
              className="btn btn-danger"
              onClick={clearRoute}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
      <GoogleMap
        center={center}
        zoom={10}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        // onLoad={(map) => setMap(map)}
      >
        <Marker position={center} />
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>
    </div>
  ) : (
    <>MAP NOT LOADED</>
  );
}

export default TestMap;
