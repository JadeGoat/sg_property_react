import { MapContainer, TileLayer, Circle } from 'react-leaflet';
import { RecenterMap, createLegend } from '../scripts/MapUtils.js'
import PinsLayer from './PinsLayer.jsx';
import PinsLegendLayer from './LegendLayer.jsx';
import 'leaflet/dist/leaflet.css';
import '../css/MapBusStop.css'

const MapPublicTransport = ({ centerCoordinate, zoomValue, busStopLocations, mrtStationLocations, newCenter, radius }) => {

    // Customize legend here
    const legnedIconColorList = ["-green", "-orange"]
    const legendIconDescList = ["Bus Stop", "MRT/LRT exits"]
    const legendHtml = createLegend(legnedIconColorList, legendIconDescList)

    return (
      <MapContainer className='mapBusStopContainer' center={centerCoordinate} zoom={zoomValue}>
        <RecenterMap center={newCenter} />
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <PinsLayer locations={busStopLocations} color="green" />
        <PinsLayer locations={mrtStationLocations} color="orange" />
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

export default MapPublicTransport;
