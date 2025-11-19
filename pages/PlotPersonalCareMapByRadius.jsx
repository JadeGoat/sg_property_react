import { useEffect, useState } from 'react';
import { getDistanceFromLatLonInKm } from '../scripts/MapUtils.js'
import { getTownLatLon } from '../scripts/SgTownHelper.js'
import { extractAndMerge } from '../scripts/GeoJsonHelper.js'
import MapPersonalCare from '../components/MapPersonalCare.jsx';

// Example using GeoJson data on Map Component
// - Extracting for GeoJson metadata done on client
const PlotPersonalCareByRadius = ({ town, childCareData, elderlyCareData, disabilityServicesData }) => {

    const [selectedLat, setSelectedLat] = useState(null);
    const [selectedLon, setSelectedLon] = useState(null);
    const [selectedChildCareData, setSelectedChildCareData] = useState(null);
    const [selectedElderlyCareData, setSelectedElderlyCareData] = useState(null);
    const [selectedDisabilityServicesData, setSelectedDisabilityServicesData] = useState(null);
    const [radius, ] = useState(2.5); // radius in km

    useEffect(() => {
        const latlon = getTownLatLon(town)
        setSelectedLat(latlon[0]);
        setSelectedLon(latlon[1]);
    }, [town]);

    useEffect(() => {
      
      // Filter child care data based on radius
      if (childCareData) {
        const childCareFeatures = childCareData.features.filter(item => {
          const loc = item.geometry.coordinates;
          const dist = getDistanceFromLatLonInKm(selectedLat, selectedLon, loc[1], loc[0])
          return dist <= radius;
        });
        
        // Extract postal, address and name from html
        const mergedFeatures = extractAndMerge(childCareFeatures)
        setSelectedChildCareData(mergedFeatures);
      };
      
      // Filter elderly care data based on radius
      if (elderlyCareData) {
        const elderlyCareFeatures = elderlyCareData.features.filter(item => {
          const loc = item.geometry.coordinates;
          const dist = getDistanceFromLatLonInKm(selectedLat, selectedLon, loc[1], loc[0]);
          return dist <= radius;
        });

        // Extract postal, address and name from html
        const mergedFeatures = extractAndMerge(elderlyCareFeatures)
        setSelectedElderlyCareData(mergedFeatures);
      };

      if (disabilityServicesData) {
        const disabilityServicesFeatures = disabilityServicesData.features.filter(item => {
          const loc = item.geometry.coordinates;
          const dist = getDistanceFromLatLonInKm(selectedLat, selectedLon, loc[1], loc[0]);
          return dist <= radius;
        });

        // Extract postal, address and name from html
        const mergedFeatures = extractAndMerge(disabilityServicesFeatures)
        setSelectedDisabilityServicesData(mergedFeatures);
      };

    }, [radius, selectedLat, selectedLon, childCareData, elderlyCareData, disabilityServicesData]);
    
    return (
        <div>
            <h2>By radius from centre</h2>
            {selectedChildCareData && selectedElderlyCareData && radius ?
                <MapPersonalCare centerCoordinate={[1.3778, 103.8554]} 
                                 zoomValue={13} 
                                 childCareData={selectedChildCareData}
                                 elderlyCareData={selectedElderlyCareData} 
                                 disabilityServicesData={selectedDisabilityServicesData}
                                 newCenter={[selectedLat, selectedLon]} 
                                 radius={radius} />:
                <p>Loading map with pins...</p>
            }
        </div>
    )
}

export default PlotPersonalCareByRadius