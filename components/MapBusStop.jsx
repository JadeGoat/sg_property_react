import { MapContainer, TileLayer } from 'react-leaflet';
import { RecenterMap } from '../scripts/MapUtils.js'
import PinsLayer from './PinsLayer.jsx';
import PinsLegendLayer from './LegendLayer.jsx';
import 'leaflet.heat';
import 'leaflet/dist/leaflet.css';
import '../css/MapBusStop.css'

const MapBusStop = ( {centerCoordinate, zoomValue, locations, newCenter} ) => {

    // Customize legend here
    const legendHtml = `
        <p><b>Pin Legend</b></p>
        <section>
            <div>
              <img src="../images/marker-icon-red.png"/>
              <i>Seasonal Only (FOC)</i>
            </div>
            <div>
              <img src="../images/marker-icon-red-dollar.png"/>
              <i>Seasonal Only</i>
            </div>
            <div>
              <img src="../images/marker-icon-green.png"/>
              <i>Short Term Parking (FOC)</i>
            </div>
            <div>
              <img src="../images/marker-icon-green-dollar.png"/>
              <i>Short Term Parking</i>
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
        <PinsLayer locations={locations} />
        <PinsLegendLayer legendHtml={legendHtml} />
      </MapContainer>
    );
};

export default MapBusStop;
