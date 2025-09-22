import { useEffect, useState } from 'react';
import MapChildCare from '../components/MapChildCare.jsx';

const PlotChildCareMapByTown = () => {
    const [geoData, setGeoData] = useState(null);

    useEffect(() => {
        fetch('../child_care_data.geojson')
        .then(res => res.json())
        .then(data => setGeoData(data));
    }, []);

    return (
        <div>
            {geoData ?
            <MapChildCare centerCoordinate={[1.3778, 103.8554]} 
                        zoomValue={13} 
                        geojsonData={geoData}/>:
            <p>Loading map with pins...</p>
            }
        </div>
    )
}

export default PlotChildCareMapByTown