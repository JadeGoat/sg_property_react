import { useEffect, useState } from 'react';
import { getTownPlanningArea } from '../scripts/RestApiDataSource.js'
import { extractFromPropertiesGeometryData } from '../scripts/GeoJsonHelper.js'
import { getTownLatLon } from '../scripts/SgTownHelper.js'
import { getPointsInPolygon } from '../scripts/MapUtils.js'
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
        const metaData = extractFromPropertiesGeometryData(childCareData)
        const filteredChildCareData = metaData.filter(item => {
          getPointsInPolygon([item.lat, item.lon], townAreaPoints)
        });
        setSelectedChildCareData(filteredChildCareData);
      };

      if (elderlyCareData) {
        const metaData = extractFromPropertiesGeometryData(elderlyCareData)
        const filteredElderlyCareData = metaData.filter(item => {
          getPointsInPolygon([item.lat, item.lon], townAreaPoints)
        });
        setSelectedElderlyCareData(filteredElderlyCareData);
      };

      if (disabilityServicesData) {
        const metaData = extractFromPropertiesGeometryData(disabilityServicesData)
        const filteredDisabilityServicesData = metaData.filter(item => {
          getPointsInPolygon([item.lat, item.lon], townAreaPoints)
        });
        setSelectedDisabilityServicesData(filteredDisabilityServicesData);
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