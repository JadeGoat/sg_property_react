import { useState } from 'react';
import YearDropDown from '../components/YearDropDown'
import PlotAvgResalePriceBarChart from './PlotAvgResalePriceBarChart'
import PlotAvgResalePriceHeatmap from './PlotAvgResalePriceHeatmap';

const ViewResaleByYear = () => {

    const [selectedYear, setSelectedYear] = useState("");
    return (
        <div>
            <YearDropDown setParentComponentYear={setSelectedYear} />
            <PlotAvgResalePriceHeatmap year={selectedYear} normalizeFlag={false}/>
            <PlotAvgResalePriceBarChart year={selectedYear} />
        </div>
    )
}

export default ViewResaleByYear