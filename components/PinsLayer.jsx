import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const PinsLayer = ( {locations} ) => {

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

  return (
    <div>
        {
            locations.map((loc, idx) => (
            <Marker key={idx} 
                    position={[loc.lat, loc.lon]}
                    // Customize pins here
                    icon={loc.short_term_parking === "NO" && loc.free_parking === "NO" ? redIconWithDollar :
                          loc.short_term_parking === "NO" && loc.free_parking !== "NO"?  redIcon : 
                          loc.short_term_parking !== "NO" && loc.free_parking === "NO"?  greenIconWithDollar :
                          loc.short_term_parking !== "NO" && loc.free_parking !== "NO"?  greenIcon : defaultIcon} 
                    // icon={loc.status === "Unknown" ? redIcon : defaultIcon} // Debug purpose
            >
              <Popup>{loc.label}</Popup>
            </Marker>
        ))}
    </div>
  )
}

export default PinsLayer