import { useEffect, useState } from 'react';
import { getBusStopData, getMrtStationData } from '../scripts/RestApiDataSource.js'
import { getTownLatLon } from '../scripts/SgTownHelper.js'
import { getDistanceFromLatLonInKm } from '../scripts/MapUtils.js'
import MapBusStop from '../components/MapBusStop.jsx';

const PlotBusStopMapByRadius = ({ town }) => {

  const [busStopData, setBusStopData] = useState(null);
  const [mrtStationData, setMrtStationData] = useState(null);
  const [selectedLat, setSelectedLat] = useState(null);
  const [selectedLon, setSelectedLon] = useState(null);
  const [busStopLocationPoints, setBusStopLocationPoints] = useState(null);
  const [radius, ] = useState(2.5); // radius in km

  useEffect(() => {

    // Set carpark data
    getBusStopData(setBusStopData);
    getMrtStationData(setMrtStationData);

    // Set lat, lon
    const latlon = getTownLatLon(town)
    setSelectedLat(latlon[0]);
    setSelectedLon(latlon[1]);

  }, [town]);

  useEffect(() => {
      if (busStopData && busStopData.length > 0) {
        const filteredData = busStopData.filter(loc => {
          const dist = getDistanceFromLatLonInKm(selectedLat, selectedLon, loc.lat, loc.lon);
          return dist <= radius;
        });
        setBusStopLocationPoints(filteredData)
      }
  }, [radius, selectedLat, selectedLon, busStopData]);

  return (
      <div>
          <h2>By radius from centre</h2>
          {busStopLocationPoints && radius ?
            <MapBusStop centerCoordinate={[1.3778, 103.8554]} 
                        zoomValue={13}
                        busStopLocations={busStopLocationPoints}
                        mrtStationLocations={mrtStationData}
                        newCenter={[selectedLat, selectedLon]}
                        radius={radius} />:
            <p>Loading map with pins...</p>
          }
      </div>
  )
}

export default PlotBusStopMapByRadius