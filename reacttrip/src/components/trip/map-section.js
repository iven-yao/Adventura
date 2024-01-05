export default function Map() {
    const defaultProps = {
        center: {
            lat: 34.0522,
            lng: -118.2437
        },
        zoom: 11
    };

    return (
        <div className='flex h-screen flex-col px-3 py-4 md:px-2'>
            <div className="mb-2 h-full items-start justify-start rounded-md bg-blue-600 p-2">
                MAP SECTION
                {/* <GoogleMapReact
                    bootstrapURLKeys={{ key: apikey }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    >
                </GoogleMapReact> */}
            </div>
        </div>
    );
}