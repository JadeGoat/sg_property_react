import { useEffect, useState } from 'react';
import { getHawkerCentreData, getHealthierEateriesData } from '../scripts/RestApiDataSource.js'
import MapHawkersAndEateries from '../components/MapHawkersAndEateries.jsx';
import { getDistanceFromLatLonInKm } from '../scripts/MapUtils.js'
import { constructGeoJsonFromFeature, extractPostalCodeFromMetaData } from '../scripts/GeoJsonHelper.js'
import { getTownLatLon } from '../scripts/SgTownHelper.js'

const PlotHawkersAndEateriesMapByRadius = ({ town }) => {

    const [selectedLat, setSelectedLat] = useState(null);
    const [selectedLon, setSelectedLon] = useState(null);

    const [hawkerCentreData, setHawkerCentreData] = useState(null);
    const [healthierEateriesData, setHealthierEateriesData] = useState(null);
    const [selectedHawkerCentreData, setSelectedHawkerCentreData] = useState(null);
    const [selectedHealthierEateriesData, setSelectedHealthierEateriesData] = useState(null);
    const [radius, ] = useState(2.5); // radius in km
    
    useEffect(() => {
        const latlon = getTownLatLon(town)
        setSelectedLat(latlon[0]);
        setSelectedLon(latlon[1]);
    }, [town]);

    useEffect(() => {
        getHawkerCentreData(setHawkerCentreData)
        getHealthierEateriesData(setHealthierEateriesData);
    }, []);

    useEffect(() => {

      if (hawkerCentreData) {
        const hawkerFeatures = hawkerCentreData.features.filter(item => {
          const loc = item.geometry.coordinates;
          const dist = getDistanceFromLatLonInKm(selectedLat, selectedLon, loc[1], loc[0])
          return dist <= radius;
        });

        // No need to extract postal and address from html
        // as the geojson is a different format
        const filteredHawkerCentreData = constructGeoJsonFromFeature(hawkerFeatures)
        setSelectedHawkerCentreData(filteredHawkerCentreData);
      };

      if (healthierEateriesData) {
        const eateriesFeatures = healthierEateriesData.features.filter(item => {
          const loc = item.geometry.coordinates;
          const dist = getDistanceFromLatLonInKm(selectedLat, selectedLon, loc[1], loc[0])
          return dist <= radius;
        });

        // Extract postal and address from html
        const filteredHealthierEateriesData = constructGeoJsonFromFeature(eateriesFeatures)
        const metaPostalCodeData = extractPostalCodeFromMetaData(filteredHealthierEateriesData)

        // Merge feature together
        const mergedFeatures = filteredHealthierEateriesData.features.map((item, index) => ({
            ...item,
            ...metaPostalCodeData[index]
        }));
        setSelectedHealthierEateriesData(constructGeoJsonFromFeature(mergedFeatures));
      };

    }, [radius, selectedLat, selectedLon, hawkerCentreData, healthierEateriesData]);

    return (
        <div>
            <h2>By radius from centre</h2>
            {selectedHawkerCentreData && selectedHealthierEateriesData && radius ?
                <MapHawkersAndEateries centerCoordinate={[1.3778, 103.8554]} 
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

export default PlotHawkersAndEateriesMapByRadius