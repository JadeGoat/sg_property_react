import { useEffect, useState } from 'react';
import { getAvgDataByTown } from '../scripts/RestApiDataSource.js'
import LineChartCompare from '../components/LineChartCompare';

const PlotAvgResalePriceLineChart = ({ town }) => {
    const [data, setData] = useState(null);
    const [labels, setLabels] = useState(null);

    const [twoRoomPrice, setTwoRoomPrice] = useState(null);
    const [threeRoomPrice, setThreeRoomPrice] = useState(null);
    const [fourRoomPrice, setFourRoomPrice] = useState(null);
    const [fiveRoomPrice, setFiveRoomPrice] = useState(null);
    const [executivePrice, setExecutivePrice] = useState(null);

    const [twoRoomPerSqmPrice, setTwoRoomPerSqmPrice] = useState(null);
    const [threeRoomPerSqmPrice, setThreeRoomPerSqmPrice] = useState(null);
    const [fourRoomPerSqmPrice, setFourRoomPerSqmPrice] = useState(null);
    const [fiveRoomPerSqmPrice, setFiveRoomPerSqmPrice] = useState(null);
    const [executivePerSqmPrice, setExecutivePerSqmPrice] = useState(null);

    const [twoRoomPerLeasePrice, setTwoRoomPerLeasePrice] = useState(null);
    const [threeRoomPerLeasePrice, setThreeRoomPerLeasePrice] = useState(null);
    const [fourRoomPerLeasePrice, setFourRoomPerLeasePrice] = useState(null);
    const [fiveRoomPerLeasePrice, setFiveRoomPerLeasePrice] = useState(null);
    const [executivePerLeasePrice, setExecutivePerLeasePrice] = useState(null);

    const [twoRoomPerSqmPerLeasePrice, setTwoRoomPerSqmPerLeasePrice] = useState(null);
    const [threeRoomPerSqmPerLeasePrice, setThreeRoomPerSqmPerLeasePrice] = useState(null);
    const [fourRoomPerSqmPerLeasePrice, setFourRoomPerSqmPerLeasePrice] = useState(null);
    const [fiveRoomPerSqmPerLeasePrice, setFiveRoomPerSqmPerLeasePrice] = useState(null);
    const [executivePerSqmPerLeasePrice, setExecutivePerSqmPerLeasePrice] = useState(null);

    const sgFlats = ["2 room", "3 room", "4 room", "5 room", "Executive"]

    useEffect(() => {
      getAvgDataByTown(town, setData);
    }, [town]);

    useEffect(() => {
      if (data && data.length > 0) {

        // Find max length of year in the data
        const uniqueYear = new Set(data.map(item => item.transact_year));
        const maxLength = uniqueYear.size;
        var maxYearData = []

        sgFlats.forEach(flatType => {
            // Filter out the flat type
            const tempAvgData = data.filter(item => item.flat_type === flatType.toUpperCase());
            if (tempAvgData) {
                
                var priceData = tempAvgData.map(item => item.resale_price_mean);
                var pricePerSqmData = tempAvgData.map(item => item.resale_per_sqm_mean);
                var pricePerLeaseData = tempAvgData.map(item => item.resale_per_lease_mean);
                var pricePerSqmPerLeaseData = tempAvgData.map(item => item.resale_per_sqm_per_lease_mean);
                const currentYearData = tempAvgData.map(item => item.transact_year);
                
                // Pre-filled with zero if length is not same
                if (priceData.length > 0 && priceData.length < maxLength) {
                    priceData = [
                        ...Array(Math.max(0, maxLength - priceData.length)).fill(0),
                        ...priceData
                    ];
                    pricePerSqmData = [
                        ...Array(Math.max(0, maxLength - pricePerSqmData.length)).fill(0),
                        ...pricePerSqmData
                    ];
                    pricePerLeaseData = [
                        ...Array(Math.max(0, maxLength - pricePerLeaseData.length)).fill(0),
                        ...pricePerLeaseData
                    ];
                    pricePerSqmPerLeaseData = [
                        ...Array(Math.max(0, maxLength - pricePerSqmPerLeaseData.length)).fill(0),
                        ...pricePerSqmPerLeaseData
                    ];
                }
                
                // Set appropriate state based on type
                if (flatType === sgFlats[0]) {
                    setTwoRoomPrice(priceData);
                    setTwoRoomPerSqmPrice(pricePerSqmData);
                    setTwoRoomPerLeasePrice(pricePerLeaseData);
                    setTwoRoomPerSqmPerLeasePrice(pricePerSqmPerLeaseData);
                }
                else if (flatType === sgFlats[1]) {
                    setThreeRoomPrice(priceData);
                    setThreeRoomPerSqmPrice(pricePerSqmData);
                    setThreeRoomPerLeasePrice(pricePerLeaseData);
                    setThreeRoomPerSqmPerLeasePrice(pricePerSqmPerLeaseData);
                }
                else if (flatType === sgFlats[2]) {
                    setFourRoomPrice(priceData);
                    setFourRoomPerSqmPrice(pricePerSqmData);
                    setFourRoomPerLeasePrice(pricePerLeaseData);
                    setFourRoomPerSqmPerLeasePrice(pricePerSqmPerLeaseData);
                }
                else if (flatType === sgFlats[3]) {
                    setFiveRoomPrice(priceData);
                    setFiveRoomPerSqmPrice(pricePerSqmData);
                    setFiveRoomPerLeasePrice(pricePerLeaseData);
                    setFiveRoomPerSqmPerLeasePrice(pricePerSqmPerLeaseData);
                }
                else if (flatType === sgFlats[4]) {
                    setExecutivePrice(priceData);
                    setExecutivePerSqmPrice(pricePerSqmData);
                    setExecutivePerLeasePrice(pricePerLeaseData);
                    setExecutivePerSqmPerLeasePrice(pricePerSqmPerLeaseData);
                }

                // Use the larger year data
                if (maxYearData.length < currentYearData.length) {
                    maxYearData = currentYearData
                    setLabels(currentYearData)
                }
            }
            else {
                console.log("Missing flat type data: " + flatType)
            }
        })
      }
    }, [data]);

    return (
      <div>
        <h2>Mean Resale Price</h2>
        <LineChartCompare labels={labels} 
                          values={[twoRoomPrice, 
                                   threeRoomPrice, 
                                   fourRoomPrice, 
                                   fiveRoomPrice, 
                                   executivePrice]} 
                          line_titles={sgFlats} />

        <h2>Mean Resale Price (Per Sqm Per Lease)</h2>
        <LineChartCompare labels={labels} 
                          values={[twoRoomPerSqmPerLeasePrice, 
                                   threeRoomPerSqmPerLeasePrice, 
                                   fourRoomPerSqmPerLeasePrice, 
                                   fiveRoomPerSqmPerLeasePrice, 
                                   executivePerSqmPerLeasePrice]} 
                          line_titles={sgFlats} />
                          
        <h2>Mean Resale Price (Per Sqm)</h2>
        <LineChartCompare labels={labels} 
                          values={[twoRoomPerSqmPrice, 
                                   threeRoomPerSqmPrice, 
                                   fourRoomPerSqmPrice, 
                                   fiveRoomPerSqmPrice, 
                                   executivePerSqmPrice]} 
                          line_titles={sgFlats} />
        
        <h2>Mean Resale Price (Per Lease)</h2>
        <LineChartCompare labels={labels} 
                          values={[twoRoomPerLeasePrice, 
                                   threeRoomPerLeasePrice, 
                                   fourRoomPerLeasePrice, 
                                   fiveRoomPerLeasePrice, 
                                   executivePerLeasePrice]} 
                          line_titles={sgFlats} />
      </div>
    )
}

export default PlotAvgResalePriceLineChart