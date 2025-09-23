import { useEffect, useState } from 'react';
import { getBusStopDataByTown } from '../scripts/RestApiDataSource.js'
import { getTownLatLon } from '../scripts/SgTownHelper.js'
import MapCarpark from '../components/MapCarpark.jsx';

const PlotBusStopMapByTown = ({ town }) => {

  const [data, setData] = useState(null);
  const [selectedLat, setSelectedLat] = useState(null);
  const [selectedLon, setSelectedLon] = useState(null);
  const [locationPoints, setLocationPoints] = useState(null);
  
  useEffect(() => {

    // Set carpark data
    getBusStopDataByTown(town, setData);
    
    // Set lat, lon
    const latlon = getTownLatLon(town)
    setSelectedLat(latlon[0]);
    setSelectedLon(latlon[1]);

  }, [town]);

  useEffect(() => {
      if (data && data.length > 0) {
        setLocationPoints(data)
      }
  }, [data]);

  return (
      <div>
          {locationPoints ?
            <MapCarpark centerCoordinate={[1.3778, 103.8554]} 
                        zoomValue={13}
                        locations={locationPoints}
                        newCenter={[selectedLat, selectedLon]} />:
            <p>Loading map with pins...</p>
          }
      </div>
  )
}

export default PlotBusStopMapByTown