import { useRef, useState } from "react";
import getRoute from "../mockapi/directionsServices";
import { MdAddCircleOutline, MdOutlineCancel } from "react-icons/md";
import RouteCalc from "./route-calculator";

let planCount = 0;
export default function Plan(props) {
    const originRef = useRef();
    const destiantionRef = useRef();
    const [displayAddSection, setDisplayAddSection] = useState(false);
    const [planList, setPlanList] = useState([]);
    
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

    const addPlan = () => {
        planCount += 1;
        setPlanList(planList.concat(newPlan(planCount)));
    }

    const newPlan = (planId) => {
        return (
            <div key={planId}>
                plan {planId}
            </div>
        );
    }

    return (
        <div className='flex grow flex-col px-3 py-4 md:px-2'>
            <div className="mb-2 flex flex-col w-full h-full items-start justify-start rounded-md bg-blue-600 p-2">
                <div id="plan">
                    {planList}
                </div>
                <RouteCalc clearRoute={clearRoute} calcRoute={calculateRoute} origRef={originRef} destRef={destiantionRef}/>
                <div className="flex text-center mx-auto my-2">
                    <span className="w-24 h-px my-auto bg-gray-200 dark:bg-gray-700"/>
                    <MdAddCircleOutline className="text-gray-200 cursor-pointer mx-2" onClick={addPlan} />
                    <span className="w-24 h-px my-auto bg-gray-200 dark:bg-gray-700"/>
                </div>
                
            </div>
        </div>
    );
}