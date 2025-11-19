import { useEffect, useState } from 'react';
import { getTownPlanningArea } from '../scripts/RestApiDataSource.js'
import { getTownLatLon } from '../scripts/SgTownHelper.js'
import { getPointsInPolygon } from '../scripts/MapUtils.js'
import { extractAndMerge } from '../scripts/GeoJsonHelper.js'
import MapPersonalCare from '../components/MapPersonalCare.jsx';

// Example using GeoJson data on Map Component
// - Extracting for GeoJson metadata done on client
const PlotPersonalCareByTown = ({ town, childCareData, elderlyCareData, disabilityServicesData }) => {

  const [selectedLat, setSelectedLat] = useState(null);
  const [selectedLon, setSelectedLon] = useState(null);
  const [selectedChildCareData, setSelectedChildCareData] = useState(null);
  const [selectedElderlyCareData, setSelectedElderlyCareData] = useState(null);
  const [selectedDisabilityServicesData, setSelectedDisabilityServicesData] = useState(null);
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
      if (childCareData) {
        const filteredChildCareData = childCareData.features.filter(item => {
          const loc = item.geometry.coordinates;
          const validPoint = getPointsInPolygon([loc[1], loc[0]], townAreaPoints)
          return validPoint;
        });

        // Extract postal and address from html
        const mergedFeatures = extractAndMerge(filteredChildCareData)
        setSelectedChildCareData(mergedFeatures);
      };

      if (elderlyCareData) {
        const filteredElderlyCareData = elderlyCareData.features.filter(item => {
          const loc = item.geometry.coordinates;
          const validPoint = getPointsInPolygon([loc[1], loc[0]], townAreaPoints)
          return validPoint;
        });

        // Extract postal and address from html
        const mergedFeatures = extractAndMerge(filteredElderlyCareData)
        setSelectedElderlyCareData(mergedFeatures);
      };

      if (disabilityServicesData) {
        const filteredDisabilityServicesData = disabilityServicesData.features.filter(item => {
          const loc = item.geometry.coordinates;
          const validPoint = getPointsInPolygon([loc[1], loc[0]], townAreaPoints)
          return validPoint;
        });

        // Extract postal and address from html
        const mergedFeatures = extractAndMerge(filteredDisabilityServicesData)
        setSelectedDisabilityServicesData(mergedFeatures);
      };
    }

  }, [childCareData, elderlyCareData, disabilityServicesData, townAreaPoints]);

  return (
      <div>
          <h2>By category</h2>
          {selectedChildCareData && selectedElderlyCareData ?
              <MapPersonalCare centerCoordinate={[1.3778, 103.8554]} 
                                zoomValue={13} 
                                childCareData={selectedChildCareData}
                                elderlyCareData={selectedElderlyCareData}
                                disabilityServicesData={selectedDisabilityServicesData} 
                                newCenter={[selectedLat, selectedLon]} 
                                townArea={townAreaPoints} />:
              <p>Loading map with pins...</p>
          }
      </div>
  )
}

export default PlotPersonalCareByTown