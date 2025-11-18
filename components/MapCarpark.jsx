import { MapContainer, TileLayer, Circle, Polygon } from 'react-leaflet';
import { RecenterMap, createLegend } from '../scripts/MapUtils.js'
import PinsCarparkLayer from './PinsCarparkLayer';
import PinsLegendLayer from './LegendLayer';
import 'leaflet/dist/leaflet.css';
import '../css/MapCarpark.css'

const MapCarpark = ({ centerCoordinate, zoomValue, locations, newCenter, radius, townArea }) => {

    // Customize legend here
    const legendIconColorList = ["-red", "-red-dollar", "-green", "-green-dollar"]
    const legendIconDescList = ["Seasonal Only (FOC)", "Seasonal Only", 
                                "Short Term Parking (FOC)", "Short Term Parking"]
    const legendHtml = createLegend(legendIconColorList, legendIconDescList)

    return (
      <MapContainer className='mapCarparkContainer' center={centerCoordinate} zoom={zoomValue}>
        <RecenterMap center={newCenter} />
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <PinsCarparkLayer locations={locations} />
        { radius ? 
            <Circle
              center={newCenter}
              radius={radius * 1000} // takes in metres, converts km to metres
              pathOptions={{ color: 'red', fillColor: 'red', weight: 2, fillOpacity: 0.2 }}
            /> : <></>
        }
        { townArea ? 
            <Polygon
              positions={townArea}
              pathOptions={{ color: 'red', fillColor: 'red', weight: 2, fillOpacity: 0.2 }}
            /> : <></>
        }
        <PinsLegendLayer legendHtml={legendHtml} />
      </MapContainer>
    );
};

export default MapCarpark;
