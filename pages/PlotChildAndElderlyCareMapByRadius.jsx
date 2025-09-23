import { useEffect, useState } from 'react';
import { getChildCareData, getElderlyCareData } from '../scripts/RestApiDataSource.js'
import MapChildAndElderlyCare from '../components/MapChildAndElderlyCare.jsx';
import { getDistanceFromLatLonInKm } from '../scripts/MapUtils.js'
import { getTownLatLon } from '../scripts/SgTownHelper.js'

const PlotChildAndElderlyCareMapByRadius = ({ town }) => {

    const [selectedLat, setSelectedLat] = useState(null);
    const [selectedLon, setSelectedLon] = useState(null);

    const [childCareData, setChildCareData] = useState(null);
    const [elderlyCareData, setElderlyCareData] = useState(null);
    const [selectedChildCareData, setSelectedChildCareData] = useState(null);
    const [selectedElderlyCareData, setSelectedElderlyCareData] = useState(null);
    const [radius, ] = useState(2.5); // radius in km

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
        const filteredChildCareData = childCareData.features.filter(item => {
          const loc = item.geometry.coordinates;
          const dist = getDistanceFromLatLonInKm(selectedLat, selectedLon, loc[1], loc[0])
          return dist <= radius;
        });
        setSelectedChildCareData(filteredChildCareData);
      };

      if (elderlyCareData) {
        const filteredElderlyCareData = elderlyCareData.features.filter(item => {
          const loc = item.geometry.coordinates;
          const dist = getDistanceFromLatLonInKm(selectedLat, selectedLon, loc[1], loc[0]);
          return dist <= radius;
        });
        setSelectedElderlyCareData(filteredElderlyCareData);
      };

    }, [radius, selectedLat, selectedLon, childCareData, elderlyCareData]);

    return (
        <div>
            <h2>By radius from centre</h2>
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

export default PlotChildAndElderlyCareMapByRadius