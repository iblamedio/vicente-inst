"use client"

import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";

interface MapProps {
    lat:number,
    lng:number
}

export default function MapComponent (mapProps: MapProps)  {

    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}>
            <Map
                // style={{ width: '100%', height:"100%" }}
                defaultCenter={mapProps}
                defaultZoom={17}
                disableDefaultUI
                mapId="DEMO_MAP_ID"
            >
                <AdvancedMarker position={mapProps} />
            </Map>
        </APIProvider>
    )
}