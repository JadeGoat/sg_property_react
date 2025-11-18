import { MapContainer, TileLayer, Polygon, Tooltip, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../css/MapCarpark.css'

const MapPlanningArea = ({ centerCoordinate, zoomValue, planningArea }) => {

    return (
      <MapContainer className='mapCarparkContainer' center={centerCoordinate} zoom={zoomValue}>
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
                        pathOptions={{ color: 'red', fillColor: 'red', weight: 2, fillOpacity: 0.2 }}>
                            <Tooltip>{name}</Tooltip>
                            <Popup>{name}</Popup>
                    </Polygon>
                );
            }): <></>
        }
      </MapContainer>
    );
};

export default MapPlanningArea;