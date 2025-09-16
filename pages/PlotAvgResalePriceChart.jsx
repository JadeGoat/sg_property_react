import { useEffect, useState } from 'react';
import axios from 'axios';
import BarChartCompare from '../components/BarChartCompare';

const PlotAvgResalePriceChart = ({ year }) => {
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
        axios.get(`http://localhost:3001/api/data?year=${year}`)
        .then(response => {
            const data = response.data;
            setLabels(data.map(item => item.town));
            setMeanPrice(data.map(item => item.resale_price_mean));
            setMedianPrice(data.map(item => item.resale_price_median));
            setMeanPerSqm(data.map(item => item.resale_per_sqm_mean));
            setMedianPerSqm(data.map(item => item.resale_per_sqm_median));
            setMeanPerLease(data.map(item => item.resale_per_lease_mean));
            setMedianPerLease(data.map(item => item.resale_per_lease_median));
            setMeanPerSqmPerLease(data.map(item => item.resale_per_sqm_per_lease_mean));
            setMedianPerSqmPerLease(data.map(item => item.resale_per_sqm_per_lease_median));
        })
        .catch(error => console.error('Error loading chart data:', error));
    }, [year]);

  return (
    <div>
      <h2>Resale Price (Mean vs Median)</h2>
      {meanPrice ? 
        <BarChartCompare labels={labels} 
                         values1={meanPrice} 
                         values2={medianPrice}/> : 
        <p>Loading chart...</p>}
      
      <h2>Resale Price Per Sqm (Mean vs Median)</h2>
      {meanPerSqm ? 
        <BarChartCompare labels={labels} 
                         values1={meanPerSqm} 
                         values2={medianPerSqm}/> : 
        <p>Loading chart...</p>}
      
      <h2>Resale Price Per Remaining Lease (Mean vs Median)</h2>
      {meanPerLease ? 
        <BarChartCompare labels={labels} 
                         values1={meanPerLease} 
                         values2={medianPerLease}/> : 
        <p>Loading chart...</p>}

      <h2>Resale Price Per Sqm Per Remaining Lease (Mean vs Median)</h2>
      {meanPerLease ? 
        <BarChartCompare labels={labels} 
                         values1={meanPerSqmPerLease} 
                         values2={medianPerSqmPerLease}/> : 
        <p>Loading chart...</p>}
    </div>
  );
};

export default PlotAvgResalePriceChart;
