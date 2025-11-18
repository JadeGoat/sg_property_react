import { useEffect, useState } from 'react';
import { getCarparkData, getTownPlanningArea } from '../scripts/RestApiDataSource.js'
import { getTownLatLon } from '../scripts/SgTownHelper.js'
import { getPointsInPolygon } from '../scripts/MapUtils.js'
import MapCarpark from '../components/MapCarpark.jsx';

// Example using Csv data on Map Component
// - Post processing was done on Csv data
const PlotCarparkMapByTown = ({ town }) => {

  const [data, setData] = useState(null);
  const [planningArea, setPlanningArea] = useState(null);
  const [selectedLat, setSelectedLat] = useState(null);
  const [selectedLon, setSelectedLon] = useState(null);
  const [locationPoints, setLocationPoints] = useState(null);
  const [townAreaPoints, setTownAreaPoints] = useState(null);

  useEffect(() => {

    // Set carpark data
    getTownPlanningArea(town, setPlanningArea)
    getCarparkData(setData);
    
    // Set lat, lon
    const latlon = getTownLatLon(town)
    setSelectedLat(latlon[0]);
    setSelectedLon(latlon[1]);

  }, [town]);

  useEffect(() => {
      if (planningArea && planningArea.length > 0) {
        const points_dict = planningArea[0]['town_boundary'][0][0]
        const points_list = points_dict.map(item => ([item.y, item.x]));
        setTownAreaPoints(points_list)
      }
  }, [data, planningArea]);

  useEffect(() => {
      if (data && data.length > 0 && townAreaPoints) {
        const filteredData = data.filter(loc => {
          const pt = [loc.lat, loc.lon]
          const result = getPointsInPolygon(pt, townAreaPoints)
          return result
        });
        setLocationPoints(filteredData)
      }
  }, [data, townAreaPoints]);

  return (
      <div>
          <h2>By category</h2>
          {locationPoints ?
            <MapCarpark centerCoordinate={[1.3778, 103.8554]} 
                        zoomValue={13}
                        locations={locationPoints}
                        newCenter={[selectedLat, selectedLon]} 
                        townArea={townAreaPoints}/>:
            <p>Loading map with pins...</p>
          }
      </div>
  )
}

export default PlotCarparkMapByTown