import { useEffect, useState } from 'react';
import { getSupermarketsData } from '../scripts/RestApiDataSource.js'
import { getTownLatLon } from '../scripts/SgTownHelper.js'
import { getDistanceFromLatLonInKm } from '../scripts/MapUtils.js'
import MapRetailServices from '../components/MapRetailServices.jsx';

const PlotRetailServicesMapByRadius = ({ town }) => {

  const [supermarketsData, setSupermarketsData] = useState(null);
  const [selectedLat, setSelectedLat] = useState(null);
  const [selectedLon, setSelectedLon] = useState(null);;
  const [supermarketsLocations, setSupermarketsLocations] = useState(null);
  const [radius, ] = useState(2.5); // radius in km

  // Example using GeoJson data on Map Component
  // - Extracting for GeoJson metadata done on backup
  useEffect(() => {

    // Set supermarkets data
    getSupermarketsData(setSupermarketsData);

    // Set lat, lon
    const latlon = getTownLatLon(town)
    setSelectedLat(latlon[0]);
    setSelectedLon(latlon[1]);

  }, [town]);

  useEffect(() => {
      if (supermarketsData && supermarketsData.length > 0) {
        const filteredData = supermarketsData.filter(loc => {
          const dist = getDistanceFromLatLonInKm(selectedLat, selectedLon, loc.lat, loc.lon);
          return dist <= radius;
        });
        setSupermarketsLocations(filteredData)
      }
  }, [radius, selectedLat, selectedLon, supermarketsData]);

  return (
      <div>
          <h2>By radius from centre</h2>
          {supermarketsLocations && radius ?
            <MapRetailServices centerCoordinate={[1.3778, 103.8554]} 
                               zoomValue={13}
                               supermarketsLocations={supermarketsLocations}
                               newCenter={[selectedLat, selectedLon]}
                               radius={radius} />:
            <p>Loading map with pins...</p>
          }
      </div>
  )
}

export default PlotRetailServicesMapByRadius