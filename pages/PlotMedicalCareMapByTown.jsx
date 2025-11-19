import { useEffect, useState } from 'react';
import { getTownPlanningArea } from '../scripts/RestApiDataSource.js'
import { getTownLatLon } from '../scripts/SgTownHelper.js'
import { getPointsInPolygon } from '../scripts/MapUtils.js'
import MapMedicalCare from '../components/MapMedicalCare.jsx';

// Example using GeoJson data on Map Component
// - Extracting for GeoJson metadata done on backup
const PlotMedicalCareMapByTown = ({ town, chasClinicData }) => {

  const [planningArea, setPlanningArea] = useState(null);
  const [selectedLat, setSelectedLat] = useState(null);
  const [selectedLon, setSelectedLon] = useState(null);;
  const [chasClinicLocations, setChasClinicLocations] = useState(null);
  const [townAreaPoints, setTownAreaPoints] = useState(null);

  useEffect(() => {

    // Set planning area
    getTownPlanningArea(town, setPlanningArea)

    // Set lat, lon
    const latlon = getTownLatLon(town)
    setSelectedLat(latlon[0]);
    setSelectedLon(latlon[1]);

  }, [town]);

  useEffect(() => {
    
    // Format planning area into useable polygon format
    if (planningArea && planningArea.length > 0) {
      const points_dict = planningArea[0]['town_boundary'][0][0]
      const points_list = points_dict.map(item => ([item.y, item.x]));
      setTownAreaPoints(points_list)
    }
  }, [planningArea]);

  useEffect(() => {

    // Filter carpark data based on polygon area
    if (chasClinicData && chasClinicData.length > 0 && townAreaPoints) {
      const filteredData = chasClinicData.filter(loc => (
        getPointsInPolygon([loc.lat, loc.lon], townAreaPoints)
      ));
      setChasClinicLocations(filteredData)
    }
  }, [chasClinicData, townAreaPoints]);

  return (
      <div>
          <h2>By category</h2>
          {chasClinicLocations ?
            <MapMedicalCare centerCoordinate={[1.3778, 103.8554]} 
                            zoomValue={13}
                            chasClinicLocations={chasClinicLocations}
                            newCenter={[selectedLat, selectedLon]}
                            townArea={townAreaPoints} />:
            <p>Loading map with pins...</p>
          }
          
      </div>
  )
}

export default PlotMedicalCareMapByTown