import { Marker, Popup } from 'react-leaflet';
import { getIcons } from '../scripts/MapUtils.js'

const PinsLayer = ( {locations} ) => {

  const { redIcon, 
          redIconWithDollar, 
          greenIcon, 
          greenIconWithDollar, 
          defaultIcon 
        } = getIcons();

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