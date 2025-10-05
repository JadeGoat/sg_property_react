import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

function createIcon(iconDesc, multiplier = 1) {
    return L.icon({
        iconUrl: '../images/marker-icon' + iconDesc + '.png',
        shadowUrl: '../images/marker-shadow.png',
        iconSize: [25* multiplier, 41 * multiplier],
        iconAnchor: [12* multiplier, 41 * multiplier],
        popupAnchor: [1* multiplier, -34 * multiplier],
        shadowSize: [41* multiplier, 41 * multiplier]
    }); 
}

export function getIcons(multiplier = 1) {

    const redIcon = createIcon("-red", multiplier);
    const redIconWithDollar = createIcon("-red-dollar", multiplier);
    const greenIcon = createIcon("-green", multiplier);
    const greenIconWithDollar = createIcon("-green-dollar", multiplier);
    const orangeIcon = createIcon("-orange", multiplier);
    const defaultIcon = createIcon("", multiplier);

    return { redIcon, redIconWithDollar, greenIcon, greenIconWithDollar, orangeIcon, defaultIcon };
}

export function RecenterMap({ center }) {
    const map = useMap();
    
    useEffect(() => {
        if (center) {
        map.flyTo(center, map.getZoom());
        }
    }, [center, map]);

    return null;
}

export function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}