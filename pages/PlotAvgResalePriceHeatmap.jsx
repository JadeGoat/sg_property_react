import { useEffect, useState } from 'react';
import { getAvgDataByYear } from '../scripts/RestApiDataSource.js'
import Heatmap from '../components/Heatmap.jsx';

const PlotAvgResalePriceHeatmap = ({ year, normalizeFlag }) => {

  const [data, setData] = useState(null);
  const [heatmapPoints, setHeatmapPoints] = useState(null);
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
    "Toa Payoh": [1.3345, 103.8490],
    "Woodlands": [1.4380, 103.7865],
    "Yishun": [1.4294, 103.8355]
  };

  useEffect(() => {
    getAvgDataByYear(year, setData);
  }, [year]);

  useEffect(() => {
      if (data && data.length > 0) {

        // Get the highest resale price across sg
        const highestResalePrice = data.reduce((highest, item) => {
          return item.resale_price_mean > highest.resale_price_mean ? item : highest;
        });

        // Make a copy of sgTowns to modify
        var tempHeatmap = { ...sgTowns }

        for (const [town, [lat, lon]] of Object.entries(sgTowns)) {
          
          // Find matching town desciption
          const tempAvgData = data.find(item => item.town === town.toUpperCase())
          if (tempAvgData) {
            // Add resale price to the copy of sgTown
            const heatmapValue = tempAvgData.resale_price_mean / highestResalePrice.resale_price_mean
            tempHeatmap[town] = [lat, lon, heatmapValue]
          }
          else {
            console.log("Missing town data: " + town)
          }
        }

        if (normalizeFlag) {
          console.log(Object.values(tempHeatmap))
          tempHeatmap = normalizeValue(tempHeatmap)
          console.log(Object.values(tempHeatmap))
        }
      
        // Update the copy of sgTowns to heatmap
        setHeatmapPoints(Object.values(tempHeatmap))
      }
    }, [data, normalizeFlag]);

  function normalizeValue(heatmapLookup) {
    // Step 1: Extract all z values
    const zValues = Object.values(heatmapLookup).map(([, , z]) => z);

    // Step 2: Find min and max of z
    const minZ = Math.min(...zValues);
    const maxZ = Math.max(...zValues);
    const offset = 0.5;

    // Step 3: Normalize only z
    for (const town in heatmapLookup) {
      const [x, y, z] = heatmapLookup[town];
      const normZ = (z - minZ) / (maxZ - minZ || 1) + offset; // avoid divide by zero
      heatmapLookup[town] = [x, y, normZ];
    }
    
    return heatmapLookup
  }

  return (
      <div>
          <h2>SG Heatmap (Median)</h2>
          {heatmapPoints ?
            <Heatmap centerCoordinate={[1.3531, 103.8198]} 
                      zoomValue={11}
                      heatmapCoordinates={heatmapPoints}/>:
            <p>Loading heatmap...</p>
          }
      </div>
  )
}

export default PlotAvgResalePriceHeatmap