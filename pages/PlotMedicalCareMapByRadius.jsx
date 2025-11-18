import { useEffect, useState } from 'react';
import {  } from '../scripts/RestApiDataSource.js'
import { getTownLatLon } from '../scripts/SgTownHelper.js'
import { getDistanceFromLatLonInKm } from '../scripts/MapUtils.js'
import MapMedicalCare from '../components/MapMedicalCare.jsx';

// Example using GeoJson data on Map Component
// - Extracting for GeoJson metadata done on backup
const PlotMedicalCareMapByRadius = ({ town, chasClinicData }) => {

  const [selectedLat, setSelectedLat] = useState(null);
  const [selectedLon, setSelectedLon] = useState(null);;
  const [chasClinicLocations, setChasClinicLocations] = useState(null);
  const [radius, ] = useState(2.5); // radius in km

  useEffect(() => {
    const latlon = getTownLatLon(town)
    setSelectedLat(latlon[0]);
    setSelectedLon(latlon[1]);

  }, [town]);

  useEffect(() => {
      if (chasClinicData && chasClinicData.length > 0) {
        const filteredData = chasClinicData.filter(loc => {
          const dist = getDistanceFromLatLonInKm(selectedLat, selectedLon, loc.lat, loc.lon);
          return dist <= radius;
        });
        setChasClinicLocations(filteredData)
      }
  }, [radius, selectedLat, selectedLon, chasClinicData]);

  return (
      <div>
          <h2>By radius from centre</h2>
          {chasClinicLocations && radius ?
            <MapMedicalCare centerCoordinate={[1.3778, 103.8554]} 
                            zoomValue={13}
                            chasClinicLocations={chasClinicLocations}
                            newCenter={[selectedLat, selectedLon]}
                            radius={radius} />:
            <p>Loading map with pins...</p>
          }
      </div>
  )
}

export default PlotMedicalCareMapByRadius