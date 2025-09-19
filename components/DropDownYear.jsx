import { useEffect, useState } from 'react';
import { getYearInResale } from '../scripts/RestApiDataSource.js'

const DropDownYear = ({ setParentComponentYear }) => {

    const [options, setOptions] = useState([]);
    const [selectedYear, setSelectedYear] = useState('');

    useEffect(() => {
        getYearInResale(setOptions);
    }, []);

    useEffect(() => {
        if (options.length > 0) {
            setSelectedYear(options[0]);
            setParentComponentYear(options[0]);
        }
    }, [options, setParentComponentYear]);

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

export default DropDownYear