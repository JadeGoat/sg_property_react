import { useEffect, useState } from 'react';
import { getCarparkDataByTown } from '../scripts/RestApiDataSource.js'
import MapWithPins from '../components/MapWithPins.jsx';

const PlotCarparkHeatmapByTown = ({ town }) => {

  const [data, setData] = useState(null);
  const [selectedLat, setSelectedLat] = useState(null);
  const [selectedLon, setSelectedLon] = useState(null);
  const [locationPoints, setLocationPoints] = useState(null);
  const sgTowns = {
    "Ang Mo Kio": [1.3778, 103.8554],
    "Bedok": [1.3244, 103.9301],
    "Bishan": [1.3508, 103.8485],
    "Bukit Batok": [1.3496, 103.7499],
    "Bukit Merah": [1.2776, 103.8198],
    "Bukit Panjang": [1.3784, 103.7642],
    "Bukit Timah": [1.3294, 103.8021],
    "Central Area": [1.2903, 103.8519],
    "Choa Chu Kang": [1.3850, 103.7450],
    "Clementi": [1.3151, 103.7656],
    "Geylang": [1.3160, 103.8860],
    "Hougang": [1.3711, 103.8864],
    "Jurong East": [1.3331, 103.7430],
    "Jurong West": [1.3521, 103.7074],
    "Kallang/Whampoa": [1.3089, 103.8660],
    "Marine Parade": [1.3039, 103.9057],
    "Pasir Ris": [1.3736, 103.9497],
    "Punggol": [1.4043, 103.9020],
    "Queenstown": [1.2946, 103.8030],
    "Sembawang": [1.4491, 103.8185],
    "Sengkang": [1.3911, 103.8950],
    "Serangoon": [1.3644, 103.8701],
    "Tampines": [1.3496, 103.9568],
    "Tengah": [1.3587, 103.7295],
    "Toa Payoh": [1.3345, 103.8490],
    "Woodlands": [1.4380, 103.7865],
    "Yishun": [1.4294, 103.8355]
  };

  useEffect(() => {

    // Set carpark data
    getCarparkDataByTown(town, setData);
    
    // Set lat, lon
    const key = findOriginalKey(sgTowns, town)
    setSelectedLat(sgTowns[key][0]);
    setSelectedLon(sgTowns[key][1]);

  }, [town]);

  useEffect(() => {
      if (data && data.length > 0) {
        setLocationPoints(data)
      }
  }, [data]);

  function findOriginalKey(dict, searchKey) {
    const upperSearch = searchKey.toUpperCase();
    return Object.keys(dict).find(key => key.toUpperCase() === upperSearch);
  }

  return (
      <div>
          {locationPoints ?
            <MapWithPins centerCoordinate={[selectedLat, selectedLon]} 
                         zoomValue={15}
                         locations={locationPoints}/>:
            <p>Loading map with pins...</p>
          }
      </div>
  )
}

export default PlotCarparkHeatmapByTown