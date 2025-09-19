import { useEffect, useState } from 'react';
import { getRentalDataByYear } from '../scripts/RestApiDataSource.js'
import BarChartCompare from '../components/BarChartCompare.jsx';

const PlotAvgRentalPriceBarChart = ({ year }) => {
    const [data, setData] = useState(null);
    const [labels, setLabels] = useState(null);
    const [meanPrice, setMeanPrice] = useState(null);
    const [medianPrice, setMedianPrice] = useState(null);

    useEffect(() => {
      getRentalDataByYear(year, setData);
    }, [year]);

    useEffect(() => {
      if (data) {
        setLabels(data.map(item => item.town));
        setMeanPrice(data.map(item => item.monthly_rent_mean));
        setMedianPrice(data.map(item => item.monthly_rent_median));
      }
    }, [data]);

  return (
    <div>
      <h2>Resale Price (Mean vs Median)</h2>
      {meanPrice ? 
        <BarChartCompare labels={labels} 
                         values={[meanPrice, medianPrice]}
                         bar_titles={['mean', 'median']}/> : 
        <p>Loading chart...</p>}
    </div>
  );
};

export default PlotAvgRentalPriceBarChart;
