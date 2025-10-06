import { useState, useEffect } from 'react';
import { getTownInRental } from '../scripts/RestApiDataSource.js'
import DropDown from '../components/DropDown.jsx'
import PlotRetailServicesMapByRadius from './PlotRetailServicesMapByRadius.jsx'

const ViewRetailServicesByTown = () => {
    const [options, setOptions] = useState([])
    const [selectedTown, setSelectedTown] = useState("");

    useEffect(() => {
        getTownInRental(setOptions);
    }, []);

    return (
      <div>
        <DropDown options={options} 
                  desc={"Select Town:"} 
                  setParentComponent={setSelectedTown} />
                  
        {selectedTown != "" ?
          <div>
            <PlotRetailServicesMapByRadius town={selectedTown} />
          </div>: <></>
        }
      </div>
    )
}

export default ViewRetailServicesByTown