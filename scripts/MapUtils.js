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
    const defaultIcon = createIcon("", multiplier);

    return { redIcon, redIconWithDollar, greenIcon, greenIconWithDollar, defaultIcon };
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