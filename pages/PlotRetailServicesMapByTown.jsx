import { useEffect, useState } from 'react';
import { getTownPlanningArea } from '../scripts/RestApiDataSource.js'
import { getTownLatLon, getPlanningTownName } from '../scripts/SgTownHelper.js'
import { getPointsInPolygon } from '../scripts/MapUtils.js'
import MapRetailServices from '../components/MapRetailServices.jsx';

// Example using Csv data on Map Component
// - Post processing was done on Csv data
const PlotRetailServicesMapByTown = ({ town, supermarketsData }) => {

  const [planningArea, setPlanningArea] = useState(null);
  const [supermarketsLocations, setSupermarketsLocations] = useState(null);
  const [selectedLat, setSelectedLat] = useState(null);
  const [selectedLon, setSelectedLon] = useState(null);
  const [townAreaPoints, setTownAreaPoints] = useState(null);

  useEffect(() => {

    // Set planning area
    const planningTownName = getPlanningTownName(town)
    getTownPlanningArea(planningTownName, setPlanningArea)

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

    // Filter supermarket data based on polygon area
    if (supermarketsData && supermarketsData.length > 0 && townAreaPoints) {
      const filteredData = supermarketsData.filter(loc => (
        getPointsInPolygon([loc.lat, loc.lon], townAreaPoints)
      ));
      setSupermarketsLocations(filteredData)
    }
  }, [supermarketsData, townAreaPoints]);

  return (
      <div>
          <h2>By category</h2>
          {supermarketsLocations ?
            <MapRetailServices centerCoordinate={[1.3778, 103.8554]} 
                               zoomValue={13}
                               supermarketsLocations={supermarketsLocations}
                               newCenter={[selectedLat, selectedLon]}
                               townArea={townAreaPoints} />:
            <p>Loading map with pins...</p>
          }
          
      </div>
  )
}

export default PlotRetailServicesMapByTown