import { useEffect, useState } from 'react';
import { getChildCareData, getElderlyCareData } from '../scripts/RestApiDataSource.js'
import MapChildAndElderlyCare from '../components/MapChildAndElderlyCare.jsx';
import { extractPostalCodeFromMetaData, filterGeoJsonData } from '../scripts/GeoJsonHelper.js'
import { getTownLatLon } from '../scripts/SgTownHelper.js'

const PlotChildAndElderlyCareMapByTown = ({ town }) => {

    const [selectedLat, setSelectedLat] = useState(null);
    const [selectedLon, setSelectedLon] = useState(null);

    const [childCareData, setChildCareData] = useState(null);
    const [elderlyCareData, setElderlyCareData] = useState(null);
    const [selectedChildCareData, setSelectedChildCareData] = useState(null);
    const [selectedElderlyCareData, setSelectedElderlyCareData] = useState(null);

    useEffect(() => {
        const latlon = getTownLatLon(town)
        setSelectedLat(latlon[0]);
        setSelectedLon(latlon[1]);
    }, [town]);

    useEffect(() => {
        getChildCareData(setChildCareData)
        getElderlyCareData(setElderlyCareData);
    }, []);

    useEffect(() => {

      if (childCareData) {
        console.log(childCareData)
        const metaPostalCodeData = extractPostalCodeFromMetaData(childCareData)
        const filteredChildCareData = filterGeoJsonData(childCareData, metaPostalCodeData, town)
        setSelectedChildCareData(filteredChildCareData);
      };

      if (elderlyCareData) {
        const metaPostalCodeData = extractPostalCodeFromMetaData(elderlyCareData)
        const filteredElderlyCareData = filterGeoJsonData(elderlyCareData, metaPostalCodeData, town)
        setSelectedElderlyCareData(filteredElderlyCareData);
      };

    }, [childCareData, elderlyCareData, town]);

    return (
        <div>
            {selectedChildCareData && selectedElderlyCareData ?
                <MapChildAndElderlyCare centerCoordinate={[1.3778, 103.8554]} 
                                        zoomValue={13} 
                                        childCareData={selectedChildCareData}
                                        elderlyCareData={selectedElderlyCareData} 
                                        newCenter={[selectedLat, selectedLon]} />:
                <p>Loading map with pins...</p>
            }
        </div>
    )
}

export default PlotChildAndElderlyCareMapByTown