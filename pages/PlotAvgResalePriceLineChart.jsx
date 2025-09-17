import { useEffect, useState } from 'react';
import { getAvgDataByTown } from '../scripts/RestApiDataSource.js'
import LineChart from '../components/LineChart';

const PlotAvgResalePriceLineChart = ({ town }) => {
    const [data, setData] = useState(null);
    const [labels, setLabels] = useState(null);
    const [twoRoomPrice, setTwoRoomPrice] = useState(null);
    const [threeRoomPrice, setThreeRoomPrice] = useState(null);
    const [fourRoomPrice, setFourRoomPrice] = useState(null);
    const [fiveRoomPrice, setFiveRoomPrice] = useState(null);
    const [executivePrice, setExecutivePrice] = useState(null);
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
                const currentYearData = tempAvgData.map(item => item.transact_year);
                
                // Pre-filled with zero if length is not same
                if (priceData.length > 0 && priceData.length < maxLength) {
                    priceData = [
                        ...Array(Math.max(0, maxLength - priceData.length)).fill(0),
                        ...priceData
                    ];
                }
                
                // Set appropriate state based on type
                if (flatType === "2 room") {
                    setTwoRoomPrice(priceData);
                }
                else if (flatType === "3 room") {
                    setThreeRoomPrice(priceData);
                }
                else if (flatType === "4 room") {
                    setFourRoomPrice(priceData);
                }
                else if (flatType === "5 room") {
                    setFiveRoomPrice(priceData);
                }
                else if (flatType === "Executive") {
                    setExecutivePrice(priceData);
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
        {twoRoomPrice && twoRoomPrice.length > 0 ? 
            <LineChart labels={labels} values={twoRoomPrice} title="2 room" /> : <></>
        }
        {threeRoomPrice && threeRoomPrice.length > 0 ? 
            <LineChart labels={labels} values={threeRoomPrice} title="3 room" /> : <></>
        }
        {fourRoomPrice && fourRoomPrice.length > 0 ?
            <LineChart labels={labels} values={fourRoomPrice} title="4 room" /> : <></>
        }
        {fiveRoomPrice && fiveRoomPrice.length > 0 ?
            <LineChart labels={labels} values={fiveRoomPrice} title="5 room" /> : <></>
        }
        {executivePrice && executivePrice.length > 0 ?
            <LineChart labels={labels} values={executivePrice} title="Executive" /> : <></>
        }
      </div>
    )
}

export default PlotAvgResalePriceLineChart