import { FaSearch } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
const RouteCalc = (props) => {
    return (
        <div className="grid grid-cols-6 gap-2 justify-between align-middle">
            <div className="w-full col-span-2">
                {/* <Autocomplete > */}
                <input
                    type="text"
                    name="Origin"
                    className="form-control"
                    placeholder="Origin"
                    ref={props.origRef}
                />
                {/* </Autocomplete> */}
            </div>
            <div className="w-full col-span-2">
                {/* <Autocomplete> */}
                <input
                    type="text"
                    name="Destication"
                    className="form-control"
                    placeholder="Destination"
                    ref={props.destRef}
                />
                {/* </Autocomplete> */}
            </div>
            <button
            type="submit"
            name="submit"
            className="btn btn-primary mx-auto"
            onClick={props.calcRoute}
            >
                <FaSearch/>
            </button>
            <button
            type="submit"
            name="clear"
            className="btn btn-danger mx-auto"
            onClick={props.clearRoute}
            >
                <MdOutlineCancel/>
            </button>
        </div>
    );
}

export default RouteCalc;