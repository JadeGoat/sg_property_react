import { useEffect, useState } from 'react';
import { getRentalDataByTown } from '../scripts/RestApiDataSource.js'
import LineChartCompare from '../components/LineChartCompare.jsx';

const PlotAvgRentalPriceLineChart = ({ town }) => {
    const [data, setData] = useState(null);
    const [labels, setLabels] = useState(null);

    const [twoRoomPrice, setTwoRoomPrice] = useState(null);
    const [threeRoomPrice, setThreeRoomPrice] = useState(null);
    const [fourRoomPrice, setFourRoomPrice] = useState(null);
    const [fiveRoomPrice, setFiveRoomPrice] = useState(null);
    const [executivePrice, setExecutivePrice] = useState(null);

    const sgFlats = ["2-room", "3-room", "4-room", "5-room", "Executive"]

    useEffect(() => {
      getRentalDataByTown(town, setData);
    }, [town]);

    useEffect(() => {
      if (data && data.length > 0) {

        // Find max length of year in the data
        const uniqueYear = new Set(data.map(item => item.approval_year));
        const maxLength = uniqueYear.size;
        var maxYearData = []

        sgFlats.forEach(flatType => {
            // Filter out the flat type
            const tempAvgData = data.filter(item => item.flat_type === flatType.toUpperCase());
            if (tempAvgData) {

                var rentData = tempAvgData.map(item => item.monthly_rent_mean);
                const currentYearData = tempAvgData.map(item => item.approval_year);

                // Pre-filled with zero if length is not same
                if (rentData.length > 0 && rentData.length < maxLength) {
                    rentData = [
                        ...Array(Math.max(0, maxLength - rentData.length)).fill(0),
                        ...rentData
                    ];
                }
                
                // Set appropriate state based on type
                if (flatType === sgFlats[0]) {
                    setTwoRoomPrice(rentData);
                }
                else if (flatType === sgFlats[1]) {
                    setThreeRoomPrice(rentData);
                }
                else if (flatType === sgFlats[2]) {
                    setFourRoomPrice(rentData);
                }
                else if (flatType === sgFlats[3]) {
                    setFiveRoomPrice(rentData);
                }
                else if (flatType === sgFlats[4]) {
                    setExecutivePrice(rentData);
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
        <h2>Mean Rental Price</h2>
        <LineChartCompare labels={labels} 
                          values={[twoRoomPrice, 
                                   threeRoomPrice, 
                                   fourRoomPrice, 
                                   fiveRoomPrice, 
                                   executivePrice]} 
                          line_titles={sgFlats} />
      </div>
    )
}

export default PlotAvgRentalPriceLineChart