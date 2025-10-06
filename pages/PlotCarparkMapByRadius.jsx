import { useEffect, useState } from 'react';
import { getCarparkData } from '../scripts/RestApiDataSource.js'
import { getTownLatLon } from '../scripts/SgTownHelper.js'
import { getDistanceFromLatLonInKm } from '../scripts/MapUtils.js'
import MapCarpark from '../components/MapCarpark.jsx';

const PlotCarparkMapByRadius = ({ town }) => {

  const [data, setData] = useState(null);
  const [selectedLat, setSelectedLat] = useState(null);
  const [selectedLon, setSelectedLon] = useState(null);
  const [locationPoints, setLocationPoints] = useState(null);
  const [radius, ] = useState(2.5); // radius in km
  
  // Example using Csv data on Map Component
  // - Post processing was done on Csv data
  useEffect(() => {

    // Set carpark data
    getCarparkData(setData);
    
    // Set lat, lon
    const latlon = getTownLatLon(town)
    setSelectedLat(latlon[0]);
    setSelectedLon(latlon[1]);

  }, [town]);

  useEffect(() => {
      if (data && data.length > 0) {
        const filteredData = data.filter(loc => {
          const dist = getDistanceFromLatLonInKm(selectedLat, selectedLon, loc.lat, loc.lon);
          return dist <= radius;
        });
        setLocationPoints(filteredData)
      }
  }, [radius, selectedLat, selectedLon, data]);

  return (
      <div>
          <h2>By radius from centre</h2>
          {locationPoints && radius ?
            <MapCarpark centerCoordinate={[1.3778, 103.8554]} 
                        zoomValue={13}
                        locations={locationPoints}
                        newCenter={[selectedLat, selectedLon]}
                        radius={radius} />:
            <p>Loading map with pins...</p>
          }
      </div>
  )
}

export default PlotCarparkMapByRadius