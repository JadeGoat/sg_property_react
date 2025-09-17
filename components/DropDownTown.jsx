import { useEffect, useState } from 'react';
import { getTown } from '../scripts/RestApiDataSource.js'

const DropDownTown = ({ setParentComponentTown }) => {

    const [options, setOptions] = useState([]);
    const [selectedTown, setSelectedTown] = useState('');

    useEffect(() => {
        getTown(setOptions);
    }, []);

    useEffect(() => {
        if (options.length > 0) {
            setSelectedTown(options[0]);
            setParentComponentTown(options[0]);
        }
    }, [options, setParentComponentTown]);

    const handleChange = (e) => {
        setSelectedTown(e.target.value);
        setParentComponentTown(e.target.value);
    };

    return (
        <div>
            <label htmlFor="town-select">Select Town:</label>
            {options ?
                <select id="town-select" value={selectedTown} onChange={handleChange}> 
                    {options.map((town, index) => (
                        <option key={index} value={town}>
                            {town}
                        </option>
                    ))}
                </select> : 
                <p>Loading dropdown...</p>}
        </div>
    )
}

export default DropDownTown