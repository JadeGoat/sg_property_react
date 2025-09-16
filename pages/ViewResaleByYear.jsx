import { useState } from 'react';
import PlotAvgResalePriceChart from './PlotAvgResalePriceChart'

const ViewResaleByYear = () => {

    const [selectedYear, setSelectedYear] = useState('2025');

    const handleChange = (e) => {
        setSelectedYear(e.target.value);
    };

    return (
        <div>
            <label htmlFor="year-select">Select Year:</label>
            <select id="year-select" value={selectedYear} onChange={handleChange}>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            </select>
            <PlotAvgResalePriceChart year={selectedYear} />
        </div>
    )
}

export default ViewResaleByYear