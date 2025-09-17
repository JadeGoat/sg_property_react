import { useEffect, useState } from 'react';
import { getYear } from '../scripts/RestApiDataSource.js'
import PlotAvgResalePriceChart from './PlotAvgResalePriceChart'

const ViewResaleByYear = () => {

    const [options, setOptions] = useState(null);
    const [selectedYear, setSelectedYear] = useState('');

    useEffect(() => {
        getYear(setOptions);
    }, []);

    useEffect(() => {
        if (options) {
            setSelectedYear(options[0]);
        }
    }, [options]);

    const handleChange = (e) => {
        setSelectedYear(e.target.value);
    };
    
    return (
        <div>
            <label htmlFor="year-select">Select Year:</label>
            {options ?
                <select id="year-select" value={selectedYear} onChange={handleChange}> 
                    {options.map((year, index) => (
                        <option key={index} value={year}>
                            {year}
                        </option>
                    ))}
                </select> : 
                <p>Loading dropdown...</p>}
            <PlotAvgResalePriceChart year={selectedYear} />
        </div>
    )
}

export default ViewResaleByYear