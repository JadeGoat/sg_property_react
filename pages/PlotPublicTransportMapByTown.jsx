import { useEffect, useState } from 'react';
import { getTownPlanningArea } from '../scripts/RestApiDataSource.js'
import { getTownLatLon } from '../scripts/SgTownHelper.js'
import { getPointsInPolygon } from '../scripts/MapUtils.js'
import MapPublicTransport from '../components/MapPublicTransport.jsx';

// Example using Csv & GeoJson data on Map Component
  // - Extracting for GeoJson metadata done on backup
const PlotPublicTransportMapByTown = ({ town, busStopData, mrtStationData }) => {

  const [planningArea, setPlanningArea] = useState(null);
  const [selectedLat, setSelectedLat] = useState(null);
  const [selectedLon, setSelectedLon] = useState(null);
  const [busStopLocationPoints, setBusStopLocationPoints] = useState(null);
  const [mrtStationLocationPoints, setMrtStationLocationPoints] = useState(null);
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

    // Filter bus stop and mrt station data based on polygon area
    if (townAreaPoints) {
      if (busStopData && busStopData.length > 0) {
        const filteredData = busStopData.filter(loc => (
          getPointsInPolygon([loc.lat, loc.lon], townAreaPoints)
        ));
        setBusStopLocationPoints(filteredData)
      }

      if (mrtStationData && mrtStationData.length > 0) {
        const filteredData = mrtStationData.filter(loc => (
          getPointsInPolygon([loc.lat, loc.lon], townAreaPoints)
        ));
        setMrtStationLocationPoints(filteredData)
      }
    }
  }, [busStopData, mrtStationData, townAreaPoints]);

  return (
      <div>
          <h2>By category</h2>
          {busStopLocationPoints && mrtStationLocationPoints ?
            <MapPublicTransport centerCoordinate={[1.3778, 103.8554]} 
                                zoomValue={13}
                                busStopLocations={busStopLocationPoints}
                                mrtStationLocations={mrtStationLocationPoints}
                                newCenter={[selectedLat, selectedLon]}
                                townArea={townAreaPoints} />:
            <p>Loading map with pins...</p>
          }
          
      </div>
  )
}

export default PlotPublicTransportMapByTown