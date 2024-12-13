import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";

export default function MapComponent ()  {

    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}>
            <Map
                style={{ width: '100%', height:"100%" }}
                defaultCenter={{ lat: -27.13258075286012, lng: -48.60235724628996 }}
                defaultZoom={17}
                disableDefaultUI
                mapId="DEMO_MAP_ID"
            >
                <AdvancedMarker position={{ lat: -27.13258075286012, lng: -48.60235724628996 }} />
            </Map>
        </APIProvider>
    )
}