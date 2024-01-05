'use client'
import GoogleMapReact from 'google-map-react';

const apikey:string = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY || "";
// Fit map to its bounds after the api is loaded
// const apiIsLoaded = (map, maps, places) => {
//     // Get bounds by our places
//     const bounds = getMapBounds(map, maps, places);
//     // Fit map to bounds
//     map.fitBounds(bounds);
//     // Bind the resize listener
//     bindResizeListener(map, maps, bounds);
//   };

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
            <div className="w-full h-full bg-cyan-600 rounded-md p-2">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: apikey }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    >
                </GoogleMapReact>
            </div>
        </div>
    );
}