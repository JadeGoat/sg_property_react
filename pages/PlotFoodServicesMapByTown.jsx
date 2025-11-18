import { useEffect, useState } from 'react';
import MapFoodServices from '../components/MapFoodServices.jsx';
import { extractPostalCodeFromPropertiesData, 
         extractPostalCodeFromMetaData, 
         filterGeoJsonData } from '../scripts/GeoJsonHelper.js'
import { getTownLatLon } from '../scripts/SgTownHelper.js'

// Example using GeoJson data on Map Component
// - Extracting for GeoJson metadata done on client
const PlotFoodServicesMapByTown = ({ town, hawkerCentreData, healthierEateriesData }) => {

    const [selectedLat, setSelectedLat] = useState(null);
    const [selectedLon, setSelectedLon] = useState(null);
    const [selectedHawkerCentreData, setSelectedHawkerCentreData] = useState(null);
    const [selectedHealthierEateriesData, setSelectedHealthierEateriesData] = useState(null);

    useEffect(() => {
        const latlon = getTownLatLon(town)
        setSelectedLat(latlon[0]);
        setSelectedLon(latlon[1]);
    }, [town]);

    useEffect(() => {

      // To rework
      if (hawkerCentreData) {
        const metaPostalCodeData = extractPostalCodeFromPropertiesData(hawkerCentreData)
        const filteredHawkerCentreData = filterGeoJsonData(hawkerCentreData, metaPostalCodeData, town)
        setSelectedHawkerCentreData(filteredHawkerCentreData);
      };

      // To rework
      if (healthierEateriesData) {
        const metaPostalCodeData = extractPostalCodeFromMetaData(healthierEateriesData)
        const filteredHealthierEateriesData = filterGeoJsonData(healthierEateriesData, metaPostalCodeData, town)
        setSelectedHealthierEateriesData(filteredHealthierEateriesData);
      };

    }, [hawkerCentreData, healthierEateriesData, town]);

    return (
        <div>
            <h2>By category</h2>
            {selectedHawkerCentreData && selectedHealthierEateriesData ?
                <MapFoodServices centerCoordinate={[1.3778, 103.8554]} 
                                 zoomValue={13} 
                                 hawkerCentreData={selectedHawkerCentreData}
                                 healthierEateriesData={selectedHealthierEateriesData} 
                                 newCenter={[selectedLat, selectedLon]} />:
                <p>Loading map with pins...</p>
            }
        </div>
    )
}

export default PlotFoodServicesMapByTown