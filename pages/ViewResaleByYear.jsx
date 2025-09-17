import { useState } from 'react';
import YearDropDown from '../components/YearDropDown'
import PlotAvgResalePriceChart from './PlotAvgResalePriceChart'
import PlotHeatmap from './PlotHeatmap';

const ViewResaleByYear = () => {

    const [selectedYear, setSelectedYear] = useState("");
    return (
        <div>
            <YearDropDown setParentComponentYear={setSelectedYear} />
            <PlotHeatmap year={selectedYear}/>
            <PlotAvgResalePriceChart year={selectedYear} />
        </div>
    )
}

export default ViewResaleByYear