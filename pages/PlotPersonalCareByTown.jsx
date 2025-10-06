import { useEffect, useState } from 'react';
import { getChildCareData, getElderlyCareData, getDisabilityServicesData } from '../scripts/RestApiDataSource.js'
import MapPersonalCare from '../components/MapPersonalCare.jsx';
import { extractPostalCodeFromMetaData, filterGeoJsonData } from '../scripts/GeoJsonHelper.js'
import { getTownLatLon } from '../scripts/SgTownHelper.js'

// Example using GeoJson data on Map Component
// - Extracting for GeoJson metadata done on client
const PlotPersonalCareByTown = ({ town }) => {

    const [selectedLat, setSelectedLat] = useState(null);
    const [selectedLon, setSelectedLon] = useState(null);

    const [childCareData, setChildCareData] = useState(null);
    const [elderlyCareData, setElderlyCareData] = useState(null);
    const [disabilityServicesData, setDisabilityServicesData] = useState(null);
    const [selectedChildCareData, setSelectedChildCareData] = useState(null);
    const [selectedElderlyCareData, setSelectedElderlyCareData] = useState(null);
    const [selectedDisabilityServicesData, setSelectedDisabilityServicesData] = useState(null);

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
        const metaPostalCodeData = extractPostalCodeFromMetaData(childCareData)
        const filteredChildCareData = filterGeoJsonData(childCareData, metaPostalCodeData, town)
        setSelectedChildCareData(filteredChildCareData);
      };

      if (elderlyCareData) {
        const metaPostalCodeData = extractPostalCodeFromMetaData(elderlyCareData)
        const filteredElderlyCareData = filterGeoJsonData(elderlyCareData, metaPostalCodeData, town)
        setSelectedElderlyCareData(filteredElderlyCareData);
      };

      if (disabilityServicesData) {
        const metaPostalCodeData = extractPostalCodeFromMetaData(disabilityServicesData)
        const filteredDisabilityServicesData = filterGeoJsonData(disabilityServicesData, metaPostalCodeData, town)
        setSelectedDisabilityServicesData(filteredDisabilityServicesData);
      };

    }, [childCareData, elderlyCareData, disabilityServicesData, town]);

    return (
        <div>
            <h2>By category</h2>
            {selectedChildCareData && selectedElderlyCareData ?
                <MapPersonalCare centerCoordinate={[1.3778, 103.8554]} 
                                 zoomValue={13} 
                                 childCareData={selectedChildCareData}
                                 elderlyCareData={selectedElderlyCareData}
                                 disabilityServicesData={selectedDisabilityServicesData} 
                                 newCenter={[selectedLat, selectedLon]} />:
                <p>Loading map with pins...</p>
            }
        </div>
    )
}

export default PlotPersonalCareByTown