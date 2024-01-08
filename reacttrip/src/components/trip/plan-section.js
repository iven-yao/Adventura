import { useRef } from "react";
import getRoute from "../mockapi/directionsServices";

export default function Plan(props) {
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
    
        
    
        props.setRoute(results);
    }

    function clearRoute() {
        props.setRoute(null);
        originRef.current.value = "";
        destiantionRef.current.value = "";
    }

    return (
        <div className='flex grow flex-col px-3 py-4 md:px-2'>
            <div className="mb-2 flex h-full items-start justify-start rounded-md bg-blue-600 p-2">
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
            </div>
        </div>
    );
}