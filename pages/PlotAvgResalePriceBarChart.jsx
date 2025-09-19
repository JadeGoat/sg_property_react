import { useEffect, useState } from 'react';
import { getResaleDataByYear } from '../scripts/RestApiDataSource.js'
import BarChartCompare from '../components/BarChartCompare';

const PlotAvgResalePriceBarChart = ({ year }) => {
    const [data, setData] = useState(null);
    const [labels, setLabels] = useState(null);
    const [meanPrice, setMeanPrice] = useState(null);
    const [medianPrice, setMedianPrice] = useState(null);
    const [meanPerSqm, setMeanPerSqm] = useState(null);
    const [medianPerSqm, setMedianPerSqm] = useState(null);
    const [meanPerLease, setMeanPerLease] = useState(null);
    const [medianPerLease, setMedianPerLease] = useState(null);
    const [meanPerSqmPerLease, setMeanPerSqmPerLease] = useState(null);
    const [medianPerSqmPerLease, setMedianPerSqmPerLease] = useState(null);

    useEffect(() => {
      getResaleDataByYear(year, setData);
    }, [year]);

    useEffect(() => {
      if (data) {
        setLabels(data.map(item => item.town));
        setMeanPrice(data.map(item => item.resale_price_mean));
        setMedianPrice(data.map(item => item.resale_price_median));
        setMeanPerSqm(data.map(item => item.resale_per_sqm_mean));
        setMedianPerSqm(data.map(item => item.resale_per_sqm_median));
        setMeanPerLease(data.map(item => item.resale_per_lease_mean));
        setMedianPerLease(data.map(item => item.resale_per_lease_median));
        setMeanPerSqmPerLease(data.map(item => item.resale_per_sqm_per_lease_mean));
        setMedianPerSqmPerLease(data.map(item => item.resale_per_sqm_per_lease_median));
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
      
      <h2>Resale Price Per Sqm (Mean vs Median)</h2>
      {meanPerSqm ? 
        <BarChartCompare labels={labels} 
                         values={[meanPerSqm, medianPerSqm]}
                         bar_titles={['mean', 'median']}/> : 
        <p>Loading chart...</p>}
      
      <h2>Resale Price Per Remaining Lease (Mean vs Median)</h2>
      {meanPerLease ? 
        <BarChartCompare labels={labels} 
                         values={[meanPerLease, medianPerLease]}
                         bar_titles={['mean', 'median']}/> :
        <p>Loading chart...</p>}

      <h2>Resale Price Per Sqm Per Remaining Lease (Mean vs Median)</h2>
      {meanPerLease ? 
        <BarChartCompare labels={labels} 
                         values={[meanPerSqmPerLease, medianPerSqmPerLease]}
                         bar_titles={['mean', 'median']}/> : 
        <p>Loading chart...</p>}
    </div>
  );
};

export default PlotAvgResalePriceBarChart;
