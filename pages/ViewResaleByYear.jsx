import { useState } from 'react';
import PlotAvgResalePriceChart from './PlotAvgResalePriceChart'
import YearDropDown from '../components/YearDropDown'
import HeatmapLayer from '../components/HeatmapLayer'

const ViewResaleByYear = () => {

    const [selectedYear, setSelectedYear] = useState("");
    return (
        <div>
            <YearDropDown setParentComponentYear={setSelectedYear} />
            <HeatmapLayer />
            <PlotAvgResalePriceChart year={selectedYear} />
        </div>
    )
}

export default ViewResaleByYear