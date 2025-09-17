import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { HeatmapLayer } from 'react-leaflet-heatmap-layer';
import 'leaflet/dist/leaflet.css';

const addressPoints = [
  [37.782551, -122.445368, 0.5],
  [37.782745, -122.444586, 0.6],
  [37.782842, -122.443688, 0.8],
  [37.782919, -122.442815, 1.0],
  [37.782992, -122.442112, 0.7],
  // Add more points as needed
];

function HeatMapExample() {
  return (
    <MapContainer center={[37.782551, -122.445368]} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <HeatmapLayer
        fitBoundsOnLoad
        fitBoundsOnUpdate
        points={addressPoints}
        longitudeExtractor={m => m[1]}
        latitudeExtractor={m => m[0]}
        intensityExtractor={m => parseFloat(m[2])}
      />
    </MapContainer>
  );
}

export default HeatMapExample;
