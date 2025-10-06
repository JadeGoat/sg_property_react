import { useEffect, useState } from 'react';
import { getChildCareData, getElderlyCareData, getDisabilityServicesData } from '../scripts/RestApiDataSource.js'
import MapPersonalCare from '../components/MapPersonalCare.jsx';
import { getDistanceFromLatLonInKm } from '../scripts/MapUtils.js'
import { constructGeoJsonFromFeature, extractPostalCodeFromMetaData } from '../scripts/GeoJsonHelper.js'
import { getTownLatLon } from '../scripts/SgTownHelper.js'

const PlotPersonalCareByRadius = ({ town }) => {

    const [selectedLat, setSelectedLat] = useState(null);
    const [selectedLon, setSelectedLon] = useState(null);

    const [childCareData, setChildCareData] = useState(null);
    const [elderlyCareData, setElderlyCareData] = useState(null);
    const [disabilityServicesData, setDisabilityServicesData] = useState(null);
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
        getChildCareData(setChildCareData)
        getElderlyCareData(setElderlyCareData);
        getDisabilityServicesData(setDisabilityServicesData);
    }, []);

    useEffect(() => {
      
      if (childCareData) {
        const childCareFeatures = childCareData.features.filter(item => {
          const loc = item.geometry.coordinates;
          const dist = getDistanceFromLatLonInKm(selectedLat, selectedLon, loc[1], loc[0])
          return dist <= radius;
        });
        
        // Extract postal, address and name from html
        const filteredChildCareData = constructGeoJsonFromFeature(childCareFeatures)
        const metaPostalCodeData = extractPostalCodeFromMetaData(filteredChildCareData)
        
        // Merge feature together
        const mergedFeatures = filteredChildCareData.features.map((item, index) => ({
            ...item,
            ...metaPostalCodeData[index]
        }));
        setSelectedChildCareData(constructGeoJsonFromFeature(mergedFeatures));
      };

      if (elderlyCareData) {
        const elderlyCareFeatures = elderlyCareData.features.filter(item => {
          const loc = item.geometry.coordinates;
          const dist = getDistanceFromLatLonInKm(selectedLat, selectedLon, loc[1], loc[0]);
          return dist <= radius;
        });

        // Extract postal, address and name from html
        const filteredElderlyCareData = constructGeoJsonFromFeature(elderlyCareFeatures)
        const metaPostalCodeData = extractPostalCodeFromMetaData(filteredElderlyCareData)
       
        // Merge feature together
        const mergedFeatures = filteredElderlyCareData.features.map((item, index) => ({
            ...item,
            ...metaPostalCodeData[index]
        }));
        setSelectedElderlyCareData(constructGeoJsonFromFeature(mergedFeatures));
      };

      if (disabilityServicesData) {
        const disabilityServicesFeatures = disabilityServicesData.features.filter(item => {
          const loc = item.geometry.coordinates;
          const dist = getDistanceFromLatLonInKm(selectedLat, selectedLon, loc[1], loc[0]);
          return dist <= radius;
        });

        // Extract postal, address and name from html
        const filteredDisabilityServicesData = constructGeoJsonFromFeature(disabilityServicesFeatures)
        const metaPostalCodeData = extractPostalCodeFromMetaData(filteredDisabilityServicesData)
       
        // Merge feature together
        const mergedFeatures = filteredDisabilityServicesData.features.map((item, index) => ({
            ...item,
            ...metaPostalCodeData[index]
        }));
        setSelectedDisabilityServicesData(constructGeoJsonFromFeature(mergedFeatures));
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