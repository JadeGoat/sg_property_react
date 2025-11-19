import { useEffect, useState } from 'react';
import { getTownPlanningArea } from '../scripts/RestApiDataSource.js'
import { getTownLatLon } from '../scripts/SgTownHelper.js'
import { getPointsInPolygon } from '../scripts/MapUtils.js'
import { extractAndMerge } from '../scripts/GeoJsonHelper.js'
import MapFoodServices from '../components/MapFoodServices.jsx';

// Example using GeoJson data on Map Component
// - Extracting for GeoJson metadata done on client
const PlotFoodServicesMapByTown = ({ town, hawkerCentreData, healthierEateriesData }) => {

  const [selectedLat, setSelectedLat] = useState(null);
  const [selectedLon, setSelectedLon] = useState(null);
  const [selectedHawkerCentreData, setSelectedHawkerCentreData] = useState(null);
  const [selectedHealthierEateriesData, setSelectedHealthierEateriesData] = useState(null);
  const [townAreaPoints, setTownAreaPoints] = useState(null);

  useEffect(() => {

    // Set planning area
    getTownPlanningArea(town, setTownAreaPoints)
    
    // Set lat, lon
    const latlon = getTownLatLon(town)
    setSelectedLat(latlon[0]);
    setSelectedLon(latlon[1]);

  }, [town]);

  useEffect(() => {

    if (townAreaPoints) {
      if (hawkerCentreData) {
        const filteredHawkerCentreData = hawkerCentreData.features.filter(item => {
          const loc = item.geometry.coordinates;
          const validPoint = getPointsInPolygon([loc[1], loc[0]], townAreaPoints)
          return validPoint;
        });

        // No need to extract postal and address from html
        // as the geojson is a different format
        setSelectedHawkerCentreData(filteredHawkerCentreData);
      };

      if (healthierEateriesData) {
        const eateriesFeatures = healthierEateriesData.features.filter(item => {
          const loc = item.geometry.coordinates;
          const validPoint = getPointsInPolygon([loc[1], loc[0]], townAreaPoints)
          return validPoint;
        });

        // Extract postal and address from html
        const mergedFeatures = extractAndMerge(eateriesFeatures)
        setSelectedHealthierEateriesData(mergedFeatures);
      };
    }

  }, [hawkerCentreData, healthierEateriesData, townAreaPoints]);

  return (
    <div>
        <h2>By category</h2>
        {selectedHawkerCentreData && selectedHealthierEateriesData ?
            <MapFoodServices centerCoordinate={[1.3778, 103.8554]} 
                             zoomValue={13} 
                             hawkerCentreData={selectedHawkerCentreData}
                             healthierEateriesData={selectedHealthierEateriesData} 
                             newCenter={[selectedLat, selectedLon]} 
                             townArea={townAreaPoints} />:
            <p>Loading map with pins...</p>
        }
    </div>
  )
}

export default PlotFoodServicesMapByTown