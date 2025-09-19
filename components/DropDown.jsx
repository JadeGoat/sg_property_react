import { useEffect, useState } from 'react';

const DropDown = ({ options, desc, setParentComponent }) => {

    const [selectedValue, setSelectedValue] = useState('');

    useEffect(() => {
        if (options.length > 0) {
            setSelectedValue(options[0]);
            setParentComponent(options[0]);
        }
    }, [options, setParentComponent]);

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
        setParentComponent(e.target.value);
    };

    return (
        <div>
            <label htmlFor="select">{desc}</label>
            {options ?
                <select id="select" value={selectedValue} onChange={handleChange}> 
                    {options.map((value, index) => (
                        <option key={index} value={value}>
                            {value}
                        </option>
                    ))}
                </select> : 
                <p>Loading dropdown...</p>}
        </div>
    )
}

export default DropDown