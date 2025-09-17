import { useState } from 'react';
import DropDownYear from '../components/DropDownYear'
import PlotAvgResalePriceBarChart from './PlotAvgResalePriceBarChart'
import PlotAvgResalePriceHeatmap from './PlotAvgResalePriceHeatmap';

const ViewResaleByYear = () => {

    const [selectedYear, setSelectedYear] = useState("");
    return (
        <div>
            <DropDownYear setParentComponentYear={setSelectedYear} />
            <PlotAvgResalePriceHeatmap year={selectedYear} normalizeFlag={false}/>
            <PlotAvgResalePriceBarChart year={selectedYear} />
        </div>
    )
}

export default ViewResaleByYear