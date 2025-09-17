import { useEffect, useState } from 'react';
import { getAvgDataByYear } from '../scripts/RestApiDataSource.js'
import Heatmap from '../components/Heatmap.jsx';

const PlotAvgResalePriceHeatmap = ({ year }) => {

  const [data, setData] = useState(null);
  const [heatmapPoints, setHeatmapPoints] = useState(null);

  useEffect(() => {
    getAvgDataByYear(year, setData);
  }, [year]);

  useEffect(() => {
      if (data) {
        // Sample coordinates around Singapore with intensity
        setHeatmapPoints([
          [1.3521, 103.8198, 0.5], // Central
          [1.3000, 103.8000, 0.8], // South
          [1.3600, 103.9400, 0.6], // East
          [1.4000, 103.7700, 0.9], // North
          [1.3100, 103.7600, 0.7], // West
        ]);
      }
    }, [data]);

  return (
      <div>
          {heatmapPoints ?
            <Heatmap centerCoordinate={[1.3521, 103.8198]} 
                      zoomValue={11}
                      heatmapCoordinates={heatmapPoints}/>:
            <p>Loading heatmap...</p>
          }
      </div>
  )
}

export default PlotAvgResalePriceHeatmap