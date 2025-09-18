import { useEffect, useState } from 'react';
import { getAvgDataByTown } from '../scripts/RestApiDataSource.js'
import BarChart from '../components/BarChart';

const PlotAvgResaleLeaseBarChart = ({ town }) => {

    const [data, setData] = useState(null);
    const [labels, setLabels] = useState(null);
    const [leaseRemaining, setLeaseRemaining] = useState(null);
    const sgFlats = ["2 room", "3 room", "4 room", "5 room", "Executive"]

    useEffect(() => {
      getAvgDataByTown(town, setData);
    }, [town]);

    useEffect(() => {
      if (data) {

        sgFlats.forEach(flatType => {
            // Filter out the flat type
            const tempAvgData = data.filter(item => item.flat_type === flatType.toUpperCase());
            if (tempAvgData) {
                setLabels(tempAvgData.map(item => item.transact_year));
                setLeaseRemaining(tempAvgData.map(item => item.lease_remaining_mean));
            }
        })
      }
    }, [data]);

    return (
        <div>
            <h2>Resale Price (Mean vs Median)</h2>
            {leaseRemaining ? 
                <BarChart labels={labels} 
                          values={leaseRemaining} /> : 
                <p>Loading chart...</p>}
        </div>
    )
}

export default PlotAvgResaleLeaseBarChart