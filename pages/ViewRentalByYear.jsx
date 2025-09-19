import { useState, useEffect } from 'react';
import { getYearInRental } from '../scripts/RestApiDataSource.js'
import DropDown from '../components/DropDown.jsx'
import PlotAvgRentalPriceBarChart from './PlotAvgRentalPriceBarChart.jsx'
import PlotAvgRentalPriceHeatmap from './PlotAvgRentalPriceHeatmap.jsx';

const ViewRentalByYear = () => {

    const [options, setOptions] = useState([])
    const [selectedYear, setSelectedYear] = useState("");

    useEffect(() => {
      getYearInRental(setOptions);
    }, []);
    console.log(options)
    return (
      <div>
        <DropDown options={options} 
                  desc={"Select Year:"} 
                  setParentComponent={setSelectedYear} />

        {selectedYear != "" ?
          <div>
            <PlotAvgRentalPriceHeatmap year={selectedYear} normalizeFlag={false}/>
            <PlotAvgRentalPriceBarChart year={selectedYear} />
          </div>: <></>
        }
      </div>
    )
}

export default ViewRentalByYear