import { useState } from 'react';
import YearDropDown from '../components/YearDropDown'
import PlotAvgResalePriceChart from './PlotAvgResalePriceChart'

const ViewResaleByYear = () => {

    const [selectedYear, setSelectedYear] = useState("");
    return (
        <div>
            <YearDropDown setParentComponentYear={setSelectedYear} />
            <PlotAvgResalePriceChart year={selectedYear} />
        </div>
    )
}

export default ViewResaleByYear