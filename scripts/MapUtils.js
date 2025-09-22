import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

// Default blue icon (same as Leaflet's default)
const defaultIcon = L.icon({
    iconUrl: '../images/marker-icon.png',
    shadowUrl: '../images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Red icon
const redIcon = L.icon({
    iconUrl: '../images/marker-icon-red.png',
    shadowUrl: '../images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Red icon (variant)
const redIconWithDollar = L.icon({
    iconUrl: '../images/marker-icon-red-dollar.png',
    shadowUrl: '../images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Green icon
const greenIcon = L.icon({
    iconUrl: '../images/marker-icon-green.png',
    shadowUrl: '../images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Green icon (variant)
const greenIconWithDollar = L.icon({
    iconUrl: '../images/marker-icon-green-dollar.png',
    shadowUrl: '../images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

export function getIcons() {
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