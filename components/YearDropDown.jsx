import { useEffect, useState } from 'react';
import { getYear } from '../scripts/RestApiDataSource.js'

const YearDropDown = ({ setParentComponentYear }) => {

    const [options, setOptions] = useState(null);
    const [selectedYear, setSelectedYear] = useState('');

    useEffect(() => {
        getYear(setOptions);
    }, []);

    useEffect(() => {
        if (options) {
            setSelectedYear(options[0]);
            setParentComponentYear(options[0]);
        }
    }, [options]);

    const handleChange = (e) => {
        setSelectedYear(e.target.value);
        setParentComponentYear(e.target.value);
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
        </div>
    )
}

export default YearDropDown