import { useEffect, useState } from 'react';
import { getTownLatLon } from '../scripts/SgTownHelper.js'
import { getDistanceFromLatLonInKm } from '../scripts/MapUtils.js'
import MapPublicTransport from '../components/MapPublicTransport.jsx';

// Example using Csv & GeoJson data on Map Component
// - Extracting for GeoJson metadata done on backup
const PlotPublicTransportMapByRadius = ({ town, busStopData, mrtStationData }) => {

  const [selectedLat, setSelectedLat] = useState(null);
  const [selectedLon, setSelectedLon] = useState(null);
  const [busStopLocationPoints, setBusStopLocationPoints] = useState(null);
  const [mrtStationLocationPoints, setMrtStationLocationPoints] = useState(null);
  const [radius, ] = useState(2.5); // radius in km

  useEffect(() => {
    const latlon = getTownLatLon(town)
    setSelectedLat(latlon[0]);
    setSelectedLon(latlon[1]);
  }, [town]);

  useEffect(() => {

    // Filter bus stop data based on radius
    if (busStopData && busStopData.length > 0) {
      const filteredData = busStopData.filter(loc => {
        const dist = getDistanceFromLatLonInKm(selectedLat, selectedLon, loc.lat, loc.lon);
        return dist <= radius;
      });
      setBusStopLocationPoints(filteredData)
    }

    // Filter mrt station data based on radius
    if (mrtStationData && mrtStationData.length > 0) {
      const filteredData = mrtStationData.filter(loc => {
        const dist = getDistanceFromLatLonInKm(selectedLat, selectedLon, loc.lat, loc.lon);
        return dist <= radius;
      });
      setMrtStationLocationPoints(filteredData)
    }
  }, [radius, selectedLat, selectedLon, busStopData, mrtStationData]);

  return (
      <div>
          <h2>By radius from centre</h2>
          {busStopLocationPoints && radius ?
            <MapPublicTransport centerCoordinate={[1.3778, 103.8554]} 
                                zoomValue={13}
                                busStopLocations={busStopLocationPoints}
                                mrtStationLocations={mrtStationLocationPoints}
                                newCenter={[selectedLat, selectedLon]}
                                radius={radius} />:
            <p>Loading map with pins...</p>
          }
      </div>
  )
}

export default PlotPublicTransportMapByRadius