import { useEffect, useState } from 'react';
import { getDistanceFromLatLonInKm } from '../scripts/MapUtils.js'
import { getTownLatLon } from '../scripts/SgTownHelper.js'
import { extractAndMerge } from '../scripts/GeoJsonHelper.js'
import MapFoodServices from '../components/MapFoodServices.jsx';

// Example using GeoJson data on Map Component
// - Extracting for GeoJson metadata done on client
const PlotFoodServicesMapByRadius = ({ town, hawkerCentreData, healthierEateriesData }) => {

    const [selectedLat, setSelectedLat] = useState(null);
    const [selectedLon, setSelectedLon] = useState(null);
    const [selectedHawkerCentreData, setSelectedHawkerCentreData] = useState(null);
    const [selectedHealthierEateriesData, setSelectedHealthierEateriesData] = useState(null);
    const [radius, ] = useState(2.5); // radius in km
    
    useEffect(() => {
        const latlon = getTownLatLon(town)
        setSelectedLat(latlon[0]);
        setSelectedLon(latlon[1]);
    }, [town]);

    useEffect(() => {

      // Filter hawker centre data based on radius
      if (hawkerCentreData) {
        const hawkerFeatures = hawkerCentreData.features.filter(item => {
          const loc = item.geometry.coordinates;
          const dist = getDistanceFromLatLonInKm(selectedLat, selectedLon, loc[1], loc[0])
          return dist <= radius;
        });

        // No need to extract postal and address from html
        // as the geojson is a different format
        setSelectedHawkerCentreData(hawkerFeatures);
      };

      // Filter healthier eateries data based on radius
      if (healthierEateriesData) {
        const eateriesFeatures = healthierEateriesData.features.filter(item => {
          const loc = item.geometry.coordinates;
          const dist = getDistanceFromLatLonInKm(selectedLat, selectedLon, loc[1], loc[0])
          return dist <= radius;
        });

        // Extract postal and address from html
        const mergedFeatures = extractAndMerge(eateriesFeatures)
        setSelectedHealthierEateriesData(mergedFeatures);
      };

    }, [radius, selectedLat, selectedLon, hawkerCentreData, healthierEateriesData]);

    return (
        <div>
            <h2>By radius from centre</h2>
            {selectedHawkerCentreData && selectedHealthierEateriesData && radius ?
                <MapFoodServices centerCoordinate={[1.3778, 103.8554]} 
                                 zoomValue={13} 
                                 hawkerCentreData={selectedHawkerCentreData}
                                 healthierEateriesData={selectedHealthierEateriesData} 
                                 newCenter={[selectedLat, selectedLon]}
                                 radius={radius}  />:
                <p>Loading map with pins...</p>
            }
        </div>
    )
}

export default PlotFoodServicesMapByRadius