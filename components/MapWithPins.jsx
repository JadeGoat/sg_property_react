import { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useMap } from 'react-leaflet';
import PinsLayer from './PinsLayer';
import PinsLegendLayer from './LegendLayer';
import 'leaflet.heat';
import 'leaflet/dist/leaflet.css';
import '../css/MapWithPins.css'

const MapWithPins = ( {centerCoordinate, zoomValue, locations, newCenter} ) => {

  function RecenterMap({ center }) {
    const map = useMap();
    
    useEffect(() => {
        if (center) {
          map.flyTo(center, map.getZoom());
        }
      }, [center, map]);

      return null;
    }

    const legendHtml = `
        <p><b>Pin Legend</b></p>
        <section>
            <div><img src="../images/marker-icon-red.png"/><i>Seasonal Only (FOC)</i></div>
            <div><img src="../images/marker-icon-red-dollar.png"/><i>Seasonal Only</i></div>
            <div><img src="../images/marker-icon-green.png"/><i>Short Term Parking (FOC)</i></div>
            <div><img src="../images/marker-icon-green-dollar.png"/><i>Short Term Parking</i></div>
        <section>
      `

    return (
      <MapContainer className='mapWithPinsContainer' center={centerCoordinate} zoom={zoomValue}>
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

export default MapWithPins;
