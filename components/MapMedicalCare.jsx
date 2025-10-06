import { MapContainer, TileLayer, Circle } from 'react-leaflet';
import { RecenterMap, createLegend } from '../scripts/MapUtils.js'
import PinsLayer from './PinsLayer.jsx';
import PinsLegendLayer from './LegendLayer.jsx';
import 'leaflet/dist/leaflet.css';
import '../css/MapMedicalCare.css'

const MapMedicalCare = ({ centerCoordinate, zoomValue, chasClinicLocations, newCenter, radius }) => {

    // Customize legend here
    const legendIconColorList = ["-green"]
    const legendIconDescList = ["Chas Clinic"]
    const legendHtml = createLegend(legendIconColorList, legendIconDescList)

    return (
      <MapContainer className='mapMedicalCareContainer' center={centerCoordinate} zoom={zoomValue}>
        <RecenterMap center={newCenter} />
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <PinsLayer locations={chasClinicLocations} color="green" />
        { radius ? 
            <Circle
              center={newCenter}
              radius={radius * 1000} // takes in metres, converts km to metres
              pathOptions={{ color: 'pink', fillColor: 'pink', fillOpacity: 0.3 }}
            /> : <></>
        }
        <PinsLegendLayer legendHtml={legendHtml} />
      </MapContainer>
    );
};

export default MapMedicalCare;
