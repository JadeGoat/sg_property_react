import { useState } from 'react';
import { MapContainer, TileLayer, Polygon, Tooltip, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../css/MapPlanningArea.css'

const MapPlanningArea = ({ centerCoordinate, zoomValue, planningArea }) => {

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredTownName, setHoveredTownName] = useState(" ");

  return (
    <div>
      <h4>Selected area: {hoveredTownName}</h4>
      <MapContainer className='mapPlanningAreaContainer' center={centerCoordinate} zoom={zoomValue}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        { planningArea ? 
            planningArea.map((item, idx) => {
                const poly = item['town_boundary'][0][0]
                const name = item['town_area']
                const latLngs = poly.map(p => [p.y, p.x]);
                return (  
                    <Polygon
                        key={idx}
                        positions={latLngs}
                        pathOptions={{ color: hoveredIndex === idx ? 'green': 'red', 
                                        fillColor: hoveredIndex === idx ? 'green': 'red', 
                                        weight: 2, 
                                        fillOpacity: 0.2 
                        }}
                        eventHandlers={{
                          mouseover: () => { setHoveredIndex(idx)
                                            setHoveredTownName(name) },
                          mouseout: () => {  setHoveredIndex(null)
                                             setHoveredTownName(" ") },
                        }}>
                            <Popup>{name}</Popup>
                    </Polygon>
                );
            }): <></>
        }
      </MapContainer>
    </div>
  );
};

export default MapPlanningArea;