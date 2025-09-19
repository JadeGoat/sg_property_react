import { useState, useEffect } from 'react';
import { getYearInResale } from '../scripts/RestApiDataSource.js'
import DropDown from '../components/DropDown.jsx'
import PlotAvgResalePriceBarChart from './PlotAvgResalePriceBarChart'
import PlotAvgResalePriceHeatmap from './PlotAvgResalePriceHeatmap';

const ViewResaleByYear = () => {

    const [options, setOptions] = useState([])
    const [selectedYear, setSelectedYear] = useState("");

    useEffect(() => {
      getYearInResale(setOptions);
    }, []);

    return (
      <div>
        <DropDown options={options} 
                  desc={"Select Year:"} 
                  setParentComponent={setSelectedYear} />
        <PlotAvgResalePriceHeatmap year={selectedYear} normalizeFlag={false}/>
        <PlotAvgResalePriceBarChart year={selectedYear} />
      </div>
    )
}

export default ViewResaleByYear