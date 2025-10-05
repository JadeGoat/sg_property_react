import { MapContainer, TileLayer, Circle } from 'react-leaflet';
import { RecenterMap } from '../scripts/MapUtils.js'
import PinsLayer from './PinsLayer.jsx';
import PinsLegendLayer from './LegendLayer.jsx';
import 'leaflet/dist/leaflet.css';
import '../css/MapBusStop.css'

const MapPublicTransport = ({ centerCoordinate, zoomValue, busStopLocations, mrtStationLocations, newCenter, radius }) => {

    // Customize legend here
    const legendHtml = `
        <p><b>Pin Legend</b></p>
        <section>
            <div>
              <img src="../images/marker-icon-green.png"/>
              <i>Bus Stop</i>
            </div>
            <div>
              <img src="../images/marker-icon-orange.png"/>
              <i>MRT/LRT exits</i>
            </div>
        <section>
      `

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
